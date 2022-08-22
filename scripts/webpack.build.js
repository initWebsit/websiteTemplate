/*
 + ------------------------------------------------------------------
 | 这是用于生产环境的webpack配置文件 
 + ------------------------------------------------------------------ 
 */
const webpack = require("webpack");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { merge } = require("webpack-merge");
const path = require("path");
// const glob = require('glob')
// const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const commonCfg = require("./webpack.common.js");

console.log('[Build Environment]', process.env.NODE_ENV, process.env.BUILD_DIR);

const genProjectConfig = (project, environment, buildDir) => ({
    name: project,
    mode: "production",
    entry: path.resolve(__dirname, `../src/main.js`),
    output: {
        path: path.resolve(__dirname, `../${buildDir}/${project}-${environment}`),
        publicPath: '/',
        clean: true,
        filename: "js/[name].js?v=[chunkhash:8]",
        chunkFilename: "js/[name].js?v=[chunkhash:8]"
    },
    stats: {
        children: false
    },
    optimization: {
        minimize: true,
        runtimeChunk: {
            name: 'runtime',
        },
        moduleIds: 'deterministic',
        minimizer: [
            new TerserPlugin({
                parallel: 4,
                terserOptions: {
                    parse: {
                        ecma: 8,
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        comparisons: false,
                        inline: 2,
                    },
                    mangle: {
                        safari10: true,
                    },
                    output: {
                        ecma: 5,
                        comments: false,
                        ascii_only: true,
                    },
                },
            }),
            new CssMinimizerPlugin({
                parallel: 4
            })
        ],
        splitChunks: {
            cacheGroups: {
                common: { // 自定义命名
                    test: /[\\/]src[\\/]library[\\/]/,
                    name: 'common',
                    chunks: 'initial',
                    // minChunks: 2, // 最少使用多少次及以上才抽离
                },
                vendors: {
                    // node_modules里的代码
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "initial",
                    name: 'vendors', //一定不要定义固定的name
                    priority: 10, // 优先级
                    enforce: true,
                    maxSize: 1000000,
                    // minSize: 102400
                    // minChunks: 1,
                },
            },
        },
    },
    plugins: [
        //  打包前删除上一次打包留下的旧代码（根据output.path）
        new CleanWebpackPlugin(),
        // 在window环境中注入全局变量
        new webpack.DefinePlugin({
            'process.env.RUN_ENV': JSON.stringify(environment === 'test' ? 'test' : 'production'),
        }),
        // CSS Tree Shaking
        // new PurgeCSSPlugin({
        //     paths: glob.sync(`${path.resolve(__dirname, "../src")}/**/*`, { nodir: true }),
        // }),
    ],
})


module.exports = merge(commonCfg, genProjectConfig('official', process.env.NODE_ENV, process.env.BUILD_DIR || 'dist'));
