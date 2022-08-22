/*
 + ------------------------------------------------------------------
 | 导航
 + ------------------------------------------------------------------ 
 */
import React, {useState} from "react";
import "./Footer.less";
import logoImg from '@/assets/header_logo.png'
import { useNavigate } from "react-router-dom";

const InSvg = (props) => {
    return (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className={props.className} onClick={props.onClick}>
            <g clip-path="url(#clip0_540_21666)">
                <path d="M11.9999 0C9.62491 0 7.30324 0.704269 5.3285 2.02375C3.35376 3.34323 1.81464 5.21865 0.905768 7.41287C-0.00310485 9.60708 -0.240898 12.0215 0.222441 14.3509C0.685781 16.6803 1.82944 18.8199 3.50882 20.4993C5.1882 22.1787 7.32787 23.3223 9.65723 23.7857C11.9866 24.249 14.401 24.0112 16.5953 23.1023C18.7895 22.1935 20.6649 20.6543 21.9844 18.6796C23.3038 16.7049 24.0081 14.3832 24.0081 12.0082C24.0081 8.82343 22.743 5.7691 20.491 3.51712C18.239 1.26515 15.1847 0 11.9999 0ZM9.2913 17.2367H6.96846V9.76744H9.2913V17.2367ZM8.13398 8.74965C7.86774 8.74965 7.60749 8.67071 7.38612 8.5228C7.16476 8.37488 6.99222 8.16465 6.89034 7.91869C6.78845 7.67272 6.7618 7.40206 6.81374 7.14094C6.86568 6.87983 6.9939 6.63997 7.18215 6.45172C7.37041 6.26346 7.61025 6.13526 7.87137 6.08332C8.13248 6.03138 8.40313 6.05804 8.6491 6.15992C8.89507 6.2618 9.10531 6.43434 9.25322 6.6557C9.40114 6.87707 9.48009 7.13732 9.48009 7.40355C9.48118 7.58063 9.44711 7.75617 9.37984 7.91998C9.31258 8.08378 9.21347 8.23261 9.08825 8.35783C8.96304 8.48304 8.81421 8.58215 8.6504 8.64941C8.4866 8.71667 8.31105 8.75074 8.13398 8.74965ZM17.9835 17.2367H15.6607V13.6088C15.6607 12.7387 15.6607 11.6224 14.4541 11.6224C13.2475 11.6224 13.0587 12.5663 13.0587 13.5431V17.2367H10.7441V9.76744H12.9849V10.7934C13.2097 10.4136 13.5325 10.1013 13.9195 9.88899C14.3065 9.67672 14.7434 9.57237 15.1846 9.58687C17.5321 9.58687 17.9671 11.13 17.9671 13.1409L17.9835 17.2367Z" fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0_540_21666">
                    <rect width="36" height="36" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
}

const BottomSvg = (props) => {
    return (
        <svg width={props.width || '30'} height={props.width || '30'} viewBox="0 0 30 30" fill="none" className={props.className} onClick={props.onClick}>
            <path d="M8 12L14 18L20 12" stroke={props.color || '#fff'} strokeLinecap="square"/>
        </svg>
    )
}

export default function MFooter() {
    const history = useNavigate();
    const [openIndex, setOpenIndex] = useState(0);

    const handleChangeLang = (opts) => {
        let _lang = opts.value;
        if ($_.isArray(_lang)) _lang = _lang[0];
        setSession('lang', _lang)
        window.location.reload();
    }

    const goPathAbout = (flag) => {
        switch (flag) {
            case 1:
                pathStageFunc(flag, 'page-about-missionBox-center-milestones', '/about');
                return;
            case 2:
                pathStageFunc(flag, 'page-about-globalBox-center', '/about');
                return;
        }
    }

    const goPathTechnology = (flag) => {
        switch (flag) {
            case 1:
                pathStageFunc(flag, 'page-technology-mindset', '/technology');
                return;
        }
    }

    const goPathJoin = (flag) => {
        switch (flag) {
            case 1:
                pathStageFunc(flag, 0, '/join');
                return;
            case 2:
                pathStageFunc(flag, 'page-join-culture', '/join');
                return;
            case 3:
                pathStageFunc(flag, 'page-join-contact-center-contactBox', '/join');
                return;
        }
    }

    const pathStageFunc = (index, top, path) => {
        if (window.location.href.indexOf(path) !== -1) {
            document.getElementsByClassName('layout-m-content')[0].scrollTop = (top === 0 ? 0 : document.getElementsByClassName(top)[0].offsetTop);
        } else {
            history(path, { state: { stage: index } })
        }
    }

    const openCollapse = (index) => {
        setOpenIndex((state) => {
            return state === index ? 0 : index;
        });
    }

    return (
        <footer className="layout-m-footer">
            <div className="logoBox">
                <img src={logoImg} alt="logo"/>
                <span className="changeLanguage-menu">
                    English
                    <BottomSvg className="changeLanguage-menu-svg" color='#fff' width="17"/>
                </span>
            </div>
            <p className="footerTitle1">Follow us</p>
            <div className="contactSvgBox">
                <InSvg onClick={() => { window.open('https://www.linkedin.com/company/ola-chat', '_blank') }} className="contactSvg"/>
            </div>
            <div className="collapseBox">
                <div className="collapseList">
                    <p onClick={() => openCollapse(1)}>
                        <span>About Us</span>
                        <BottomSvg className={`collapseList-svg ${openIndex === 1 ? 'rotateSvg' : ''}`} color='#fff' />
                    </p>
                    <div className={`${openIndex === 1 ? 'changeHeight2' : ''}`}>
                        <p onClick={() => goPathAbout(1)}>Milstones</p>
                        <p onClick={() => goPathAbout(2)}>We are Global</p>
                    </div>
                </div>
                <div className="collapseList">
                    <p onClick={() => openCollapse(2)}>
                        <span>Technology</span>
                        <BottomSvg className={`collapseList-svg ${openIndex === 2 ? 'rotateSvg' : ''}`} color='#fff' />
                    </p>
                    <div className={`${openIndex === 2 ? 'changeHeight1' : ''}`}>
                        <p onClick={() => goPathTechnology(1)}>Global Mindset</p>
                    </div>
                </div>
                <div className="collapseList">
                    <p onClick={() => openCollapse(3)}>
                        <span>Trust and Safety</span>
                        <BottomSvg className={`collapseList-svg ${openIndex === 3 ? 'rotateSvg' : ''}`} color='#fff' />
                    </p>
                    <div className={`${openIndex === 3 ? 'changeHeight2' : ''}`}>
                        <p onClick={() => history('/agreement')}>User Agreement</p>
                        <p onClick={() => history('/privacy')}>Privacy Policy</p>
                    </div>
                </div>
                <div className="collapseList">
                    <p onClick={() => openCollapse(4)}>
                        <span>Join Us</span>
                        <BottomSvg className={`collapseList-svg ${openIndex === 4 ? 'rotateSvg' : ''}`} color='#fff' />
                    </p>
                    <div className={`${openIndex === 4 ? 'changeHeight3' : ''}`}>
                        <p onClick={() => goPathJoin(1)}>Careers</p>
                        <p onClick={() => goPathJoin(2)}>Culture & Values</p>
                        <p onClick={() => goPathJoin(3)}>Contact</p>
                    </div>
                </div>
            </div>
            <p className="companyDes">© 2022 Ola Chat Pte Ltd. All rights reserved.</p>
        </footer>
    );
}
