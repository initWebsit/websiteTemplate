/*
 + ------------------------------------------------------------------
 | APP入口
 + ------------------------------------------------------------------ 
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import setConsole from './library/console/index'
import App from './app'

/** 公共样式 **/
// eslint-disable-next-line import/first
import '@/styles/global.less'
// eslint-disable-next-line import/first
import '@/library/ui/index.less'

// eslint-disable-next-line import/first
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
