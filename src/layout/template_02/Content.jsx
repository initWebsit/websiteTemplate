import React from 'react';
import { connect } from "react-redux";
import Footer from './footer';
import './Content.less';


function MobileContent(props) {
    if ($_.isEmpty(props.pageCfg)) return null;
    if (props.pageCfg.auth && $_.isEmpty(props.userInfo)) {
        props.actions.jumpLoginPage();
        return null;
    }

    return (
        <div className="layout-m-content" style={{ height: 'calc(100% - 64px)' }}>
            {props.children}
            {
                props.pageCfg.footerStatusD === 1 && <Footer />
            }
        </div>
    )
}

export default connect(
    ({ app }) => ($_.pick(app, ['userInfo', 'pageCfg'])),
    ({ app }) => ({ actions: $_.pick(app, ['jumpLoginPage']) })
)(MobileContent)