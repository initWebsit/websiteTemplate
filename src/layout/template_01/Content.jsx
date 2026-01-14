import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Footer from './Footer';
import { jumpLoginPage } from '@/store/app';
import './Content.less';


function DesktopContent({ children }) {
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.app.userInfo);
    const pageCfg = useSelector(state => state.app.pageCfg);

    if (pageCfg.auth && $_.isEmpty(userInfo)) {
        dispatch(jumpLoginPage());
        return null;
    }

    return (
        <div className="layout-d-content"
            style={{
                height: '100%',
                minHeight: 'calc(100vh - 80px)'
            }}
        >
            {children}
            {pageCfg.footerStatusD === 1 && <Footer color="#fff" backgroundColor="#231a2b" />}
        </div>
    )
}

export default DesktopContent