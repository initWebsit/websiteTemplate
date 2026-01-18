/*
 + ------------------------------------------------------------------
 | 路由页 - 实际意义上的根组件，已挂载到redux上，可获取store中的内容
 + ------------------------------------------------------------------ 
 */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import pageConfigB, { defaultPageConfig as defaultPageConfigB } from '@browser/pageConfig'
import pageConfigC, { defaultPageConfig as defaultPageConfigC } from '@client/pageConfig'

import { callAppFunc } from '@/commons/clientSdk'
import pageConfigG, { defaultPageConfig as defaultPageConfigG } from '@/projects/guild/pageConfig'
import pageConfigO from '@/projects/other/pageConfig'
import { setFloatMenu, setNavMenu, setPageCfg } from '@/store/app'

import DContent from './layout/template_01/Content'
import DFrame from './layout/template_01/Frame'
import MContent from './layout/template_02/Content'
import MFrame from './layout/template_02/Frame'
import AContent from './layout/template_03/Content'
import AFrame from './layout/template_03/Frame'

import './router.less'

$_.forEach(pageConfigB, o => {
  o.pageConfig = {
    ...defaultPageConfigB,
    ...o.pageConfig,
    title: o.title,
    path: '/' + o.path,
  }
})
$_.forEach(pageConfigC, o => {
  o.pageConfig = {
    ...defaultPageConfigC,
    ...o.pageConfig,
    title: o.title,
    path: '/client/' + o.path,
  }
})
$_.forEach(pageConfigO, o => {
  o.pageConfig = { title: o.title, path: '/' + o.path }
})
$_.forEach(pageConfigG, o => {
  o.pageConfig = {
    ...defaultPageConfigG,
    ...o.pageConfig,
    title: o.title,
    path: '/guild/' + o.path,
  }
})

const contentWrap = Component => {
  switch (true) {
    case $q.is.desktop:
      return (
        <DContent>
          <Component />
        </DContent>
      )
    case $q.is.mobile:
      return (
        <MContent>
          <Component />
        </MContent>
      )
    default:
      return <Component />
  }
}

function RouterContainer() {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.app.userInfo)

  const updatePageInfo = async () => {
    let _page = $_.find($_.concat(pageConfigB, pageConfigC, pageConfigO, pageConfigG), o => {
      // debugger
      if (location.pathname === '/') {
        return '/about' === o.pageConfig.path
      } else if (location.pathname === '/income') {
        return '/client/income' === o.pageConfig.path
      } else {
        return location.pathname === o.pageConfig.path
      }
    })
    let _pageConfig = $_.cloneDeep(_page.pageConfig)
    if ($q.is.client) {
      let _deviceInfo = await callAppFunc('getStatusBarHeight')
      _pageConfig['statusBarHeight'] = _deviceInfo?.height || 0
    }
    dispatch(setPageCfg(_pageConfig))
    dispatch(setFloatMenu(false))
  }

  useEffect(() => {
    updatePageInfo()
  }, [location])

  let curPlatform = 'h5'
  if ($q.is.desktop) curPlatform = 'pc'
  if ($q.is.mobile) curPlatform = 'h5'
  if ($q.is.client) curPlatform = 'client'

  useEffect(() => {
    if ($_.includes(['h5', 'pc'], curPlatform)) {
      dispatch(
        setNavMenu(
          $_.map(pageConfigB, p =>
            $_.pick(p.pageConfig, ['title', 'path', 'h5NavStatus', 'pcNavStatus'])
          )
        )
      )
    }
  }, [curPlatform, dispatch])

  let browserRouteList = $_.filter(pageConfigB, p => $_.includes(p.platform, curPlatform)).map(
    o => ({
      default: o.default,
      options: {
        path: o.path,
        element: contentWrap(o.component),
      },
    })
  )
  let clientRouteList = $_.filter(pageConfigC, p => $_.includes(p.platform, curPlatform)).map(
    o => ({
      options: {
        path: o.path,
        element: <AContent>{React.createElement(o.component)}</AContent>,
      },
    })
  )
  let otherRouteList = $_.filter(pageConfigO, p => $_.includes(p.platform, curPlatform)).map(o => ({
    options: {
      path: o.path,
      element: React.createElement(o.component),
    },
  }))
  let guildRouteList = $_.filter(pageConfigG, p => $_.includes(p.platform, curPlatform)).map(o => ({
    options: {
      path: o.path,
      element: <AContent>{React.createElement(o.component)}</AContent>,
    },
  }))

  return (
    <TransitionGroup className='route-transition-wrapper'>
      <CSSTransition
        key={location.pathname}
        timeout={800}
        classNames='route-transition'
        unmountOnExit
      >
        <div className='route-transition-container'>
          <Routes location={location}>
            <Route path='/' element={$q.is.desktop ? <DFrame /> : <MFrame />}>
              <Route
                index
                element={$_.get(
                  $_.find(browserRouteList, o => o.default),
                  'options.element'
                )}
              />
              {$_.map(browserRouteList, r => (
                <Route {...r.options} />
              ))}
            </Route>
            <Route path='client' element={<AFrame />}>
              {$_.map(clientRouteList, (r, rIdx) => (
                <Route key={rIdx} {...r.options} />
              ))}
            </Route>
            <Route path='guild' element={<AFrame />}>
              {$_.map(guildRouteList, (r, rIdx) => (
                <Route key={rIdx} {...r.options} />
              ))}
            </Route>
            {$_.map(otherRouteList, (r, rIdx) => (
              <Route key={rIdx} {...r.options} />
            ))}
            <Route path='/income' element={<Navigate replace to='/client/income' />} />
            <Route path='*' element={<Navigate replace to='/' />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default RouterContainer
