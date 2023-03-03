/*
 + ------------------------------------------------------------------
 | 导航
 + ------------------------------------------------------------------
 */
import React from "react";
import { connect } from "react-redux";
import I18N from '@/commons/I18N';
import { MenuSvg, CloseSvg, LeftArrowSvg } from '@/library/icons';
import classN from 'classnames';
import logoImg from '@/assets/header_logo.png'
import diamondImg from '@/assets/common_diamond_blue.png'
import { LogoSvg } from '@/commons/svgIcon';
import "./Header.less";


const CompDiamon = (props) => {
    const handleGotoRecharge = () => props.actions.jumpRechargePage();

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


function Header(props) {
    const handleGoBack = () => {
        props.navigate(-1)
    }

    const handleMenuAction = () => {
        // if (props.menuCloseLock || props.menuOpenLock) return;
        props.actions.setFloatMenu(!props.floatMenu);
        // if ([3, 4].includes(props.pageCfg.headerThemeM)) {
        //     props.actions.setPageCfg({ headerThemeM: !props.floatMenu ? 3 : 4 })
        // }
        // if ([1, 2].includes(props.pageCfg.headerThemeM)) {
        //     props.actions.setPageCfg({ headerThemeM: !props.floatMenu ? 2 : 1 })
        // }
    }

    return (<>
        <header className={classN('layout-m-header', {
            'layout-m-header-black': [2, 4].includes(props.pageCfg.headerThemeM),
            'layout-m-header-blue': [1, 3].includes(props.pageCfg.headerThemeM)
        })}>
            <span className="lmh-left">
                {[3, 4].includes(props.pageCfg.headerThemeM) ?
                    <LogoSvg width="117px" height="33px" onClick={() => props.navigate("/home")}/>
                    :
                    <span style={{'transform': props.lang === 'ar' ? 'rotate(180deg)' : ''}}>
                        <LeftArrowSvg onClick={handleGoBack} className="lmh-icon" color="#fff" />
                    </span>
                }
            </span>
            {
                (props.pageCfg.headerThemeM === 1 || props.pageCfg.headerThemeM === 2) ?
                    <span className="lmh-center">{props.pageCfg.title}</span>
                    :
                    <></>
            }

            <span className="lmh-right">
                {/*<CompDiamon {...props} />*/}
                {props.floatMenu ?
                    <CloseSvg onClick={handleMenuAction} color='#fff' className='lmh-close' /> :
                    <MenuSvg onClick={handleMenuAction} color='#fff' opacity={1} />
                }
            </span>
        </header>
        {props.pageCfg.headerPadM === 1 && <div className="layout-m-header-pad" />}
    </>)
}

export default connect(
    ({ app }) => ($_.pick(app, ['floatMenu', 'pageCfg', 'navigate', 'lang'])),
    ({ app }) => ({ actions: $_.pick(app, ['setFloatMenu', 'jumpRechargePage', 'setPageCfg']) })
)(Header)
