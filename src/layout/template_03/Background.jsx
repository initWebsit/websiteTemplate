/*
 + ------------------------------------------------------------------
 | 背景填充
 + ------------------------------------------------------------------ 
 */
import React, { useEffect } from 'react'
import classN from 'classnames';
import { connect } from "react-redux";
import { RechargeBgSvg, IncomeBgSvg } from './svgIcon';

import './Background.less';

function Background(props) {


    return (
        <section className="layout-c-backgound">
            
        </section>
    )
}


export default connect(
    ({ app }) => ($_.pick(app, ['pageCfg'])),
    ({ app }) => ($_.pick(app, []))
)(Background)
