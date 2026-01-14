/*
 + ------------------------------------------------------------------
 | 导航
 + ------------------------------------------------------------------ 
 */
import React from "react";
import { useSelector } from "react-redux";
import { Popover } from '@/library/ui';
import { setSession } from '@/commons/storage';
import { langDict } from '@/commons/I18N';
import classN from 'classnames';
import { TriangleSvg } from '@/library/icons';
import logoImg from '@/assets/header_logo.png'
import { useNavigate } from "react-router-dom";
import "./Header.less";


function Header() {
    const navigate = useNavigate();
    const lang = useSelector(state => state.app.lang);
    const navMenu = useSelector(state => state.app.navMenu);
    const pageCfg = useSelector(state => state.app.pageCfg);
    const handleChangeLang = (opts) => {
        let _lang = opts.value;
        if ($_.isArray(_lang)) _lang = _lang[0];
        setSession('lang', _lang)
        window.location.reload();
    }

    return (<>
        <header className={classN('layout-d-header', {
            'layout-d-header-filled': pageCfg.headerThemeD === 1,
        })}>
            <section className="headerBox">
                <img src={logoImg} alt="logo" className="ldh-left-logo" onClick={() => navigate('/about')}/>
                <div>
                    <div className="ldh-nav">
                        {$_.filter(navMenu, o => o.pcNavStatus > 0).map((o, idx) => (
                            <a key={idx}
                               className={classN({
                                   'ldh-nav-active': pageCfg.path === o.path,
                                   'ldh-nav-active-black': pageCfg.path === o.path && pageCfg.headerThemeD === 2
                               })}
                               onClick={() => navigate(o.path)}
                            >
                                {o.title}
                            </a>)
                        )}
                    </div>
                    {
                        // <div className="ldh-right">
                        //     <Popover.Menu actions={langDict} onSelect={handleChangeLang} placement={'bottom'}>
                        //     <span className="ldh-right-menu">
                        //         {$_.get($_.find(langDict, (o) => $_.includes($_.concat([], o.value), lang)), 'text')}
                        //         <TriangleSvg color={pageCfg.headerThemeD === 1 && '#fff'} />
                        //     </span>
                        //     </Popover.Menu>
                        // </div>
                    }
                </div>
            </section>
        </header >
        {pageCfg.headerPadD === 1 && <div className="layout-d-header-pad" />}
    </>);
}


export default Header