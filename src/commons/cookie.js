import cfg from '@/config';
// 获取cookie
// 使用方法：getCookie('user')
export function getCookie(name) {
    var arr = document.cookie.split('; ');
    for (var i = 0; i < arr.length; i++) {
        var ars = arr[i].split('=');
        if (ars[0] == name) {
            return ars[1];
        }
    }
    return '';
}


// 设置cookie
// 使用方法：setCookie('user', 'simon', 11)
export function setCookie(name, value, domain, expire) {
    let cookieVal = name + '=' + value;

    let oDate = new Date();
    oDate.setDate(oDate.getDate() + 1);
    cookieVal += ';expires=' + (expire ? new Date(expire) : oDate);

    if (domain) cookieVal += `;domain=${domain}`;
    cookieVal += ';path=/;'
    document.cookie = cookieVal;
}


// 删除cookie
// 使用方法：removeCookie('user')
export function removeCookie(name, domain) {
    let cookieVal = name + '=1';

    let oDate = new Date();
    oDate.setDate(oDate.getDate() - 1); //-1就是告诉系统已经过期，系统就会立刻去删除cookie
    cookieVal += ';expires=' + oDate;

    if (domain) cookieVal += `;domain=${domain}`;
    cookieVal += ';path=/'
    document.cookie = cookieVal;
};



//清除所有cookie函数
export function clearAllCookie() {
    let keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    let cookieVal = '=0;expires=' + new Date(0).toUTCString() + ';path=/';
    if (cfg.useDomain) cookieVal += ';domain=' + document.domain.split('.').slice(-2).join('.')

    if (keys) {
        for (var i = keys.length; i--;)
            document.cookie = keys[i] + cookieVal;
    }
}