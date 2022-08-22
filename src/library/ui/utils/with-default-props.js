export function withDefaultProps(defaultProps) {
    return function (C) {
        C.defaultProps = defaultProps;
        return C;
    };
}
export function mergeProps(defaultProps, props) {
    function customizer(objValue, srcValue) {
        return $_.isUndefined(srcValue) ? objValue : srcValue;
    }

    return $_.assignWith($_.assign({}, defaultProps), props, customizer);
}