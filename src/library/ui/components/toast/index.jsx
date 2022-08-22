import React, { useEffect, useMemo, useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { useUpdateEffect } from 'ahooks';
import { noop } from '../../utils/noop';
import Loading from '../loading';
import Mask from '../mask';
import { resolveContainer } from '../../utils/get-container';


const classPrefix = "b-toast";
const toastArray = [];

const InternalToast = (props) => {
    const { maskClickable = true, content, icon = null, position, wrapColor = 'rgba(0, 0, 0, 0.7)' } = props
    const top = useMemo(() => {
        switch (position) {
            case 'top':
                return '8.6%'
            case 'bottom':
                return '80%'
            default:
                return '50%'
        }
    }, [position])



    return (
        <Mask
            visible={props.visible}
            destroyOnClose
            opacity={props.opacity || 0}
            disableBodyScroll={!maskClickable}
            getContainer={props.getContainer}
            afterClose={props.afterClose}
            style={{ pointerEvents: maskClickable ? 'none' : 'all', ...props.maskStyle }}
            className={classNames(`${classPrefix}-mask`, props.maskClassName)}
        >
            <div style={{ top, backgroundColor: wrapColor }} className={`${classPrefix}-wrap`}>
                {Boolean(icon) && <div className={`${classPrefix}-icon`}>{icon}</div>}
                {Boolean(content) && <div className={`${classPrefix}-text`}>{content}</div>}
            </div>
        </Mask>
    )
};


// 可返回用于销毁此弹窗的方法
function show(props) {
    let updateConfig = () => { };
    let timer = 0;

    const { afterClose = noop, getContainer = () => document.body } = props
    const container = document.createElement('div')
    const bodyContainer = resolveContainer(getContainer)
    bodyContainer.appendChild(container)

    const TempToast = () => {
        const [visible, setVisible] = useState(true)
        const [state, setState] = useState({ duration: 2000, ...props })


        // clearDOM after animation
        const _afterClose = () => {
            afterClose()
            const unmountResult = ReactDOM.unmountComponentAtNode(container)
            if (unmountResult && container.parentNode) {
                container.parentNode.removeChild(container)
            }
        }
        const _afterClear = () => {
            const unmountResult = ReactDOM.unmountComponentAtNode(container)
            if (unmountResult && container.parentNode) {
                container.parentNode.removeChild(container)
            }
        }

        // close with animation
        const destroy = useCallback(() => {
            setVisible(false)
        }, [])

        useEffect(() => {
            _clear()
            toastArray.push(_afterClear)
        }, [])

        updateConfig = useCallback(
            nextState =>
                setState(prev =>
                    typeof nextState === 'function'
                        ? { ...prev, ...nextState(prev) }
                        : { ...prev, ...nextState }
                ),
            [setState]
        )

        useEffect(() => {
            if (state.duration !== 0 && 'duration' in state) {
                timer = window.setTimeout(destroy, state.duration)
            }
            return () => {
                if (timer !== 0) {
                    window.clearTimeout(timer)
                }
            }
        }, [])

        // 当修改 duration 时，重新计时
        useUpdateEffect(() => {
            if ('duration' in state) {
                window.clearTimeout(timer)
                timer = window.setTimeout(destroy, state.duration)
            }
        }, [state.duration])

        return (
            <InternalToast
                {...state}
                getContainer={() => container}
                visible={visible}
                afterClose={_afterClose}
            />
        )
    };

    ReactDOM.render(<TempToast />, container)
    return updateConfig;
}

function success(content, props) {
    return show({
        position: 'top',
        content,
        wrapColor:'rgba(255, 255, 255, 0.95)',
        ...props
    })
}

function error(content, props) {
    return show({
        position: 'top',
        content,
        wrapColor:'rgba(255, 255, 255, 0.95)',
        ...props
    })
}

function warning(content, props) {
    return show({
        position: 'top',
        content,
        wrapColor:'rgba(255, 255, 255, 0.95)',
        ...props
    })
}

function loading(props) {
    return show({
        icon: <Loading color='white' />,
        duration: 30000,
        ...props,
    })
}

// 同步的销毁
function _clear() {
    let fn = toastArray.pop();

    while (fn) {
        fn();
        fn = toastArray.pop();
    }
}

// 针对 toast 还没弹出来就立刻销毁的情况，将销毁放到下一个 event loop 中，避免销毁失败。
function clear() {
    setTimeout(_clear);
}

const Toast = {
    show: show,
    success: success,
    error: error,
    warning: warning,
    loading: loading,
    clear: clear
};

export default Toast;