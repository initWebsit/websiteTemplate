/*
 + ------------------------------------------------------------------
 | 根页 
 + ------------------------------------------------------------------ 
 */
import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import qs from 'qs'
import { Toast } from '@/library/ui'
import { getCookie } from '@/commons/cookie'
import { setSession, getSession } from '@/commons/storage'
import { setCookie } from '@/commons/cookie'
import { useGet } from '@/library/ajax'
import { callAppFunc } from '@/commons/clientSdk'
import cfg from '@/config'
import store from './store'
import Routers from './router'
import { getWebSession, getUserInfo, setConfig } from './store/app'
import { getCurrentLang } from '@/commons/I18N'
import Loading from "./library/loading/loading";

export default function AppContainer() {
	const [canMount, setCanMount] = useState(false)
	const [_loadingToken, fetchToken] = useGet('/h5user/loginuserprofile')
	const [_loadingUuid, fetchUuid] = useGet('/go/ps/h5user/h5UserTokenQuery')

	useEffect(async () => {
		let userToken = getCookie('userToken')
		let platform = null
		let urlSearch = qs.parse(window.location.search, {
			ignoreQueryPrefix: true,
		})
		let uuid = urlSearch?.uuid

		if ($q.is.client) {
			try {
				let deviceUserInfo = await callAppFunc('getUserInfo')
				setSession('client_token', deviceUserInfo?.token)
				setSession('role', deviceUserInfo?.role)
				setSession('uid', deviceUserInfo?.uid)
				console.log('deviceUserInfo', deviceUserInfo)
				if (deviceUserInfo?.lan !== getSession('lang')) {
					setSession('lang', deviceUserInfo?.lan)
					window.location.reload()
				}

				// if (process.env.NODE_ENV === 'production') {
				let uuidRes,
					tokenRes,
					times = 0
				// Toast.loading();
				do {
					console.log('times', times)
					times++
					uuidRes = await fetchUuid()
					console.log('uuidRes', uuidRes)
					uuid = uuidRes?.token
					tokenRes = await fetchToken({ uuid })
					console.log('tokenRes', tokenRes, uuid)
				} while (!tokenRes?.token && times <= 1)

				if (tokenRes?.token) {
					setCookie('userToken', tokenRes?.token)
					userToken = tokenRes?.token
				}
				// Toast.clear();
				// } else {
				// setCookie('userToken', deviceUserInfo?.token);
				// userToken = deviceUserInfo?.token;
				// }
			} catch (err) {
				console.error(err)
				Toast.error(err?.msg || I18N.common.service_exception)
			}
		}

		if (uuid && !$q.is.client) {
			let res
			try {
				res = await fetchToken({ uuid })
			} catch (err) {
				console.warn(err)
			}
			if (res?.success) {
				setCookie('userToken', res?.token)
				userToken = res?.token
			}
		}

		if (urlSearch?.lang) {
			setSession('lang', urlSearch.lang)
		}

		if (urlSearch?.uuid || urlSearch?.lang) {
			delete urlSearch.uuid
			delete urlSearch.lang
			history.replaceState(
				null,
				null,
				window.location.pathname +
					($_.isEmpty(urlSearch) ? '' : `?${qs.stringify(urlSearch)}`)
			)
		}

		if (userToken) {
			await store.dispatch(getWebSession())
			await store.dispatch(getUserInfo())
		}

		store.dispatch(setConfig({ ...cfg, ...(cfg[platform] || {}) }))
		document.documentElement.setAttribute(
			'dir',
			$_.includes(['ar'], getCurrentLang()) ? 'rtl' : 'ltr'
		)
		setCanMount(true)
	}, [])

	return !canMount ? <Loading/> : (
		<Provider store={store}>
			<Routers />
		</Provider>
	)
}
