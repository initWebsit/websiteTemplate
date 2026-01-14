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
        <section className={classN('layout-m-backgound', {
            'layout-m-backgound-blue': pageCfg.pageThemeM === 1 || pageCfg.pageThemeM === 2
        })}>

        </section>
    )
}


export default Background
