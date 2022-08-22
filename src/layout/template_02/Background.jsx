/*
 + ------------------------------------------------------------------
 | 背景填充
 + ------------------------------------------------------------------ 
 */
import React, { useEffect } from 'react'
import classN from 'classnames';
import { connect } from "react-redux";


import './Background.less';

function Background(props) {

    return (
        <section className={classN('layout-m-backgound', {
            'layout-m-backgound-blue': props.pageCfg.pageThemeM === 1 || props.pageCfg.pageThemeM === 2
        })}>

        </section>
    )
}


export default connect(
    ({ app }) => ($_.pick(app, ['pageCfg'])),
    ({ app }) => ($_.pick(app, []))
)(Background)
