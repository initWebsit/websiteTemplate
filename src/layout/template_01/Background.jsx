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
        <section className={classN('layout-d-backgound',{
            'layout-d-backgound-blue':props.pageCfg.pageThemeD === 1
        })}>
            
        </section>
    )
}


export default connect(
    ({ app }) => ($_.pick(app, ['pageCfg'])),
    ({ app }) => ($_.pick(app, []))
)(Background)
