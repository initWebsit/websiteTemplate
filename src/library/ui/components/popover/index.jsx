import React, { useMemo, useCallback, useRef, forwardRef, useImperativeHandle } from 'react';
import Tooltip from 'rc-tooltip';
import { useControllableValue } from 'ahooks';
import Button from '../button';
import classNames from 'classnames';
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component';


const classPrefix = "b-popover";
const enterClassName = 'entering';
const leaveClassName = 'leaving';

const Popover = forwardRef((props, ref) => {
    const { mode = 'light' } = props

    const [visible, onVisibleChange] = useControllableValue(props, {
        valuePropName: 'visible',
        trigger: 'onVisibleChange',
        defaultValuePropName: 'defaultVisible',
        defaultValue: false,
    })

    useImperativeHandle(ref, () => {
        return {
            show: () => onVisibleChange(true),
            hide: () => onVisibleChange(false),
            visible,
        }
    }, [visible])

    return (
        <Tooltip {...props}
            overlayClassName={classNames(`${classPrefix}-${mode}`, props.overlayClassName)}
            destroyTooltipOnHide={props.destroyOnHide}
            prefixCls={classPrefix}
            getTooltipContainer={props.getContainer || (() => document.body)}
            visible={visible}
            onVisibleChange={onVisibleChange}
            trigger='click'
            motion={{
                motionName: {
                    appear: enterClassName,
                    appearActive: enterClassName,
                    enter: enterClassName,
                    enterActive: enterClassName,
                    leaveActive: leaveClassName,
                    leave: leaveClassName,
                },
                motionDeadline: 200,
            }}
            overlay={
                <div className={`${classPrefix}-inner-content`}>{props.content}</div>
            }
        >
            {props.children}
        </Tooltip>
    )
});

const PopMenu = forwardRef((props, ref) => {
    const innerRef = useRef(null);
    useImperativeHandle(ref, () => innerRef.current, []);

    const onClick = useCallback((e) => {
        const { onSelect } = props
        if (onSelect) {
            onSelect(e)
        }
        innerRef.current?.hide()
    }, [props.onSelect]);

    const overlay = useMemo(() => (<>
        {(props.actions || []).map(
            (ele, index) => (
                <div
                    className={classNames(`${classPrefix}-inner-menu`, {
                        [`${classPrefix}-inner-menu-with-icon`]: !!ele.icon,
                    })}
                    key={ele.key != null ? ele.key : index}
                >
                    <Button
                        disabled={ele.disabled}
                        onClick={() => {
                            if (!ele.disabled) {
                                onClick(ele)
                            }
                        }}
                        fill='none'
                        block
                    >
                        {ele.icon && (
                            <span className={`${classPrefix}-inner-menu-icon`}>
                                {ele.icon}
                            </span>
                        )}
                        {ele.text}
                    </Button>
                </div>
            )
        )}
    </>), [props.actions, onClick]);

    return (
        <Popover ref={innerRef} {...props}
            overlayClassName={classNames(`${classPrefix}-menu`, props.overlayClassName)}
            content={overlay}
        >
            {props.children}
        </Popover>
    )
});


export default attachPropertiesToComponent(Popover, {
    Menu: PopMenu
});