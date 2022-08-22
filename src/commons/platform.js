/*
 + ------------------------------------------------------------------
 | 平台判断方法
 | @example
 | Platform.is			// returns {Object} 返回一个包含当前平台详细信息的对象
 | Platform.is.mobile	// returns {Boolean} 代码是否在移动设备上运行
 | Platform.is.desktop  // returns {Boolean} 代码是否在桌面浏览器上运行
 | Platform.is.android  // returns {Boolean} 应用是否在Android设备上运行
 | Platform.is.ios		// returns {Boolean} 应用是否在iOS设备上运行
 | Platform.is.ipad		// returns {Boolean} 应用是否在iPad上运行
 | Platform.is.iphone	// returns {Boolean} 应用是否在iPhone上运行
 | Platform.is.mac		// returns {Boolean} 代码是否在具有MacOS操作系统的设备上运行
 | Platform.is.chrome	// returns {Boolean} 代码是否在Google Chrome浏览器中运行
 | Platform.is.edge		// returns {Boolean} 代码是否在Microsoft Edge浏览器中运行
 | Platform.is.safari	// returns {Boolean} 代码是否在Apple Safari浏览器中运行
 | Platform.is.ie		// returns {Boolean} 代码是否在Microsoft Internet Explorer浏览器中运行
 | Platform.is.client	// returns {Boolean} 代码是否在Alloo客户端中运行
 | Platform.has.touch	// returns {Boolean} 代码是否在支持触摸的屏幕上运行
 + ------------------------------------------------------------------ 
 */

/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-mixed-operators */

const hasTouch = 'ontouchstart' in window || window.navigator.maxTouchPoints > 0
const userAgent = navigator.userAgent || navigator.vendor || window.opera


function getMatch(userAgent, platformMatch) {
	const match = /(edge|edga|edgios)\/([\w.]+)/.exec(userAgent) ||
		/(opr)[\/]([\w.]+)/.exec(userAgent) ||
		/(vivaldi)[\/]([\w.]+)/.exec(userAgent) ||
		/(chrome|crios)[\/]([\w.]+)/.exec(userAgent) ||
		/(iemobile)[\/]([\w.]+)/.exec(userAgent) ||
		/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(userAgent) ||
		/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(userAgent) ||
		/(firefox|fxios)[\/]([\w.]+)/.exec(userAgent) ||
		/(webkit)[\/]([\w.]+)/.exec(userAgent) ||
		/(opera)(?:.*version|)[\/]([\w.]+)/.exec(userAgent) ||
		/(msie) ([\w.]+)/.exec(userAgent) ||
		(userAgent.indexOf('trident') >= 0 && /(rv)(?::| )([\w.]+)/.exec(userAgent)) ||
		(userAgent.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(userAgent)) ||
		[]

	return {
		browser: match[5] || match[3] || match[1] || '',
		version: match[2] || match[4] || '0',
		versionNumber: match[4] || match[2] || '0',
		platform: platformMatch[0] || ''
	}
}

function getPlatformMatch(userAgent) {
	return /(ipad)/.exec(userAgent) ||
		/(ipod)/.exec(userAgent) ||
		/(windows phone)/.exec(userAgent) ||
		/(iphone)/.exec(userAgent) ||
		/(kindle)/.exec(userAgent) ||
		/(silk)/.exec(userAgent) ||
		/(android)/.exec(userAgent) ||
		/(win)/.exec(userAgent) ||
		/(mac)/.exec(userAgent) ||
		/(linux)/.exec(userAgent) ||
		/(cros)/.exec(userAgent) ||
		/(playbook)/.exec(userAgent) ||
		/(bb)/.exec(userAgent) ||
		/(blackberry)/.exec(userAgent) ||
		[]
}

function applyIosCorrection(is) {
	delete is.mac
	delete is.desktop

	const platform = Math.min(window.innerHeight, window.innerWidth) > 414
		? 'ipad'
		: 'iphone'

	Object.assign(is, {
		mobile: true,
		ios: true,
		platform,
		[platform]: true
	})
}

function getPlatform(UA) {
	const
		userAgent = UA.toLowerCase(),
		platformMatch = getPlatformMatch(userAgent),
		matched = getMatch(userAgent, platformMatch),
		browser = {}

	if (matched.browser) {
		browser[matched.browser] = true
		browser.version = matched.version
		browser.versionNumber = parseInt(matched.versionNumber, 10)
	}

	if (matched.platform) {
		browser[matched.platform] = true
	}

	const knownMobiles = browser.android ||
		browser.ios ||
		browser.bb ||
		browser.blackberry ||
		browser.ipad ||
		browser.iphone ||
		browser.ipod ||
		browser.kindle ||
		browser.playbook ||
		browser.silk ||
		browser['windows phone']

	// These are all considered mobile platforms, meaning they run a mobile browser
	if (knownMobiles === true || userAgent.indexOf('mobile') > -1) {
		browser.mobile = true

		if (browser.edga || browser.edgios) {
			browser.edge = true
			matched.browser = 'edge'
		}
		else if (browser.crios) {
			browser.chrome = true
			matched.browser = 'chrome'
		}
		else if (browser.fxios) {
			browser.firefox = true
			matched.browser = 'firefox'
		}
	}
	// If it's not mobile we should consider it's desktop platform, meaning it runs a desktop browser
	// It's a workaround for anonymized user agents
	// (browser.cros || browser.mac || browser.linux || browser.win)
	else {
		browser.desktop = true
	}

	// Set iOS if on iPod, iPad or iPhone
	if (browser.ipod || browser.ipad || browser.iphone) {
		browser.ios = true
	}

	if (browser['windows phone']) {
		browser.winphone = true
		delete browser['windows phone']
	}

	// Chrome, Opera 15+, Vivaldi and Safari are webkit based browsers
	if (
		browser.chrome ||
		browser.opr ||
		browser.safari ||
		browser.vivaldi ||
		// we expect unknown, non iOS mobile browsers to be webkit based
		(
			browser.mobile === true &&
			browser.ios !== true &&
			knownMobiles !== true
		)
	) {
		browser.webkit = true
	}

	// IE11 has a new token so we will assign it msie to avoid breaking changes
	if (browser.rv || browser.iemobile) {
		matched.browser = 'ie'
		browser.ie = true
	}

	// Blackberry browsers are marked as Safari on BlackBerry
	if (browser.safari && browser.blackberry || browser.bb) {
		matched.browser = 'blackberry'
		browser.blackberry = true
	}

	// Playbook browsers are marked as Safari on Playbook
	if (browser.safari && browser.playbook) {
		matched.browser = 'playbook'
		browser.playbook = true
	}

	// Opera 15+ are identified as opr
	if (browser.opr) {
		matched.browser = 'opera'
		browser.opera = true
	}

	// Stock Android browsers are marked as Safari on Android.
	if (browser.safari && browser.android) {
		matched.browser = 'android'
		browser.android = true
	}

	// Kindle browsers are marked as Safari on Kindle
	if (browser.safari && browser.kindle) {
		matched.browser = 'kindle'
		browser.kindle = true
	}

	// Kindle Silk browsers are marked as Safari on Kindle
	if (browser.safari && browser.silk) {
		matched.browser = 'silk'
		browser.silk = true
	}

	if (browser.vivaldi) {
		matched.browser = 'vivaldi'
		browser.vivaldi = true
	}

	// 客户端环境判断
	if (Boolean(window.NativeProxy)) {
		browser.client = true
	}

	// Assign the name and platform variable
	browser.name = matched.browser
	browser.platform = matched.platform


	if (userAgent.indexOf('electron') > -1) {
		browser.electron = true
	}
	else if (document.location.href.indexOf('-extension://') > -1) {
		browser.bex = true
	}
	else {
		if (window.Capacitor !== void 0) {
			browser.capacitor = true
			browser.nativeMobile = true
			browser.nativeMobileWrapper = 'capacitor'
		}
		else if (window._cordovaNative !== void 0 || window.cordova !== void 0) {
			browser.cordova = true
			browser.nativeMobile = true
			browser.nativeMobileWrapper = 'cordova'
		}

		if (
			hasTouch === true &&
			browser.mac === true &&
			(
				(browser.desktop === true && browser.safari === true) ||
				(
					browser.nativeMobile === true &&
					browser.android !== true &&
					browser.ios !== true &&
					browser.ipad !== true
				)
			)
		) {
			/*
			* Correction needed for iOS since the default
			* setting on iPad is to request desktop view; if we have
			* touch support and the user agent says it's a
			* desktop, we infer that it's an iPhone/iPad with desktop view
			* so we must fix the false positives
			*/
			applyIosCorrection(browser)
		}
	}

	return browser
}

export const Platform = {
	userAgent,
	is: getPlatform(userAgent),
	has: {
		touch: hasTouch,
		webStorage: (window && window.localStorage) ? true : false
	},
	within: {
		iframe: window.self !== window.top
	}
}

export default Platform
