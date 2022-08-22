export function convertPx(px) {
    var ratio = 1;
    var rootStyle = window.getComputedStyle(document.documentElement);
    var onePx = rootStyle.getPropertyValue('--one-px').trim();

    if (onePx.endsWith('rem')) {
        var fontSize = rootStyle.fontSize;
        ratio = parseFloat(onePx) * parseFloat(fontSize);
    } else if (onePx.endsWith('vw')) {
        ratio = parseFloat(onePx) * window.innerWidth / 100;
    }

    return px * ratio;
}