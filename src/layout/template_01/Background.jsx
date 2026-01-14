/*
 + ------------------------------------------------------------------
 | 背景填充
 + ------------------------------------------------------------------ 
 */
import React, { useEffect } from 'react'
import classN from 'classnames';
import { useSelector } from "react-redux";


import './Background.less';

function Background() {
    const pageCfg = useSelector(state => state.app.pageCfg);

    return (
        <section className={classN('layout-d-backgound',{
            'layout-d-backgound-blue': pageCfg.pageThemeD === 1
        })}>
            
        </section>
    )
}


export default Background
