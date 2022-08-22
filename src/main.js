/*
 + ------------------------------------------------------------------
 | APP入口
 + ------------------------------------------------------------------ 
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './app'
import setConsole from './library/console/index'

/** 公共样式 **/
import '@/styles/global.less'
import '@/library/ui/index.less'
import '@/assets/favicon.ico'
;(async () => {
	await setConsole()
	ReactDOM.render(
		<BrowserRouter>
			<App />
		</BrowserRouter>,
		document.getElementById('app-root')
	)
})()
if (module.hot) module.hot.accept()
