/*
 + ------------------------------------------------------------------
 | App环境  Frame
 + ------------------------------------------------------------------ 
 */
import React, { useState, useEffect } from 'react'
import Header from './Header'
import Background from './Background'
import classN from 'classnames'
import { connect } from 'react-redux'
import { Outlet } from 'react-router-dom'
import './Frame.less'

function ClientFrame(props) {
	const [resizeState, setResizeState] = useState(false);

	const resizeFunc = () => {
		setResizeState((state) => {
			return !state;
		});
	}
	useEffect(() => {
		window.addEventListener('resize', resizeFunc);

		return () => {
			window.removeEventListener('resize', resizeFunc);
		}
	}, []);

	return (
		<div
			className={classN('layout-c-frame', {
				'layout-c-frame-blue': props.pageCfg.pageThemeC === 1,
			})}
		>
			<Header />
			<Background />
			<div
				className="lcf-content"
				style={{
					height:
						window.innerHeight -
						props.pageCfg.statusBarHeight -
						50 +
						'px',
				}}
			>
				<Outlet />
			</div>
		</div>
	)
}

export default connect(({ app }) => $_.pick(app, ['pageCfg']))(ClientFrame)
