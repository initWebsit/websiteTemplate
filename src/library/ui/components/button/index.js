import React from 'react';
import classNames from 'classnames';
import Loading from '../loading';
import { getNativeAttributes } from '../../utils/get-native-attributes';


var classPrefix = "b-button";

var Button = function Button(props) {
    var _classNames;

    var disabled = props.disabled || props.loading;
    return /*#__PURE__*/React.createElement("button", Object.assign({}, getNativeAttributes(props), {
        type: props.type,
        onClick: props.onClick,
        className: classNames(classPrefix, props.color ? classPrefix + "-" + props.color : null, (_classNames = {}, _classNames[classPrefix + "-block"] = props.block, _classNames[classPrefix + "-disabled"] = disabled, _classNames[classPrefix + "-fill-outline"] = props.fill === 'outline', _classNames[classPrefix + "-fill-none"] = props.fill === 'none', _classNames[classPrefix + "-mini"] = props.size === 'mini', _classNames[classPrefix + "-small"] = props.size === 'small', _classNames[classPrefix + "-large"] = props.size === 'large', _classNames[classPrefix + "-loading"] = props.loading, _classNames), props.className),
        style: props.style,
        disabled: disabled
    }), props.loading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: classPrefix + "-loading-wrapper"
    }, /*#__PURE__*/React.createElement(Loading, {
        color: 'currentColor',
        size: props.size
    }), props.loadingText)) : props.children);
};

Button.defaultProps = {
    color: 'default',
    fill: 'solid',
    block: false,
    loading: false,
    type: 'button'
};
export default Button;