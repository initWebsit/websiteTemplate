import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import Footer from './Footer';
import './Content.less';


function DesktopContent(props) {
    if (props.pageCfg.auth && $_.isEmpty(props.userInfo)) {
        props.actions.jumpLoginPage();
        return null;
    }

    return (
        <div className="layout-d-content"
            style={{
                height: '100%',
                minHeight: 'calc(100vh - 80px)'
            }}
        >
            {props.children}
            {props.pageCfg.footerStatusD === 1 && <Footer color="#fff" backgroundColor="#231a2b" />}
        </div>
    )
}

export default connect(
    ({ app }) => ($_.pick(app, ['userInfo', 'pageCfg'])),
    ({ app }) => ({ actions: $_.pick(app, ['jumpLoginPage']) })
)(DesktopContent)