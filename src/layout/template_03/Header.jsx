/*
 + ------------------------------------------------------------------
 | 导航
 + ------------------------------------------------------------------ 
 */
import React, {useCallback} from "react";
import { connect } from "react-redux";
import classN from 'classnames';
import { callAppFunc } from '@/commons/clientSdk';
import { LeftArrowSvg } from '@/library/icons';
import "./Header.less";


function Header(props) {
    // const [statusBarHeight, setStatusBarHeight] = useState(0);
    const handleGoBack = () => {
        if ($q.is.client && props.pageCfg.hardExit === 1) {
            callAppFunc('navigateBack')
        } else {
            props.navigate(-1)
        }
    }

    // 明细点击事件
    const goDetail = useCallback(() => {
        callAppFunc('onWalletDetail')
    }, [])

    return (<>
        <header
            className={classN('layout-a-header', {
                'layout-a-header-filled': props.pageCfg.headerThemeC === 1,
                'layout-a-header-outlined': props.pageCfg.headerThemeC === 2
            })}
            style={{
                paddingTop: props.pageCfg.statusBarHeight + 'px',
                height: props.pageCfg.statusBarHeight + 50 + 'px'
            }}
        >
            <div className="lah-content">
                <span className="lah-left" style={{'transform': props.lang === 'ar' ? 'rotate(180deg)' : ''}} onClick={handleGoBack}>
                    <LeftArrowSvg color={props.pageCfg.headerThemeC === 1 ? null : '#fff'} />
                </span>
                <span className="lah-center">{props.pageCfg.title}</span>
                {$_.isEmpty(props.pageCfg?.headerLink || {}) ?
                    <span className="lah-right" /> :
                    <span className="lah-right" onClick={() => goDetail()}>
                        {props.pageCfg?.headerLink?.icon && React.createElement(props.pageCfg?.headerLink?.icon)}
                        {props.pageCfg?.headerLink?.name}
                    </span>
                }
            </div>
        </header>
        {props.pageCfg.headerPadC === 1 && <div className="layout-a-header-pad"
            style={{ height: props.pageCfg.statusBarHeight + 50 + 'px' }}
        />}
    </>)
}

export default connect(
    ({ app }) => ($_.pick(app, ['pageCfg', 'navigate', 'lang']))
)(Header)
