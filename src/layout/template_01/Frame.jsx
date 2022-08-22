/*
 + ------------------------------------------------------------------
 | 桌面端 Frame 入口
 + ------------------------------------------------------------------ 
 */
import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './Header';
import { connect } from "react-redux";
import './Frame.less';


function DesktopFrame(props) {
	return (
		<div className="layout-d-frame">
			<Header />
			<div className='laf-content'
				style={{ height: (window.innerHeight - (props.pageCfg.headerPadD === 1 ? 80 : 0)) + 'px' }}
			>
				<Outlet />
			</div>
		</div>
	)
}


export default connect(
	({ app }) => ($_.pick(app, ['pageCfg']))
)(DesktopFrame)