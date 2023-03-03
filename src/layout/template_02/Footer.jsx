/*
 + ------------------------------------------------------------------
 | 导航
 + ------------------------------------------------------------------
 */
import React, {useCallback, useState} from "react";
import "./Footer.less";
import common_ig from "@/assets/common_ig.png";
import common_fb from "@/assets/common_fb.png";
import { useNavigate } from "react-router-dom";

export default function MFooter() {
    const history = useNavigate();
    const [openIndex, setOpenIndex] = useState(0);

    const handleChangeLang = (opts) => {
        let _lang = opts.value;
        if ($_.isArray(_lang)) _lang = _lang[0];
        setSession('lang', _lang)
        window.location.reload();
    }

    const goToLink = useCallback((url) => {
        window.open(url, '_blank');
    }, []);

    return (
        <footer className="layout-m-footer">
            <srction className="layout-m-footer-box">
                <div>
                    <p>
                        <span onClick={() => goToLink('https://api.partying.sg/help/agreement2?package=com.imbb.oversea.android&lan=en')}>User Agreement</span>
                        <span></span>
                        <span onClick={() => goToLink('https://api.partying.sg/help/agreement3?package=com.imbb.oversea.android&lan=en')}>Privacy Policy</span>
                    </p>
                    <p>Copyright 2023 Partying App. All rights reserved.</p>
                </div>
                <div>
                    <img onClick={() => goToLink('https://www.instagram.com/yargula133/')} src={common_ig} className="marginRight12"/>
                    <img onClick={() => goToLink('https://www.facebook.com/profile.php?id=100082467166889')} src={common_fb}/>
                </div>
            </srction>
        </footer>
    );
}
