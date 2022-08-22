import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import './Content.less';


function AppContent(props) {

    return (
        <div className="layout-a-content">
            {props.children}
        </div>
    )
}

export default connect(
    ({ app }) => ($_.pick(app, ['userInfo', 'pageCfg'])),
    ({ app }) => ({
        actions: $_.pick(app, [])
    })
)(AppContent)
