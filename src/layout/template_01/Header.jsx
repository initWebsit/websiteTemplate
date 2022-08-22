/*
 + ------------------------------------------------------------------
 | 导航
 + ------------------------------------------------------------------ 
 */
import React from "react";
import { connect } from "react-redux";
import { Popover } from '@/library/ui';
import { setSession } from '@/commons/storage';
import { langDict } from '@/commons/I18N';
import classN from 'classnames';
import { TriangleSvg } from '@/library/icons';
import logoImg from '@/assets/header_logo.png'
import { useNavigate } from "react-router-dom";
import "./Header.less";


function Header(props) {
    const navigate = useNavigate();
    const handleChangeLang = (opts) => {
        let _lang = opts.value;
        if ($_.isArray(_lang)) _lang = _lang[0];
        setSession('lang', _lang)
        window.location.reload();
    }

    return (<>
        <header className={classN('layout-d-header', {
            'layout-d-header-filled': props.pageCfg.headerThemeD === 1,
        })}>
            <section className="headerBox">
                <img src={logoImg} alt="logo" className="ldh-left-logo" onClick={() => navigate('/about')}/>
                <div>
                    <div className="ldh-nav">
                        {$_.filter(props.navMenu, o => o.pcNavStatus > 0).map((o, idx) => (
                            <a key={idx}
                               className={classN({
                                   'ldh-nav-active': props.pageCfg.path === o.path,
                                   'ldh-nav-active-black': props.pageCfg.path === o.path && props.pageCfg.headerThemeD === 2
                               })}
                               onClick={() => props.navigate(o.path)}
                            >
                                {o.title}
                            </a>)
                        )}
                    </div>
                    {
                        // <div className="ldh-right">
                        //     <Popover.Menu actions={langDict} onSelect={handleChangeLang} placement={'bottom'}>
                        //     <span className="ldh-right-menu">
                        //         {$_.get($_.find(langDict, (o) => $_.includes($_.concat([], o.value), props.lang)), 'text')}
                        //         <TriangleSvg color={props.pageCfg.headerThemeD === 1 && '#fff'} />
                        //     </span>
                        //     </Popover.Menu>
                        // </div>
                    }
                </div>
            </section>
        </header >
        {props.pageCfg.headerPadD === 1 && <div className="layout-d-header-pad" />}
    </>);
}


export default connect(
    ({ app }) => ($_.pick(app, ['lang', 'navMenu', 'pageCfg', 'navigate'])),
    ({ app }) => ({
        actions: $_.pick(app, ['jumpRechargePage'])
    })
)(Header)