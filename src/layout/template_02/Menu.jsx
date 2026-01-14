/*
 + ------------------------------------------------------------------
 | 菜单
 + ------------------------------------------------------------------ 
 */
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Picker } from '@/library/ui';
import { setSession } from '@/commons/storage';
import I18N, { langDict } from '@/commons/I18N';
import { removeURLParameter } from '@/commons/tools';
import classN from 'classnames';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { RightArrowSvg, TriangleSvg } from '@/library/icons';
import { dealLogout, setFloatMenu, jumpLoginPage, setPageCfg, setSimpleState } from '@/store/app';
import "./Menu.less";


const LangColumns = [$_.map(langDict, o => ({ label: o.text, value: o.key, }))];


const LanguageSvg = (props) => {
    return (
        <svg viewBox="0 0 1024 1024" width="16px" height="16px" className={props.className}>
            <path d="M512 96C281.6 96 96 281.6 96 512s185.6 416 416 416 416-185.6 416-416S742.4 96 512 96z m0 800c-212.8 0-384-171.2-384-384s171.2-384 384-384 384 171.2 384 384-171.2 384-384 384z m0-800c-115.2 0-208 185.6-208 416s92.8 416 208 416 208-185.6 208-416S627.2 96 512 96z m0 800c-97.6 0-176-171.2-176-384s78.4-384 176-384 176 171.2 176 384-78.4 384-176 384zM112 496h800v32H112v-32z" p-id="3664" fill={props.color || "#313131"} />
        </svg>
    )
}

function MenuComp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfo = useSelector(state => state.app.userInfo);
    const navMenu = useSelector(state => state.app.navMenu);
    const lang = useSelector(state => state.app.lang);
    const floatMenu = useSelector(state => state.app.floatMenu);
    const pageCfg = useSelector(state => state.app.pageCfg);
    
    const [showPopup, setShowPopup] = useState(false);
    const [langValue, setLangValue] = useState([]);
    const [menus, setMenus] = useState([]);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (['zh', 'zh-CN'].includes(lang)) {
            setLangValue(['zh-S', 'i']);
        }
        else if (['zh-TW', 'zh-HK'].includes(lang)) {
            setLangValue(['zh-T', 'i']);
        } else {
            setLangValue([lang, 'i']);
        }
        disableBodyScroll(element);
        return () => {
            enableBodyScroll(element);
        }
    }, [lang]);

    //- 用于生成用户菜单 
    useEffect(() => {
        let _menus = $_.filter(navMenu, p => {
            switch (p.h5NavStatus) {
                case 1:
                    return true;
                case 2:
                    return !$_.isEmpty(userInfo);
                case 3:
                    return $_.isEmpty(userInfo);
                default:
                    return false;
            }
        });
        setMenus(_menus)
    }, [userInfo, navMenu])


    const handleChangeLang = (arr) => {
        let _lang = arr
        if ($_.isArray(_lang)) _lang = _lang[0];
        setSession('lang', _lang);
        let _href = removeURLParameter(window.location.href, 'lang');
        window.location.replace(_href);
    }

    const goToSpecifyPage = (opts) => {
        // if ((new RegExp('/' + opts.value)).test(xxxx)) return dispatch(setFloatMenu(false));
        if (opts.path === 'login') {
            dispatch(setSimpleState({ key: 'bfCache', value: true }));
            dispatch(jumpLoginPage('push'));
        } else {
            navigate(opts.path);
            dispatch(setFloatMenu(false));
        }
    }

    const handleLogout = () => {
        dispatch(dealLogout()).then(() => {
            dispatch(setFloatMenu(false))
            pageCfg.headerThemeM === 3 && dispatch(setPageCfg({ headerThemeM: 2 }))
        });
    }


    return (
        <section className={classN("layout-m-menu", floatMenu ? 'entering' : 'leaving')} ref={ref}>
            {$_.isObject(userInfo) && !$_.isEmpty(userInfo) &&
                <div className="lmm-user">
                    <img className="lmm-user-photo"
                        src={
                            userInfo?.icon ?
                                userInfo.icon + '!head150' :
                                "https://xs-image.oss-cn-hangzhou.aliyuncs.com/ic_default.png!head150"
                        }
                    />
                    <span className="lmm-user-info">
                        <div className="lmm-user-name">{userInfo.name}</div>
                        <div className="lmm-user-id">ID:{userInfo.uid}</div>
                    </span>
                    <span className="lmm-user-exit" onClick={handleLogout}>{I18N.common.logout}</span>
                </div>
            }

            <div className="lmm-nav">
                {$_.map(menus, (o, idx) => (
                    <div className="lmm-nav-item" key={idx} onClick={() => goToSpecifyPage(o)}>
                        <i>{o.title}</i>
                        <span>
                            <RightArrowSvg color="#fff"/>
                        </span>
                    </div>
                ))}
            </div>

            {
                // <div className="lmm-lang" >
                //     <span onClick={() => setShowPopup(true)}>
                //         <LanguageSvg className="lmm-lang-language" color="#fff"/>
                //         {$_.get($_.find(langDict, (o) => $_.includes($_.concat([], o.value), lang)), 'text')}
                //         <TriangleSvg className="lmm-lang-triangle" color="#fff" />
                //     </span>
                // </div>
            }
            <Picker
                columns={LangColumns}
                visible={showPopup}
                onClose={() => setShowPopup(false)}
                value={langValue}
                onConfirm={handleChangeLang}
                cancelText={I18N.common.cancel}
                confirmText={I18N.common.confirm}
            />
        </section >
    );
}

export default MenuComp


