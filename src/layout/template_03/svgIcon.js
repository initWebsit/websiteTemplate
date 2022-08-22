import React from "react"



export const RechargeBgSvg = props => {
    let w = props.width || 375;
    let h = w / 375 * 303

    return (
        <svg width={w + 'px'} height={h + "px"} viewBox={`0 0 ${w} ${h}`} >
            <defs>
                <linearGradient x1="0%" y1="82.6432%" x2="100%" y2="17.3568%" id="bc06ecd00579f5d9">
                    <stop stop-color="#6744FF" offset="0.0163898601%"></stop>
                    <stop stop-color="#9548FF" offset="48.9155376%"></stop>
                    <stop stop-color="#E08BFF" offset="100%"></stop>
                </linearGradient>
                <rect id="0ab7d055cf4aff7b" x="0" y="0" width={w} height={h}></rect>
            </defs>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g>
                    <mask fill="white">
                        <use xlinkHref="#0ab7d055cf4aff7b"></use>
                    </mask>
                    <use fill="url(#bc06ecd00579f5d9)" fillRule="nonzero" xlinkHref="#0ab7d055cf4aff7b"></use>
                </g>
            </g>
        </svg>
    )
}


export const IncomeBgSvg = props => {
    let width = props.width || 375;
    let height = width / 375 * 171;

    return (
        <svg width={width + 'px'} height={height + "px"} viewBox="0 0 375 171" >
            <defs>
                <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="44c41bac420646c2">
                    <stop stop-color="#FF69C4" offset="0.0874125874%"></stop>
                    <stop stop-color="#FF5C5C" offset="47.2574301%"></stop>
                    <stop stop-color="#FFC645" offset="100%"></stop>
                </linearGradient>
                <path d="M0,0 L375,0 L375,130.549065 C312.5,157.173712 250,170.486036 187.5,170.486036 C125,170.486036 62.5,157.173712 0,130.549065 L0,0 Z" id="12fa2bcd43f8fc8a"></path>
                <filter x="-0.9%" y="-2.1%" width="101.9%" height="104.1%" filterUnits="objectBoundingBox" id="e7cb1fe9a6f4a22b">
                    <feGaussianBlur stdDeviation="2.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                    <feOffset dx="0" dy="2" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                    <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                    <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.198563156 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
                </filter>
                <linearGradient x1="47.7351195%" y1="50%" x2="50%" y2="99.8425497%" id="330a41d7e450f398">
                    <stop stop-color="#FFFFFF" stop-opacity="0" offset="0%"></stop>
                    <stop stop-color="#FFFFFF" offset="100%"></stop>
                </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-0.000000, 0.000000)">
                    <mask id="627620045ea5c8c3" fill="white">
                        <use xlinkHref="#12fa2bcd43f8fc8a"></use>
                    </mask>
                    <g fill-rule="nonzero">
                        <use fill="url(#44c41bac420646c2)" xlinkHref="#12fa2bcd43f8fc8a"></use>
                        <use fill="black" fill-opacity="1" filter="url(#e7cb1fe9a6f4a22b)" xlinkHref="#12fa2bcd43f8fc8a"></use>
                    </g>
                    <ellipse fill="url(#330a41d7e450f398)" opacity="0.300000012" mask="url(#627620045ea5c8c3)" cx="370" cy="21.8838296" rx="136" ry="135.785699"></ellipse>
                </g>
            </g>
        </svg>
    )
}