import { inBrowser } from './in-browser';
export var supportsPassive = false;

if (inBrowser) {
    try {
        var opts = {};
        Object.defineProperty(opts, 'passive', {
            get: function get() {
                supportsPassive = true;
            }
        });
        window.addEventListener('test-passive', null, opts);
    } catch (e) { }
}