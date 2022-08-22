import classNames from 'classnames';
import React, { useEffect, useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useInitialized } from '../../utils/use-initialized';
import { mergeProps } from '../../utils/with-default-props';
import Mask from '../mask';
import { useLockScroll } from '../../utils/use-lock-scroll';
import { renderToContainer } from '../../utils/render-to-container';


const classPrefix = `b-popup`
const defaultProps = {
    position: 'bottom',
    visible: false,
    getContainer: () => document.body,
    mask: true,
}

const Popup = (p) => {
    const props = mergeProps(defaultProps, p)

    // 动画执行完，才隐藏最外层
    const [hidden, setHidden] = useState(!props.visible)

    useEffect(function () {
        if (props.visible) {
            setHidden(false);
        }
    }, [props.visible]);

    const afterClose = () => {
        setHidden(true)
        props.afterClose?.()
    }

    const cls = classNames(classPrefix, props.className, { [`${classPrefix}-hidden`]: hidden })

    const bodyCls = classNames(
        `${classPrefix}-body`,
        props.bodyClassName,
        {
            [`${classPrefix}-body-hidden`]: !props.visible,
        },
        `${classPrefix}-body-position-${props.position}`
    )

    const initialized = useInitialized(props.visible || props.forceRender)

    const ref = useRef(null)

    useLockScroll(ref, props.visible);

    const node = (
        <div className={cls} style={props.style}>
            {props.mask && (
                <Mask
                    visible={props.visible}
                    onMaskClick={props.onMaskClick}
                    className={props.maskClassName}
                    style={props.maskStyle}
                    disableBodyScroll={false}
                />
            )}
            <CSSTransition
                classNames={`${classPrefix}-body`}
                in={props.visible}
                timeout={200}
                onEntered={props.afterShow}
                onExited={afterClose}
                unmountOnExit={props.destroyOnClose}
            >
                <div className={bodyCls} style={props.bodyStyle} ref={ref}>
                    {initialized && props.children}
                </div>
            </CSSTransition>
        </div>
    )
    return renderToContainer(props.getContainer, node);
};

export default Popup;