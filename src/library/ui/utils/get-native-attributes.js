export function getNativeAttributes(props) {
    var ret = {};

    for (var key in props) {
        if (!props.hasOwnProperty(key)) continue;

        if (key.startsWith('data-') || key.startsWith('aria-')) {
            ret[key] = props[key];
        }
    }

    return ret;
}