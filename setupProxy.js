/**
 * 前端web服务代理配置
 */
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
	app.use(
		createProxyMiddleware(['/proxyApi'], {
			// target: 'https://api.partystar.live',
			target: 'http://47.96.23.201',
			pathRewrite: {
				'^/proxyApi': '', // 如果后端接口无前缀，可以通过这种方式去掉
			},
			changeOrigin: true,
			secure: false, // 是否验证证书
			ws: true, // 启用websocket
			logLevel: 'debug',
		})
	)

	app.use(
		createProxyMiddleware(['/proxyClient'], {
			// target: 'https://api.partystar.live',
			target: 'http://47.96.23.201',
			pathRewrite: {
				'^/proxyClient': '',
			},
			changeOrigin: true,
			secure: false,
			ws: true,
			logLevel: 'debug',
		})
	)

	app.use(
		createProxyMiddleware(['/proxyHelp'], {
			// target: 'https://help.partystar.live',
			// target: 'http://ps-help.imee.com',
			target: 'http://120.26.70.43/ps',
			pathRewrite: {
				'^/proxyHelp': '',
			},
			changeOrigin: true,
			secure: false,
			ws: true,
			logLevel: 'debug',
		})
	)
}
