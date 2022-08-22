export function nearest(arr, target) {
    return arr.reduce(function (pre, cur) {
        return Math.abs(pre - target) < Math.abs(cur - target) ? pre : cur;
    });
}