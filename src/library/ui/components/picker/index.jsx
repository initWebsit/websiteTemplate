import React, { useState, useEffect, useMemo } from 'react';
import Popup from '../popup';
import { useControllableValue } from 'ahooks';
import { Column } from './column';
import { withDefaultProps } from '../../utils/with-default-props';
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component';
import classNames from 'classnames';
import { renderToBody } from '../../utils/render-to-body';


const classPrefix = `b-picker`

const Picker = withDefaultProps({
    confirmText: $I18N.md5key.md5_04ffab8a6e01870,
    cancelText: $I18N.md5key.md5_b3340f7872b411f
})((props) => {
    const controllable = useControllableValue(props, {
        trigger: 'onConfirm',
        defaultValue: []
    });
    const value = controllable[0];
    const setValue = controllable[1];

    const [innerValue, setInnerValue] = useState(value)

    useEffect(function () {
        setInnerValue(value);
    }, [props.visible]);

    const columns = useMemo(() => {
        const columns = typeof props.columns === 'function' ? props.columns(innerValue) : props.columns;
        return columns.map((column) => {
            return column.map((item) => {
                return typeof item === 'string' ? {
                    label: item,
                    value: item
                } : item;
            });
        });
    }, [props.columns, innerValue]);

    const widget = (
        <Popup
            visible={props.visible}
            position='bottom'
            onMaskClick={() => {
                props.onCancel == null ? void 0 : props.onCancel();
                props.onClose == null ? void 0 : props.onClose();
            }}
            getContainer={props.getContainer}
            destroyOnClose
            afterShow={props.afterShow}
            afterClose={props.afterClose}
        >
            <div className={classNames(classPrefix, props.className)} style={props.style}>
                <div className={`${classPrefix}-header`}>
                    <a
                        className={`${classPrefix}-header-button`}
                        onClick={() => {
                            props.onCancel == null ? void 0 : props.onCancel()
                            props.onClose == null ? void 0 : props.onClose()
                        }}
                    >
                        {props.cancelText}
                    </a>
                    <a
                        className={`${classPrefix}-header-button`}
                        onClick={() => {
                            setValue(innerValue)
                            props.onClose == null ? void 0 : props.onClose()
                        }}
                    >
                        {props.confirmText}
                    </a>
                </div>
                <div className={`${classPrefix}-columns`}>
                    {columns.map((column, index) => (
                        <Column
                            key={index}
                            column={column}
                            value={innerValue[index]}
                            onSelect={val => {
                                setInnerValue(prev => {
                                    const nextValue = [...prev]
                                    nextValue[index] = val
                                    props.onSelect?.(nextValue)
                                    return nextValue
                                })
                            }}
                        />
                    ))}
                    <div className={`${classPrefix}-mask ${classPrefix}-mask-top`} />
                    <div className={`${classPrefix}-mask ${classPrefix}-mask-bottom`} />
                </div>
            </div>
        </Popup>
    )
    

    const label = useMemo(function () {
        if (!props.children) return null;
        const items = columns.map(
            (column, index) => column.find(item => item.value === value[index]) ?? null
        )
        return props.children(items)
    }, [value]);

    return (
        <>
            {widget}
            {label}
        </>
    )
});

function prompt(props) {
    return new Promise((resolve) => {
        const Wrapper = () => {
            const [visible, setVisible] = useState(false)

            useEffect(function () {
                setVisible(true);
            }, []);

            return (
                <Picker
                    {...props}
                    visible={visible}
                    onConfirm={val => {
                        resolve(val)
                    }}
                    onClose={() => {
                        props.onClose == null ? void 0 : props.onClose()
                        setVisible(false)
                        resolve(null)
                    }}
                    afterClose={() => {
                        props.afterClose == null ? void 0 : props.afterClose()
                        unmount()
                    }}
                />
            )


        };

        const unmount = renderToBody(<Wrapper />)
    });
}


export default attachPropertiesToComponent(Picker,
    {
        prompt: prompt
    }
);