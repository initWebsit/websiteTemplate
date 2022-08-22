/*
 + ------------------------------------------------------------------
 | 项目配置参数
 |
 | @returns {String}    ajaxPrefix     默认ajax url前缀
 | @returns {String}    ajaxTimeout    默认ajax超时时间
 | @returns {Object}    baseName       页面路由前缀
 | @returns {String}    publicUrl      静态文件前缀
 | @returns {Boolean}   mock           是否启用mock
 | @returns {String}    nodeEnv        运行环境
 + ------------------------------------------------------------------ 
 */

import baseConfig from './config.base';
import devConfig from './config.dev';
import prodConfig from './config.prod';
import testConfig from './config.test';

let config = {
    development: devConfig,
    test: testConfig,
    production: prodConfig,
};

const envConfig = config[process.env.RUN_ENV] || {};


export default {
    ...baseConfig,
    ...envConfig,
};
