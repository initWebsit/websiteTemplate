import React from 'react';
import { connect } from "react-redux";
import Footer from './Footer';
import './Content.less';


function MobileContent(props) {
    if ($_.isEmpty(props.pageCfg)) return null;
    if (props.pageCfg.auth && $_.isEmpty(props.userInfo)) {
        props.actions.jumpLoginPage();
        return null;
    }

    return (
        <div className="layout-m-content" style={{ height: props.pageCfg.headerPadM === 1 ? 'calc(100% - 62px)' : '100%' }}>
            {props.children}
            {
                props.pageCfg.footerStatusM === 1 && <Footer />
            }
        </div>
    )
}

export default connect(
    ({ app }) => ($_.pick(app, ['userInfo', 'pageCfg'])),
    ({ app }) => ({ actions: $_.pick(app, ['jumpLoginPage']) })
)(MobileContent)
