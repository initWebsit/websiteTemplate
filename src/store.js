/*
 + ------------------------------------------------------------------
 | 全局唯一数据中心
 + ------------------------------------------------------------------ 
 */
import { init } from "@rematch/core";
import I18N, { getCurrentLang } from '@/commons/I18N';
import { ajax } from "@/library/ajax";
import { setCookie, clearAllCookie } from '@/commons/cookie';
import { getSession } from '@/commons/storage';
import { Toast } from '@/library/ui';


/** 基本Model, 用于存放通用信息 **/
const app = {
	state: {
		userInfo: {},
		floatMenu: false,
		navMenu: [],
		pageCfg: {},
		config: {},
		lang: getCurrentLang(),
		bfCache: false,
		history: null,
		navigate: null,
		pageCache: null
	},
	reducers: {
		setSimpleState(state, payload) {
			return { ...state, [payload.key]: payload.value };
		},
		setUserInfo(state, payload) {
			return { ...state, userInfo: payload || {} };
		},
		setFloatMenu(state, payload) {
			return { ...state, floatMenu: payload };
		},
		setNavMenu(state, payload) {
			return { ...state, navMenu: payload };
		},
		setPageCfg(state, payload = {}) {
			let pageCfg = $_.cloneDeep(state.pageCfg);
			pageCfg = { ...pageCfg, ...payload };
			return { ...state, pageCfg };
		},
		setConfig(state, payload) {
			return { ...state, config: payload };
		},
		setNavigate(state, payload) {
			return { ...state, navigate: payload }
		},
		setPageCache(state, payload) {
			return { ...state, pageCache: payload }
		}
	},
	effects: {
		// 获取websession
		getWebSession() {
			return ajax.get("/h5user/getWebSession")
				.then(res => {
					if (!res?.success) throw res;
					setCookie('webSession', res.data?.websession, null, res.data?.expire);
					return res
				})
				.catch(err => {
					Toast.error(err?.msg || I18N.common.service_exception);
					return err;
				});
		},
		//- 获取用户信息
		getUserInfo() {
			return ajax.post("/h5user/home")
				.then(res => {
					if (!$_.isObject(res?.data)) throw res;
					this.setSimpleState({ key: 'userInfo', value: res?.data })
				})
				.catch(err => {
					Toast.error(err?.msg || I18N.common.service_exception);
					clearAllCookie()
					this.setSimpleState({ key: 'userInfo', value: {} });
					return false
				});
		},
		//- 注销
		dealLogout() {
			Toast.loading();
			return ajax.post('/h5user/logout')
				.then(res => {
					if (!res.success) throw res;
					Toast.clear();
				})
				.catch(err => { Toast.error(err?.msg || I18N.common.service_exception) })
				.finally(() => {
					this.setUserInfo({});
					clearAllCookie();
				});
		},
		//- 跳转到充值页
		async jumpRechargePage(_val, { app: { userInfo, config, navigate } }) {
			// 原充值方式
			$_.isFunction(navigate) && navigate('/purse/recharge');
		},
		//- 跳转到登录页
		jumpLoginPage(val, { app: { config } }) {
			let redirectUrl = encodeURIComponent(window.location.href);
			let url = config?.host_official + "/login?redirect_url=" + redirectUrl;
			let lang = getCurrentLang();
			if (lang) url = url + '&lang=' + lang;
			val === 'push' ? window.location.href = url : window.location.replace(url);
		},
		//- 跳转到指定页面
		async jumpRedirectPage(redirectUrl, { app: { config } }) {
			Toast.loading();
			let url;
			try {
				let res = await ajax.post("/h5user/officialtoken")
				if (!res?.success) return Toast.error(res?.msg || I18N.common.service_exception);
				let platform = getSession('platform');

				if ((platform && config.platform === 'ola') || !platform) {
					url = redirectUrl + '?uuid=' + res.data;
					window.location.replace(url);
				} else {
					url = config?.host_official + '/login/wait?uuid=' + res.data + "&redirect_url=" + encodeURIComponent(redirectUrl);
					window.location.replace(url);
				}
				Toast.clear();
			} catch (err) {
				Toast.error(err?.msg || I18N.common.service_exception);
			}
		},
		//- 跳转提现相关页，含：身份认证提醒、提现账户设置、提现申请
		async jumpWithdrawPage(_val, { app: { history } }) {
			Toast.loading();
			try {
				let res = await ajax.post("/alloo/cashValid")
				if (!res?.success) throw res;
				switch (true) {
					case res.data?.idcard == 0 || res.data?.idcard == 2:
						Toast.success(I18N.purse.goto_alloo_certificate);
						break;
					case res.data?.bankcard == 0 || res.data?.bankcard == 2:
						history.push('/purse/withdraw-set')
						break;
					default:
						history.push('/purse/withdraw-apply')
				}
				Toast.clear();
			} catch (err) {
				Toast.error(err?.msg || I18N.common.service_exception);
			}
		}
	}
};


export default init({
	models: {
		app
	}
});
