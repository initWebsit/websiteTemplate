let setConsole = async function () {}

if (process.env.NODE_ENV === 'development') {
	setConsole = async function setConsole() {
		// 在本地开发环境时不需要vconsole
		if (window.location.hostname === 'localhost') return

		// 在生产环境且无需vconsole时,覆盖console.log方法
		if (!window.location.search.includes('console')) {
			window.console.log = function () {}
		}
		// 非生产环境,或需要console时,加载vconsole
		else {
			let VConsole = await import('vconsole')
			return new VConsole.default()
		}
	}
}

export default setConsole
