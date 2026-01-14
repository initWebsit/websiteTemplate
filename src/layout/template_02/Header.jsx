/*
 + ------------------------------------------------------------------
 | 导航
 + ------------------------------------------------------------------ 
 */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import I18N from '@/commons/I18N';
import { MenuSvg, CloseSvg, LeftArrowSvg } from '@/library/icons';
import classN from 'classnames';
import logoImg from '@/assets/header_logo.png'
import diamondImg from '@/assets/common_diamond_blue.png';
import { jumpRechargePage, setFloatMenu } from '@/store/app';
import "./Header.less";


const CompDiamon = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGotoRecharge = () => {
        dispatch(jumpRechargePage({ navigate }));
    };

    return (
        <div className="lmh-diamond" onClick={handleGotoRecharge}>
            <div className="lmh-diamond-left">
                <img className="lmh-diamond-img" src={diamondImg} alt="" />
            </div>
            <div className="lmh-diamond-right">
                <span className="lmh-diamond-text">
                    {I18N.common.recharge}
                </span>
            </div>
        </div>
    )
}


function Header({ menuCloseLock, menuOpenLock }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const floatMenu = useSelector(state => state.app.floatMenu);
    const pageCfg = useSelector(state => state.app.pageCfg);
    const lang = useSelector(state => state.app.lang);

    const handleGoBack = () => {
        navigate(-1)
    }

    const handleMenuAction = () => {
        // if (menuCloseLock || menuOpenLock) return;
        dispatch(setFloatMenu(!floatMenu));
        // if ([3, 4].includes(props.pageCfg.headerThemeM)) {
        //     props.actions.setPageCfg({ headerThemeM: !props.floatMenu ? 3 : 4 })
        // }
        // if ([1, 2].includes(props.pageCfg.headerThemeM)) {
        //     props.actions.setPageCfg({ headerThemeM: !props.floatMenu ? 2 : 1 })
        // }
    }

    return (<>
        <header className={classN('layout-m-header', {
            'layout-m-header-black': [2, 4].includes(pageCfg.headerThemeM),
            'layout-m-header-blue': [1, 3].includes(pageCfg.headerThemeM)
        })}>
            <span className="lmh-left" style={{'transform': lang === 'ar' ? 'rotate(180deg)' : ''}}>
                {[3, 4].includes(pageCfg.headerThemeM) ?
                    // <img src={logoImg} alt="logo" className="lmh-logo" />
                    <span></span>
                    :
                    <LeftArrowSvg onClick={handleGoBack} className="lmh-icon" color="#fff" />
                }
            </span>
            {
                (pageCfg.headerThemeM === 1 || pageCfg.headerThemeM === 2) ?
                    <span className="lmh-center">{pageCfg.title}</span>
                    :
                    <span className="lmh-center">
                        <img src={logoImg} alt="logo" className="lmh-logo" />
                    </span>
            }

            <span className="lmh-right">
                {/*<CompDiamon />*/}
                {floatMenu ?
                    <CloseSvg onClick={handleMenuAction} color='#fff' className='lmh-close' /> :
                    <MenuSvg onClick={handleMenuAction} color='#fff' opacity={1} />
                }
            </span>
        </header>
        {pageCfg.headerPadM === 1 && <div className="layout-m-header-pad" />}
    </>)
}

export default Header