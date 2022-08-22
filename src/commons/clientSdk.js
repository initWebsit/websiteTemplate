import * as QueryString from "qs";


const randomString = (length = 32, chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ") => {
    var result = "";
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}


export const isInApp = Boolean(window.NativeProxy);

export function callAppFunc(appFunc, param) {
    console.log(`native方法${appFunc}开始调用; params:`, param);
    if (!isInApp) throw new Error(`当前环境不支持Native方法${appFunc}`);

    let cb = `nativeCB${randomString()}`;
    let data = { cb, param: JSON.stringify(param) };
    const message = `partystar://${appFunc}?${QueryString.stringify(data)}`;

    return new Promise((resolve) => {
        window[cb] = function (result) {
            console.log(`Native方法${appFunc}调用成功; result:`, result);
            delete window[cb];
            resolve(result);
        };
        window.NativeProxy.postMessage(message);
    });
}

export function listenAppMethod(appFunc, callback) {
    window[appFunc] = function (result) {
        callback && callback(result);
    };
}
