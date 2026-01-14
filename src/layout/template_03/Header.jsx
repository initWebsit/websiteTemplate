/*
 + ------------------------------------------------------------------
 | 导航
 + ------------------------------------------------------------------ 
 */
import React, {useCallback} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classN from 'classnames';
import { callAppFunc } from '@/commons/clientSdk';
import { LeftArrowSvg } from '@/library/icons';
import "./Header.less";


function Header() {
    const navigate = useNavigate();
    const pageCfg = useSelector(state => state.app.pageCfg);
    const lang = useSelector(state => state.app.lang);

    // const [statusBarHeight, setStatusBarHeight] = useState(0);
    const handleGoBack = () => {
        if ($q.is.client && pageCfg.hardExit === 1) {
            callAppFunc('navigateBack')
        } else {
            navigate(-1)
        }
    }

    // 明细点击事件
    const goDetail = useCallback(() => {
        callAppFunc('onWalletDetail')
    }, [])

    return (<>
        <header
            className={classN('layout-a-header', {
                'layout-a-header-filled': pageCfg.headerThemeC === 1,
                'layout-a-header-outlined': pageCfg.headerThemeC === 2
            })}
            style={{
                paddingTop: pageCfg.statusBarHeight + 'px',
                height: pageCfg.statusBarHeight + 50 + 'px'
            }}
        >
            <div className="lah-content">
                <span className="lah-left" style={{'transform': lang === 'ar' ? 'rotate(180deg)' : ''}} onClick={handleGoBack}>
                    <LeftArrowSvg color={pageCfg.headerThemeC === 1 ? null : '#fff'} />
                </span>
                <span className="lah-center">{pageCfg.title}</span>
                {$_.isEmpty(pageCfg?.headerLink || {}) ?
                    <span className="lah-right" /> :
                    <span className="lah-right" onClick={() => goDetail()}>
                        {pageCfg?.headerLink?.icon && React.createElement(pageCfg?.headerLink?.icon)}
                        {pageCfg?.headerLink?.name}
                    </span>
                }
            </div>
        </header>
        {pageCfg.headerPadC === 1 && <div className="layout-a-header-pad"
            style={{ height: pageCfg.statusBarHeight + 50 + 'px' }}
        />}
    </>)
}

export default Header
