export function getSession(key) {
    return window.sessionStorage.getItem(key)
}

export function setSession(key, value) {
    return window.sessionStorage.setItem(key, value)
}

export function getLocal(key) {
    return window.localStorage.getItem(key)
}

export function setLocal(key, value) {
    return window.localStorage.setItem(key, value)
}