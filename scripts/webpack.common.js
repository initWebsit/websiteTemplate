/*
 + ------------------------------------------------------------------
 |  通用的webpack配置文件
 + ------------------------------------------------------------------
 */
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const chalk = require("chalk");

console.log('[Product ENV]', process.env.NODE_ENV);


module.exports = {
    module: {
        rules: [
            {
                test: /.(woff|woff2|eot|ttf|otf)$/i,
                include: path.resolve(__dirname, "../src"),
                type: 'asset/resource',
                generator: {
                    filename: 'css/[name][ext]?v=[hash:8]'
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/i,
                include: path.resolve(__dirname, "../src"),
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]?v=[hash:8]'
                }
            },
            {
                test: /\.(css|less)$/i,
                include: [
                    path.resolve(__dirname, "../node_modules")
                ],
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                ]
            },
            {
                test: /\.less$/i,
                include: path.resolve(__dirname, "../src"),
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    {
                        loader: "thread-loader",
                        options: {
                            workerParallelJobs: 2,
                        },
                    },
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                paths: [path.resolve(__dirname, "node_modules")],
                                javascriptEnabled: true
                            },
                        },
                    },
                    {
                        loader: 'style-resources-loader',
                        options: {
                            patterns: [path.resolve(__dirname, "../src/styles/variables/*.less")],
                            injector: 'append',
                        }
                    }
                ],
            },
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "../src"),
                use: [
                    {
                        loader: "thread-loader",
                        options: {
                            workers: 2,
                        },
                    },
                    'babel-loader'
                ]
            },
        ]
    },
    plugins: [
        // new webpack.DllReferencePlugin({
        //     context: __dirname,
        //     manifest: require('./dll/react-manifest.json')
        // }),
        // new AddAssetHtmlPlugin({
        //     filepath: path.resolve(__dirname, './dll/*.dll.js'),
        //     publicPath: '/js',
        //     outputPath: '/js'
        // }),
        new webpack.ProvidePlugin({
            // $_: 'lodash',
            $_: 'lodashLocal',
            $q: ['Platform', 'default'],
            $I18N: ['I18N', 'I18N'],
        }),
        // 拷贝public中的文件到最终打包文件夹里
        new CopyPlugin({
            patterns: [{
                from: "./public",
                to: "./",
                globOptions: {
                    ignore: ["**/index.html"]
                },
                noErrorOnMissing: true
            }]
        }),
        // 自动生成HTML，并注入各参数
        new HtmlWebpackPlugin({
            filename: "index.html",
            title: 'Ola Chat',
            meta: {
                keywords: '',
                description: '',
            },
            template: path.resolve(__dirname, "../public/index.html"),
            hash: false,
            inject: 'body',
            templateParameters: {
                'Env': process.env.NODE_ENV
            }
        }),
        // 进度条
        new ProgressBarPlugin({
            format: `:msg [:bar] ${chalk.green.bold(":percent")} (:elapsed s)`,
        }),
        // 提取CSS等样式生成单独的CSS文件,不然最终文件只有js； css全部包含在js中
        new MiniCssExtractPlugin({
            filename: "css/[name].css?v=[chunkhash:8]"
        }),
    ],
    resolve: {
        // 后缀名自动补全
        extensions: [".js", ".jsx", ".less", ".css", ".ts", ".tsx"],
        alias: {
            Platform: path.resolve(__dirname, '../src/commons/platform.js'),
            I18N: path.resolve(__dirname, '../src/commons/I18N.js'),
            lodashLocal: path.resolve(__dirname, '../src/library/lodash/lodash.js'),
            "~": path.resolve(__dirname, "../"),
            "@": path.resolve(__dirname, "../src"),
            "@browser": path.resolve(__dirname, "../src/projects/browser"),
            "@client": path.resolve(__dirname, "../src/projects/client"),
            "@react-spring": path.resolve(__dirname, "../node_modules/@react-spring"),
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
    // cache: {
    //     type: "filesystem",
    // },
};
