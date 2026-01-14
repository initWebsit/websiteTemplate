/*
 + ------------------------------------------------------------------
 | 导航
 + ------------------------------------------------------------------ 
 */
import React from "react";
import logoImg from '@/assets/header_logo.png'
// import { Popover } from '@/library/ui';
import { TriangleSvg } from '@/library/icons';
// import { langDict } from '@/commons/I18N';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Footer.less";

const FacebookSvg = (props) => {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={props.className} onClick={props.onClick}>
			<g clip-path="url(#clip0_540_21664)">
				<path d="M12 9.41181e-05C8.97169 -0.011928 6.05083 1.12817 3.82327 3.19172C1.59571 5.25527 0.226189 8.08966 -0.0106015 11.1264C-0.247392 14.1631 0.666059 17.1776 2.54654 19.5653C4.42702 21.9529 7.13545 23.5371 10.1286 24.0001V15.5625H7.07525V12.0785H10.1286V9.41186C10.1286 6.39019 11.918 4.72249 14.6594 4.72249C15.5584 4.73474 16.4554 4.81199 17.3434 4.95365V7.92579H15.8331C15.5753 7.89154 15.313 7.91588 15.0658 7.997C14.8185 8.07813 14.5925 8.21398 14.4043 8.39457C14.2161 8.57516 14.0705 8.79588 13.9783 9.04051C13.8861 9.28514 13.8496 9.54745 13.8714 9.80814V12.0785H17.2039L16.6703 15.5625H13.8714V24.0001C16.8646 23.5371 19.573 21.9529 21.4535 19.5653C23.334 17.1776 24.2474 14.1631 24.0107 11.1264C23.7739 8.08966 22.4043 5.25527 20.1768 3.19172C17.9492 1.12817 15.0283 -0.011928 12 9.41181e-05Z" fill="white"/>
			</g>
			<defs>
				<clipPath id="clip0_540_21664">
					<rect width="24" height="24" fill="white"/>
				</clipPath>
			</defs>
		</svg>
	)
}

const InSvg = (props) => {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={props.className} onClick={props.onClick}>
			<g clip-path="url(#clip0_540_21666)">
				<path d="M11.9999 0C9.62491 0 7.30324 0.704269 5.3285 2.02375C3.35376 3.34323 1.81464 5.21865 0.905768 7.41287C-0.00310485 9.60708 -0.240898 12.0215 0.222441 14.3509C0.685781 16.6803 1.82944 18.8199 3.50882 20.4993C5.1882 22.1787 7.32787 23.3223 9.65723 23.7857C11.9866 24.249 14.401 24.0112 16.5953 23.1023C18.7895 22.1935 20.6649 20.6543 21.9844 18.6796C23.3038 16.7049 24.0081 14.3832 24.0081 12.0082C24.0081 8.82343 22.743 5.7691 20.491 3.51712C18.239 1.26515 15.1847 0 11.9999 0ZM9.2913 17.2367H6.96846V9.76744H9.2913V17.2367ZM8.13398 8.74965C7.86774 8.74965 7.60749 8.67071 7.38612 8.5228C7.16476 8.37488 6.99222 8.16465 6.89034 7.91869C6.78845 7.67272 6.7618 7.40206 6.81374 7.14094C6.86568 6.87983 6.9939 6.63997 7.18215 6.45172C7.37041 6.26346 7.61025 6.13526 7.87137 6.08332C8.13248 6.03138 8.40313 6.05804 8.6491 6.15992C8.89507 6.2618 9.10531 6.43434 9.25322 6.6557C9.40114 6.87707 9.48009 7.13732 9.48009 7.40355C9.48118 7.58063 9.44711 7.75617 9.37984 7.91998C9.31258 8.08378 9.21347 8.23261 9.08825 8.35783C8.96304 8.48304 8.81421 8.58215 8.6504 8.64941C8.4866 8.71667 8.31105 8.75074 8.13398 8.74965ZM17.9835 17.2367H15.6607V13.6088C15.6607 12.7387 15.6607 11.6224 14.4541 11.6224C13.2475 11.6224 13.0587 12.5663 13.0587 13.5431V17.2367H10.7441V9.76744H12.9849V10.7934C13.2097 10.4136 13.5325 10.1013 13.9195 9.88899C14.3065 9.67672 14.7434 9.57237 15.1846 9.58687C17.5321 9.58687 17.9671 11.13 17.9671 13.1409L17.9835 17.2367Z" fill="white"/>
			</g>
			<defs>
				<clipPath id="clip0_540_21666">
					<rect width="24" height="24" fill="white"/>
				</clipPath>
			</defs>
		</svg>
	)
}

const PhotoSvg = (props) => {
	return (
		<svg width="25" height="25" viewBox="0 0 25 25" fill="none" className={props.className} onClick={props.onClick}>
			<g clip-path="url(#clip0_540_21669)">
				<path d="M15.8072 6.2793H10.1848C9.41631 6.2793 8.67934 6.58456 8.13598 7.12793C7.59261 7.67129 7.28735 8.40826 7.28735 9.1767V14.7991C7.28735 15.5676 7.59261 16.3045 8.13598 16.8479C8.67934 17.3913 9.41631 17.6965 10.1848 17.6965H15.8072C16.5735 17.6922 17.3071 17.3853 17.8483 16.8426C18.3894 16.3 18.6942 15.5655 18.6964 14.7991V9.1767C18.6942 8.41034 18.3894 7.67586 17.8483 7.1332C17.3071 6.59053 16.5735 6.28362 15.8072 6.2793ZM13.0575 15.4558C12.3701 15.4574 11.6977 15.2549 11.1255 14.8741C10.5533 14.4932 10.107 13.951 9.84324 13.3163C9.57944 12.6815 9.50997 11.9827 9.64368 11.3085C9.77738 10.6342 10.1082 10.0148 10.5943 9.52877C11.0803 9.04272 11.6997 8.71188 12.374 8.57818C13.0483 8.44447 13.747 8.51392 14.3818 8.77772C15.0165 9.04152 15.5587 9.4878 15.9396 10.06C16.3205 10.6322 16.5229 11.3046 16.5213 11.992C16.5191 12.91 16.1535 13.7898 15.5044 14.4389C14.8553 15.088 13.9755 15.4536 13.0575 15.4558ZM16.7265 9.11103C16.5641 9.11103 16.4054 9.06289 16.2705 8.9727C16.1355 8.88251 16.0303 8.75432 15.9682 8.60434C15.906 8.45436 15.8898 8.28933 15.9214 8.13011C15.9531 7.97089 16.0313 7.82464 16.1461 7.70985C16.2609 7.59506 16.4071 7.51689 16.5663 7.48522C16.7256 7.45355 16.8906 7.4698 17.0406 7.53192C17.1906 7.59405 17.3187 7.69925 17.4089 7.83423C17.4991 7.96921 17.5473 8.1279 17.5473 8.29024C17.5473 8.50793 17.4608 8.7167 17.3069 8.87063C17.1529 9.02456 16.9442 9.11103 16.7265 9.11103Z" fill="white"/>
				<path d="M13.0575 9.76759C12.6172 9.76597 12.1864 9.89504 11.8195 10.1385C11.4526 10.3819 11.1663 10.7287 10.9966 11.135C10.827 11.5413 10.7818 11.9888 10.8667 12.4208C10.9516 12.8529 11.1628 13.25 11.4735 13.5619C11.7843 13.8738 12.1806 14.0864 12.6123 14.1729C13.044 14.2594 13.4917 14.2159 13.8986 14.0477C14.3056 13.8796 14.6534 13.5945 14.8982 13.2286C15.143 12.8626 15.2736 12.4322 15.2736 11.9919C15.2737 11.4034 15.0404 10.8389 14.6251 10.422C14.2097 10.0051 13.646 9.76976 13.0575 9.76759Z" fill="white"/>
				<path d="M13.0164 2.80646e-06C10.6411 -0.00162081 8.31861 0.70127 6.34279 2.01976C4.36697 3.33825 2.82658 5.21311 1.91644 7.40718C1.00631 9.60125 0.767324 12.016 1.22974 14.3459C1.69215 16.6758 2.83516 18.8162 4.51421 20.4964C6.19326 22.1766 8.33291 23.3211 10.6625 23.7851C12.9921 24.2491 15.407 24.0118 17.6016 23.1031C19.7963 22.1945 21.6723 20.6554 22.9921 18.6805C24.312 16.7055 25.0164 14.3836 25.0164 12.0082C25.0175 10.4317 24.7079 8.87034 24.1053 7.41349C23.5027 5.95663 22.619 4.63279 21.5046 3.51762C20.3902 2.40245 19.067 1.5178 17.6105 0.914234C16.1541 0.310664 14.593 2.43766e-06 13.0164 2.80646e-06ZM20.0506 14.7743C20.0485 15.8947 19.6024 16.9686 18.8101 17.7609C18.0179 18.5532 16.944 18.9992 15.8235 19.0014H10.2011C9.08068 18.9992 8.00677 18.5532 7.2145 17.7609C6.42224 16.9686 5.97619 15.8947 5.97402 14.7743V9.17647C5.97619 8.05605 6.42224 6.98213 7.2145 6.18987C8.00677 5.39761 9.08068 4.95156 10.2011 4.94939H15.8235C16.944 4.95156 18.0179 5.39761 18.8101 6.18987C19.6024 6.98213 20.0485 8.05605 20.0506 9.17647V14.7743Z" fill="white"/>
			</g>
			<defs>
				<clipPath id="clip0_540_21669">
					<rect width="25" height="25" fill="white"/>
				</clipPath>
			</defs>
		</svg>
	)
}

function DFooter() {
	const history = useNavigate();
	const lang = useSelector(state => state.app.lang);
	const pageCfg = useSelector(state => state.app.pageCfg);
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
			document.getElementsByClassName('layout-d-content')[0].scrollTop = (top === 0 ? 0 : document.getElementsByClassName(top)[0].offsetTop - 80);
		} else {
			history(path, { state: { stage: index } })
		}
	}

    return (
        <footer className="layout-d-footer">
			<section className="footerBox">
				<div>
					<img src={logoImg}/>
					<p>Follow us</p>
					<div className="contactSvgBox">
						{/*<FacebookSvg onClick={() => { window.open('https://www.facebook.com/olaolachat', '_blank') }} className="contactSvg"/>*/}
						<InSvg onClick={() => { window.open('https://www.linkedin.com/company/ola-chat', '_blank') }} className="contactSvg"/>
						{/*<PhotoSvg onClick={() => { window.open('https://www.instagram.com/olaolachat/', '_blank') }} className="contactSvg"/>*/}
					</div>
					<div className="changeLanguage">
						{
							// <Popover.Menu actions={langDict} onSelect={handleChangeLang} placement={'top'}>
							// 	<span className="changeLanguage-menu">
							// 		{$_.get($_.find(langDict, (o) => $_.includes($_.concat([], o.value), props.lang)), 'text')}
							// 		<TriangleSvg className="changeLanguage-menu-svg" color='#fff' />
							// 	</span>
							// </Popover.Menu>
						}
						<span className="changeLanguage-menu">
							English
							<TriangleSvg className="changeLanguage-menu-svg" color='#fff' />
						</span>
					</div>
				</div>
				<div>
					<div className="topBox">
						<div className="linkBox">
							<a>About Us</a>
							<a onClick={() => goPathAbout(1)}>Milstones</a>
							<a onClick={() => goPathAbout(2)}>We are Global</a>
						</div>
						<div className="linkBox">
							<a>Technology</a>
							<a onClick={() => goPathTechnology(1)}>Global Mindset</a>
						</div>
						<div className="linkBox">
							<a>Trust and Safety</a>
							<a onClick={() => history('/agreement')}>User Agreement</a>
							<a onClick={() => history('/privacy')}>Privacy Policy</a>
						</div>
						<div className="linkBox">
							<a>Join Us</a>
							<a onClick={() => goPathJoin(1)}>Careers</a>
							<a onClick={() => goPathJoin(2)}>Culture & Values</a>
							<a onClick={() => goPathJoin(3)}>Contact</a>
						</div>
					</div>
					<p className="companyDes">© 2022 Ola Chat Pte Ltd. All rights reserved.</p>
				</div>
			</section>
		</footer>
    );
}

export default DFooter