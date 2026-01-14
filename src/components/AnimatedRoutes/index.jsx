/*
 + ------------------------------------------------------------------
 | 路由过渡动画组件
 + ------------------------------------------------------------------ 
 */
import React from 'react';
import { useLocation, Routes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './index.less';

/**
 * 路由过渡动画包装器
 * @param {React.ReactNode} children - Routes 组件
 * @param {string} transitionType - 动画类型: 'fade' | 'slide' | 'slideUp' | 'slideDown'
 */
function AnimatedRoutes({ children, transitionType = 'fade' }) {
	const location = useLocation();

	return (
		<TransitionGroup className="animated-routes-wrapper">
			<CSSTransition
				key={location.pathname}
				timeout={300}
				classNames={`route-transition-${transitionType}`}
				unmountOnExit
			>
				<div className="route-transition-container">
					<Routes location={location}>
						{children}
					</Routes>
				</div>
			</CSSTransition>
		</TransitionGroup>
	);
}

export default AnimatedRoutes;

