import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Footer from './footer';
import { jumpLoginPage } from '@/store/app';
import './Content.less';


function MobileContent({ children }) {
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.app.userInfo);
    const pageCfg = useSelector(state => state.app.pageCfg);

    if ($_.isEmpty(pageCfg)) return null;
    if (pageCfg.auth && $_.isEmpty(userInfo)) {
        dispatch(jumpLoginPage());
        return null;
    }

    return (
        <div className="layout-m-content" style={{ height: 'calc(100% - 64px)' }}>
            {children}
            {
                pageCfg.footerStatusD === 1 && <Footer />
            }
        </div>
    )
}

export default MobileContent