/*
 + ------------------------------------------------------------------
 | 用于开发环境的服务启动 
 + ------------------------------------------------------------------ 
 */
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.dev.js')
const app = express()
const setupProxy = require('../setupProxy')
const PORT = 6120 // 服务启动端口号

// 实例化webpack
const compiler = webpack(webpackConfig)
app.use(
	webpackDevMiddleware(compiler, {
		publicPath: '/',
	})
)
// 挂载HMR热更新中间件
app.use(
	webpackHotMiddleware(compiler, {
		path: '/__webpack_hmr_official',
	})
)

// 注册代理
setupProxy(app)

// 所有请求都返回对应项目的index.html
app.get('*', (req, res, next) => {
	let filename = path.join(
		path.resolve(__dirname, '../dist'),
		'/official',
		'index.html'
	)

	compiler.outputFileSystem.readFile(filename, (err, result) => {
		if (err) return next(err)
		res.set('content-type', 'text/html')
		res.send(result)
		res.end()
	})
})

/** 启动服务 **/
app.listen(PORT, () => {
	console.log('本地服务启动地址: http://localhost:%s', PORT)
})
