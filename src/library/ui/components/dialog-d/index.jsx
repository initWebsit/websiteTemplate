import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { noop } from '../../utils/noop';
import { resolveContainer } from '../../utils/get-container';
import Button from '../button';
import Mask from '../mask';
import { CloseSvg } from '@/library/icons';


const classPrefix = "bd-dialog";

const InternalDialog = (props) => {
    return (
        <Mask
            visible={props.visible}
            destroyOnClose
            getContainer={props.getContainer}
            afterClose={props.afterClose}
            onMaskClick={
                props.maskClosable && !props.cancelProps?.loading
                    ? props.onCancel
                    : noop
            }
            style={props.maskStyle}
            className={classNames(`${classPrefix}-mask`, props.maskClassName)}
        >
            <div onClick={e => e.stopPropagation()} className={`${classPrefix}-wrap`}>
                {Boolean(props.headerImage) && (
                    <div className={`${classPrefix}-image`}>
                        <img src={props.headerImage} alt='inside dialog' />
                    </div>
                )}
                {Boolean(props.showCloseIcon) && (
                    <div className={`${classPrefix}-close`} onClick={props.cancelProps?.loading ? noop : props.onCancel}>
                        <CloseSvg />
                    </div>
                )}
                <div
                    style={props.bodyStyle}
                    className={classNames(`${classPrefix}-body`, props.bodyClassName)}
                >
                    {Boolean(props.title) && (
                        <div className={`${classPrefix}-body-title`}>{props.title}</div>
                    )}
                    {Boolean(props.content) && (
                        <div className={`${classPrefix}-body-message-wrapper`}>
                            <div
                                className={classNames(`${classPrefix}-body-message`, {
                                    [`${classPrefix}-body-message-with-title`]: !!props.title,
                                })}
                            >
                                {props.content}
                            </div>
                        </div>
                    )}
                </div>
                <div className={`${classPrefix}-footer`}>
                    {Boolean(props.cancelText) && (
                        <Button
                            onClick={props.cancelProps?.loading ? noop : props.onCancel}
                            className={`${classPrefix}-btn-cancel`}
                            fill='none'
                            block
                            loading={props.cancelProps?.loading}
                            disabled={props.cancelProps?.disabled}
                        >
                            {props.cancelText || (props.okText ? '取消' : '我知道了')}
                        </Button>
                    )}
                    {Boolean(props.okText) && (
                        <Button
                            onClick={props.okProps?.loading ? noop : props.onOk}
                            loading={props.okProps?.loading}
                            fill='none'
                            block
                            disabled={props.okProps?.disabled}
                            className={`${classPrefix}-btn-ok`}
                        >
                            {props.okText || '确认'}
                        </Button>
                    )}
                </div>
            </div>
        </Mask>
    )


};

const Dialog = {}; // 可返回用于销毁此弹窗的方法

Dialog.show = (props) => {
    const { afterClose, onCancel = noop, onOk = noop, cancelProps, okProps, ...restProps } = props

    const userContainer = resolveContainer(props.getContainer);
    const container = document.createElement('div');
    userContainer.appendChild(container);
    let destroy = noop;

    const TempDialog = () => {
        const [cancelLoading, setCancelLoading] = useState(false)
        const [okLoading, setOkLoading] = useState(false)
        const [visible, setVisible] = useState(true)

        destroy = () => {
            setVisible(false)
            if (afterClose) {
                afterClose()
            }
        }

        const _afterClose = () => {
            const unmountResult = ReactDOM.unmountComponentAtNode(container);

            if (unmountResult && container.parentNode) {
                container.parentNode.removeChild(container);
            }
        };

        const _onOk = async (e) => {
            var i = setTimeout(() => setOkLoading(true))

            if ((await onOk(e)) !== false) {
                clearTimeout(i)
                destroy()
            } else {
                clearTimeout(i)
                setOkLoading(false)
            }
        };

        const _onCancel = async (e) => {
            const i = setTimeout(() => setCancelLoading(true))
            if ((await onCancel(e)) !== false) {
                clearTimeout(i)
                destroy()
            } else {
                clearTimeout(i)
                setCancelLoading(false)
            }
        };

        return (
            <InternalDialog
                {...restProps}
                visible={visible}
                getContainer={() => container}
                cancelProps={{ loading: cancelLoading, ...cancelProps }}
                okProps={{ loading: okLoading, ...okProps }}
                onCancel={_onCancel}
                onOk={_onOk}
                afterClose={_afterClose}
            />
        )
    };

    if (props.headerImage && props.waitImageLoad !== false) {
        const preloadImage = new Image()
        preloadImage.src = props.headerImage

        preloadImage.onload = () => {
            ReactDOM.render(<TempDialog />, container)
        }
    } else {
        ReactDOM.render(<TempDialog />, container)
    }

    return destroy;
};

// 可使用 async/await 的方式
Dialog.alert = (props) => {
    const { onCancel = noop } = props

    return new Promise(function (resolve) {
        Dialog.show({
            ...props,
            // 强制不现实 OK Btn
            okText: undefined,
            onOk: noop,
            onCancel: e => {
                onCancel(e)
                resolve(e)
            },
        })
    });
};

Dialog.confirm = (props) => {
    const { onCancel = noop, onOk = noop } = props
    return new Promise(resolve => {
        Dialog.show({
            // 强制显示 OK Btn
            okText: '确认',
            ...props,
            onCancel: e => {
                onCancel(e)
                resolve(false)
            },
            onOk: e => {
                onOk(e)
                resolve(true)
            },
        })
    })
};

export default Dialog;