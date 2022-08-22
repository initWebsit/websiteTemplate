/*
 + ------------------------------------------------------------------
 | 这是用于开发环境的webpack配置文件
 + ------------------------------------------------------------------ 
 */
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const path = require('path')
const commonCfg = require('./webpack.common.js')

const genProjectConfig = (project) => ({
	name: project,
	mode: 'development',
	entry: [
		'webpack-hot-middleware/client?reload=true&path=/__webpack_hmr_' +
			project,
		path.resolve(__dirname, '../src/main.js'),
	],
	output: {
		publicPath: '/',
		filename: 'bundle-[contenthash].js',
		path: path.resolve(__dirname, `../dist/${project}`),
		pathinfo: false,
	},
	devtool: 'eval-cheap-module-source-map',
	plugins: [
		// 热更新插件
		new webpack.HotModuleReplacementPlugin(),
		// 在window环境中注入全局变量
		new webpack.DefinePlugin({
			'process.env.RUN_ENV': JSON.stringify('development'),
		}),
	],
})

module.exports = merge(commonCfg, genProjectConfig('official'))
