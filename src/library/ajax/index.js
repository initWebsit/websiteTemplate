import './promise-extends'
import SxAjax from './sx-ajax'
import createHoc from './create-hoc'
import createHooks from './create-hooks'
import handleError from '@/commons/handleError'
import handleSuccess from '@/commons/handleSuccess'
import { getCookie } from '@/commons/cookie'
import { getSession } from '@/commons/storage'
import { getCurrentLangForRequest } from '@/commons/I18N'
import { callAppFunc } from '@/commons/clientSdk'
import cfg from '@/config'

const { api_help, api_client, ajaxTimeout, packageField } = cfg

// 默认配置在这里设置
export function withDefaultSettings(instance) {
	instance.defaults.baseURL = api_help
	instance.defaults.timeout = ajaxTimeout
	instance.mockDefaults.baseURL = '/'
	// instance.defaults.headers['user-token'] = 'token-value';
	instance.defaults.headers['User-Language'] = getCurrentLangForRequest()
	// instance.defaults.headers.get['token'] = 'token-value';
	return instance
}

// ajax工具，含有errorTip 和 successTip
const _ajax = withDefaultSettings(
	new SxAjax({
		onShowErrorTip: (error, errorTip) => handleError({ error, errorTip }),
		onShowSuccessTip: (response, successTip) =>
			handleSuccess({ successTip }),
		isMock,
		reject: true,
	})
)

// ajax工具，不含有 errorTip和successTip 一般models会使用
const __ajax = withDefaultSettings(new SxAjax({ isMock }))

// hooks
const {
	useGet: _useGet,
	useDel: _useDel,
	usePost: _usePost,
	usePut: _usePut,
	usePatch: _usePatch,
} = createHooks(_ajax)

// 请求响应拦截
;[__ajax.instance, _ajax.instance].forEach((instance) => {
	// 请求拦截
	instance.interceptors.request.use(
		async (cfg) => {
			// Do something before request is sent
			if (/^\/go\/ps/.test(cfg.url) && $q.is.client) {
				let clientToken = getSession('client_token')
				if (clientToken) cfg.headers['User-Token'] = clientToken
				try {
					let clientCommonParams = await callAppFunc('calSign')
					clientCommonParams = clientCommonParams?.header
					if ($_.isObject(clientCommonParams)) {
						delete clientCommonParams['User-Token']
						clientCommonParams['Accept'] = 'application/json'
						$_.forEach(clientCommonParams, (v, k) =>
							$_.set(cfg.headers, `${k}`, v)
						)
					}
					// 获取正式环境访问sign权限
					let signParams = await callAppFunc('getSign')
					signParams = signParams?.data
					let urlSign = ''
					if ($_.isObject(signParams)) {
						$_.forEach(signParams, (v, k) => {
							urlSign += `&${k}=${v}`
						})
						urlSign = urlSign.substring(1, urlSign.length)
					}
					cfg.url =
						cfg.url.indexOf('?') !== -1
							? cfg.url + `&${urlSign}`
							: cfg.url + `?${urlSign}`
				} catch (err) {
					console.log(err)
				}
				$_.set(cfg, 'baseURL', api_client)
			} else {
				let userToken = getCookie('userToken')
				if (userToken) cfg.headers['user-token'] = userToken
				let webSession = getCookie('webSession')
				if (webSession) cfg.headers['WEBSESSION'] = webSession

				// $_.set(cfg, "params.package", /^\/upload\/image/.test(cfg.url) ? 'com.imbb.oversea.android' : packageField)
				$_.set(cfg, 'params.package', packageField)
			}
			console.log(cfg.url, cfg)
			return cfg
		},
		(error) => {
			// Do something with request error
			return Promise.reject(error)
		}
	)

	// 响应拦截
	instance.interceptors.response.use(
		(res) => {
			// Do something before response
			console.log('response', res)
			return res
		},
		(error) => {
			// Do something with response error
			return Promise.reject(error)
		}
	)
})

// 判断请求是否是mock
function isMock(url /* url, data, method, options */) {
	return url.startsWith('/mock')
}

// hooks
export const useGet = _useGet
export const useDel = _useDel
export const usePost = _usePost
export const usePut = _usePut
export const usePatch = _usePatch

// ajax高阶组件
export const ajaxHoc = createHoc(_ajax)

// ajax工具，不含有 errorTip和successTip 一般models会使用
export const ajax = __ajax

// mockjs使用的axios实例
export const mockInstance = (__ajax.mockInstance = _ajax.mockInstance)
