const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: {
        // common: [
        //     'axios',
        //     'classnames',
        //     'lodash',
        // ],
        // react: [
        //     'react',
        //     'react-dom',
        //     'react-router-dom',
        //     'redux',
        //     'react-redux',
        // ],
        react: [
            'preact',
            // 'preact-router',
            'react-router-dom',
            'redux',
            'react-redux',
        ],
    },
    // devtool: '#source-map',
    output: {
        path: path.join(__dirname, 'dll'),
        filename: '[name]_[hash:8].dll.js',
        library: '[name]_[hash:8]',
    },
    performance: {
        hints: false,
        maxAssetSize: 300000, //单文件超过300k，命令行告警
        maxEntrypointSize: 300000, //首次加载文件总和超过300k，命令行告警
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true  // 开启多线程并行
            })
        ]
    },
    plugins: [
        new webpack.DllPlugin({
            context: __dirname,
            path: path.join(__dirname, 'dll', '[name]-manifest.json'),
            name: '[name]_[hash:8]',
        }),
    ],
    resolve: {
        // 后缀名自动补全
        extensions: [".js", ".jsx", ".less", ".css", ".ts", ".tsx"],
        alias: {
            "react": "preact/compat",
            "react-dom/test-utils": "preact/test-utils",
            "react-dom": "preact/compat", 
            "react/jsx-runtime": "preact/jsx-runtime"
        },
        symlinks: false,
        modules: [
            'node_modules',
        ],
    },
};
