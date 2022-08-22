/*
 + ------------------------------------------------------------------
 | 菜单
 + ------------------------------------------------------------------ 
 */
import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Picker } from '@/library/ui';
import { setSession } from '@/commons/storage';
import I18N, { langDict } from '@/commons/I18N';
import { removeURLParameter } from '@/commons/tools';
import classN from 'classnames';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { RightArrowSvg, TriangleSvg } from '@/library/icons';
import "./Menu.less";


const LangColumns = [$_.map(langDict, o => ({ label: o.text, value: o.key, }))];


const LanguageSvg = (props) => {
    return (
        <svg viewBox="0 0 1024 1024" width="16px" height="16px" className={props.className}>
            <path d="M512 96C281.6 96 96 281.6 96 512s185.6 416 416 416 416-185.6 416-416S742.4 96 512 96z m0 800c-212.8 0-384-171.2-384-384s171.2-384 384-384 384 171.2 384 384-171.2 384-384 384z m0-800c-115.2 0-208 185.6-208 416s92.8 416 208 416 208-185.6 208-416S627.2 96 512 96z m0 800c-97.6 0-176-171.2-176-384s78.4-384 176-384 176 171.2 176 384-78.4 384-176 384zM112 496h800v32H112v-32z" p-id="3664" fill={props.color || "#313131"} />
        </svg>
    )
}

function MenuComp(props) {
    const [showPopup, setShowPopup] = useState(false);
    const [langValue, setLangValue] = useState([]);
    const [menus, setMenus] = useState([]);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (['zh', 'zh-CN'].includes(props.lang)) {
            setLangValue(['zh-S', 'i']);
        }
        else if (['zh-TW', 'zh-HK'].includes(props.lang)) {
            setLangValue(['zh-T', 'i']);
        } else {
            setLangValue([props.lang, 'i']);
        }
        disableBodyScroll(element);
        return () => {
            enableBodyScroll(element);
        }
    }, []);

    //- 用于生成用户菜单 
    useEffect(() => {
        let _menus = $_.filter(props.navMenu, p => {
            switch (p.h5NavStatus) {
                case 1:
                    return true;
                case 2:
                    return !$_.isEmpty(props.userInfo);
                case 3:
                    return $_.isEmpty(props.userInfo);
                default:
                    return false;
            }
        });
        setMenus(_menus)
    }, [props.userInfo])


    const handleChangeLang = (arr) => {
        let _lang = arr
        if ($_.isArray(_lang)) _lang = _lang[0];
        setSession('lang', _lang);
        let _href = removeURLParameter(window.location.href, 'lang');
        window.location.replace(_href);
    }

    const goToSpecifyPage = (opts) => {
        // if ((new RegExp('/' + opts.value)).test(xxxx)) return props.actions.setFloatMenu(false);
        if (opts.path === 'login') {
            props.actions.setSimpleState({ key: 'bfCache', value: true });
            props.actions.jumpLoginPage('push');
        } else {
            props.navigate(opts.path);
            props.actions.setFloatMenu(false);
        }
    }

    const handleLogout = () => {
        props.actions.dealLogout().then(() => {
            props.actions.setFloatMenu(false)
            props.pageCfg.headerThemeM === 3 && props.actions.setPageCfg({ headerThemeM: 2 })
        });
    }


    return (
        <section className={classN("layout-m-menu", props.floatMenu ? 'entering' : 'leaving')} ref={ref}>
            {$_.isObject(props.userInfo) && !$_.isEmpty(props.userInfo) &&
                <div className="lmm-user">
                    <img className="lmm-user-photo"
                        src={
                            props.userInfo?.icon ?
                                props.userInfo.icon + '!head150' :
                                "https://xs-image.oss-cn-hangzhou.aliyuncs.com/ic_default.png!head150"
                        }
                    />
                    <span className="lmm-user-info">
                        <div className="lmm-user-name">{props.userInfo.name}</div>
                        <div className="lmm-user-id">ID:{props.userInfo.uid}</div>
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
                //         {$_.get($_.find(langDict, (o) => $_.includes($_.concat([], o.value), props.lang)), 'text')}
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

export default connect(
    ({ app }) => ($_.pick(app, ['userInfo', 'navMenu', 'lang', 'floatMenu', 'navigate', 'pageCfg'])),
    ({ app }) => ({
        actions: $_.pick(app,
            ['dealLogout', 'setFloatMenu', 'jumpLoginPage', 'setPageCfg', 'setSimpleState']
        )
    })
)(MenuComp)


