const loaderUtils = require('loader-utils');
const REG = /\/\*\s*IF(DEBUG|TRUE_\w+)(?:\s*\*\/)?([\s\S]+?)(?:\/\*\s*)?FI\1\s*\*\//g;

const replaceMatched = function (js, options) {
    return js.replace(REG, (match, $1, $2) => {
        var isKeep;
        if ($1 === 'DEBUG') {
            isKeep = options.isDebug
        } else {
            var varName = $1.slice(5)
            isKeep = options[varName]
        }
        return isKeep ? $2 : ''
    });
}


module.exports = function (source) {
    var options = loaderUtils.getOptions(this)
    if (!('isDebug' in options)) {
        options.isDebug = process.env.NODE_ENV === 'development'; //默认的isDebug
    }
    return replaceMatched(source, options)
};