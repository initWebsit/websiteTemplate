/*
 + ------------------------------------------------------------------
 | 桌面端 Frame 入口
 + ------------------------------------------------------------------ 
 */
import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './Header';
import { useSelector } from "react-redux";
import './Frame.less';


function DesktopFrame() {
	const pageCfg = useSelector(state => state.app.pageCfg);
	
	return (
		<div className="layout-d-frame">
			<Header />
			<div className='laf-content'
				style={{ height: (window.innerHeight - (pageCfg.headerPadD === 1 ? 80 : 0)) + 'px' }}
			>
				<Outlet />
			</div>
		</div>
	)
}


export default DesktopFrame