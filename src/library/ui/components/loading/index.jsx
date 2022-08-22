import React, { memo } from 'react';
import classNames from 'classnames';
import { withDefaultProps } from '../../utils/with-default-props';


const classPrefix = "b-loading";
const colorRecord = {
    default: 'var(--color-weak)',
    primary: 'var(--color-primary)',
    white: 'var(--color-white)'
};
const defaultProps = {
    size: 'middle',
    color: 'default'
};

const Loading = withDefaultProps(defaultProps)((props) => {
    const style = {
        '--color': colorRecord[props.color] != null ? colorRecord[props.color] : props.color
    };

    return (
        <div style={style} className={classNames(classPrefix, `${classPrefix}-${props.size}`)}>
            <div className={`${classPrefix}-dot`} />
            <div className={`${classPrefix}-dot`} />
            <div className={`${classPrefix}-dot`} />
            <div className={`${classPrefix}-dot`} />
            <div className={`${classPrefix}-dot`} />
            <div className={`${classPrefix}-dot`} />
            <div className={`${classPrefix}-dot`} />
            <div className={`${classPrefix}-dot`} />
        </div>
    )
});

export default memo(Loading)