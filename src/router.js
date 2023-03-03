/*
 + ------------------------------------------------------------------
 | 路由页 - 实际意义上的根组件，已挂载到redux上，可获取store中的内容
 + ------------------------------------------------------------------
 */
import React from 'react'
import { connect } from 'react-redux'
import {
	Routes,
	Route,
	Navigate,
	useNavigate,
	useLocation,
} from 'react-router-dom'
import { callAppFunc } from '@/commons/clientSdk'
import pageConfigB, {
	defaultPageConfig as defaultPageConfigB,
} from '@browser/pageConfig'
import pageConfigC, {
	defaultPageConfig as defaultPageConfigC,
} from '@client/pageConfig'
import pageConfigG, {
	defaultPageConfig as defaultPageConfigG,
} from '@/projects/guild/pageConfig'
import pageConfigO from '@/projects/other/pageConfig'
import DFrame from './layout/template_01/Frame'
import MFrame from './layout/template_02/Frame'
import AFrame from './layout/template_03/Frame'
import DContent from './layout/template_01/Content'
import MContent from './layout/template_02/Content'
import AContent from './layout/template_03/Content'

$_.forEach(pageConfigB, (o) => {
	o.pageConfig = {
		...defaultPageConfigB,
		...o.pageConfig,
		title: o.title,
		path: '/' + o.path,
	}
})
$_.forEach(pageConfigC, (o) => {
	o.pageConfig = {
		...defaultPageConfigC,
		...o.pageConfig,
		title: o.title,
		path: '/client/' + o.path,
	}
})
$_.forEach(pageConfigO, (o) => {
	o.pageConfig = { title: o.title, path: '/' + o.path }
})
$_.forEach(pageConfigG, (o) => {
	o.pageConfig = {
		...defaultPageConfigG,
		...o.pageConfig,
		title: o.title,
		path: '/guild/' + o.path,
	}
})

const contentWrap = (Component) => {
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

function RouterContainer(props) {
	const location = useLocation()
	const navigate = useNavigate()
	props.actions.setNavigate(navigate)

	const updatePageInfo = async () => {
		let _page = $_.find(
			$_.concat(pageConfigB, pageConfigC, pageConfigO, pageConfigG),
			(o) => {
				// debugger
				if (location.pathname === '/') {
					return '/home' === o.pageConfig.path
				} else if (window.location.pathname === o.pageConfig.path + '/') {
					return true
				} else {
					return location.pathname === o.pageConfig.path
				}
			}
		)
		let _pageConfig = $_.cloneDeep(_page.pageConfig)
		if ($q.is.client) {
			let _deviceInfo = await callAppFunc('getStatusBarHeight')
			_pageConfig['statusBarHeight'] = _deviceInfo?.height || 0
		}
		props.actions.setPageCfg(_pageConfig)
		props.actions.setFloatMenu(false)
	}

	React.useEffect(() => {
		updatePageInfo()
	}, [location])

	let curPlatform = 'h5'
	if ($q.is.desktop) curPlatform = 'pc'
	if ($q.is.mobile) curPlatform = 'h5'
	if ($q.is.client) curPlatform = 'client'

	$_.includes(['h5', 'pc'], curPlatform) &&
		props.actions.setNavMenu(
			$_.map(pageConfigB, (p) =>
				$_.pick(p.pageConfig, [
					'title',
					'path',
					'h5NavStatus',
					'pcNavStatus',
				])
			)
		)

	let browserRouteList = $_.filter(pageConfigB, (p) =>
		$_.includes(p.platform, curPlatform)
	).map((o) => ({
		default: o.default,
		options: {
			path: o.path,
			element: contentWrap(o.component),
		},
	}))
	let clientRouteList = $_.filter(pageConfigC, (p) =>
		$_.includes(p.platform, curPlatform)
	).map((o) => ({
		options: {
			path: o.path,
			element: <AContent>{React.createElement(o.component)}</AContent>,
		},
	}))
	let otherRouteList = $_.filter(pageConfigO, (p) =>
		$_.includes(p.platform, curPlatform)
	).map((o) => ({
		options: {
			path: o.path,
			element: React.createElement(o.component),
		},
	}))
	let guildRouteList = $_.filter(pageConfigG, (p) =>
		$_.includes(p.platform, curPlatform)
	).map((o) => ({
		options: {
			path: o.path,
			element: <AContent>{React.createElement(o.component)}</AContent>,
		},
	}))

	return (
		<Routes>
			<Route path="/" element={$q.is.desktop ? <DFrame /> : <MFrame />}>
				<Route
					index
					element={$_.get(
						$_.find(browserRouteList, (o) => o.default),
						'options.element'
					)}
				/>
				{$_.map(browserRouteList, (r) => (
					<Route {...r.options} />
				))}
			</Route>
			<Route path="client" element={<AFrame />}>
				{$_.map(clientRouteList, (r, rIdx) => (
					<Route key={rIdx} {...r.options} />
				))}
			</Route>
			<Route path="guild" element={<AFrame />}>
				{$_.map(guildRouteList, (r, rIdx) => (
					<Route key={rIdx} {...r.options} />
				))}
			</Route>
			{$_.map(otherRouteList, (r, rIdx) => (
				<Route key={rIdx} {...r.options} />
			))}
			<Route
				path="/income"
				element={<Navigate replace to="/client/income" />}
			/>
			<Route path="*" element={<Navigate replace to="/" />} />
		</Routes>
	)
}

export default connect(
	({ app }) => $_.pick(app, ['userInfo']),
	({ app }) => ({
		actions: $_.pick(app, [
			'setNavMenu',
			'setPageCfg',
			'setFloatMenu',
			'setNavigate',
		]),
	})
)(RouterContainer)
