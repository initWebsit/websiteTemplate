/*
 + ------------------------------------------------------------------
 | App Store Slice
 + ------------------------------------------------------------------ 
 */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import I18N, { getCurrentLang } from '@/commons/I18N';
import { ajax } from "@/library/ajax";
import { setCookie, clearAllCookie } from '@/commons/cookie';
import { getSession } from '@/commons/storage';
import { Toast } from '@/library/ui';

// 初始状态
const initialState = {
	userInfo: {},
	floatMenu: false,
	navMenu: [],
	pageCfg: {},
	config: {},
	lang: getCurrentLang(),
	bfCache: false,
	history: null,
	pageCache: null
};

// Async Thunks (原 effects)
// 获取websession
export const getWebSession = createAsyncThunk(
	'app/getWebSession',
	async (_, { rejectWithValue }) => {
		try {
			const res = await ajax.get("/h5user/getWebSession");
			if (!res?.success) throw res;
			setCookie('webSession', res.data?.websession, null, res.data?.expire);
			return res;
		} catch (err) {
			Toast.error(err?.msg || I18N.common.service_exception);
			return rejectWithValue(err);
		}
	}
);

// 获取用户信息
export const getUserInfo = createAsyncThunk(
	'app/getUserInfo',
	async (_, { dispatch, rejectWithValue }) => {
		try {
			const res = await ajax.post("/h5user/home");
			if (!$_.isObject(res?.data)) throw res;
			dispatch(setUserInfo(res?.data));
			return res?.data;
		} catch (err) {
			Toast.error(err?.msg || I18N.common.service_exception);
			clearAllCookie();
			dispatch(setUserInfo({}));
			return rejectWithValue(false);
		}
	}
);

// 注销
export const dealLogout = createAsyncThunk(
	'app/dealLogout',
	async (_, { dispatch, rejectWithValue }) => {
		Toast.loading();
		try {
			const res = await ajax.post('/h5user/logout');
			if (!res.success) throw res;
			Toast.clear();
			return res;
		} catch (err) {
			Toast.error(err?.msg || I18N.common.service_exception);
			return rejectWithValue(err);
		} finally {
			dispatch(setUserInfo({}));
			clearAllCookie();
		}
	}
);

// 跳转到充值页
// 注意：navigate 函数应该通过参数传递，而不是从 store 中获取
export const jumpRechargePage = createAsyncThunk(
	'app/jumpRechargePage',
	async ({ navigate }, { getState }) => {
		const state = getState();
		const { userInfo, config } = state.app;
		// 原充值方式
		if ($_.isFunction(navigate)) {
			navigate('/purse/recharge');
		}
	}
);

// 跳转到登录页
export const jumpLoginPage = createAsyncThunk(
	'app/jumpLoginPage',
	async (val, { getState }) => {
		const state = getState();
		const { config } = state.app;
		let redirectUrl = encodeURIComponent(window.location.href);
		let url = config?.host_official + "/login?redirect_url=" + redirectUrl;
		let lang = getCurrentLang();
		if (lang) url = url + '&lang=' + lang;
		val === 'push' ? window.location.href = url : window.location.replace(url);
	}
);

// 跳转到指定页面
export const jumpRedirectPage = createAsyncThunk(
	'app/jumpRedirectPage',
	async (redirectUrl, { getState, rejectWithValue }) => {
		Toast.loading();
		try {
			const res = await ajax.post("/h5user/officialtoken");
			if (!res?.success) {
				Toast.error(res?.msg || I18N.common.service_exception);
				return rejectWithValue(res);
			}
			const state = getState();
			const { config } = state.app;
			let platform = getSession('platform');
			let url;

			if ((platform && config.platform === 'ola') || !platform) {
				url = redirectUrl + '?uuid=' + res.data;
				window.location.replace(url);
			} else {
				url = config?.host_official + '/login/wait?uuid=' + res.data + "&redirect_url=" + encodeURIComponent(redirectUrl);
				window.location.replace(url);
			}
			Toast.clear();
			return res;
		} catch (err) {
			Toast.error(err?.msg || I18N.common.service_exception);
			return rejectWithValue(err);
		}
	}
);

// 跳转提现相关页，含：身份认证提醒、提现账户设置、提现申请
// 注意：navigate 函数应该通过参数传递
export const jumpWithdrawPage = createAsyncThunk(
	'app/jumpWithdrawPage',
	async ({ navigate }, { getState, rejectWithValue }) => {
		Toast.loading();
		try {
			const res = await ajax.post("/alloo/cashValid");
			if (!res?.success) throw res;
			
			switch (true) {
				case res.data?.idcard == 0 || res.data?.idcard == 2:
					Toast.success(I18N.purse.goto_alloo_certificate);
					break;
				case res.data?.bankcard == 0 || res.data?.bankcard == 2:
					if ($_.isFunction(navigate)) {
						navigate('/purse/withdraw-set');
					}
					break;
				default:
					if ($_.isFunction(navigate)) {
						navigate('/purse/withdraw-apply');
					}
			}
			Toast.clear();
			return res;
		} catch (err) {
			Toast.error(err?.msg || I18N.common.service_exception);
			return rejectWithValue(err);
		}
	}
);

// Slice
const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setSimpleState(state, action) {
			const { key, value } = action.payload;
			state[key] = value;
		},
		setUserInfo(state, action) {
			state.userInfo = action.payload || {};
		},
		setFloatMenu(state, action) {
			state.floatMenu = action.payload;
		},
		setNavMenu(state, action) {
			state.navMenu = action.payload;
		},
		setPageCfg(state, action) {
			const payload = action.payload || {};
			let pageCfg = $_.cloneDeep(state.pageCfg);
			pageCfg = { ...pageCfg, ...payload };
			state.pageCfg = pageCfg;
		},
		setConfig(state, action) {
			state.config = action.payload;
		},
		setPageCache(state, action) {
			state.pageCache = action.payload;
		}
	}
});

export const {
	setSimpleState,
	setUserInfo,
	setFloatMenu,
	setNavMenu,
	setPageCfg,
	setConfig,
	setPageCache
} = appSlice.actions;

export default appSlice.reducer;

