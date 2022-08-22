import React from 'react';


export default function Hot(props) {

    return (
        <svg width="32px" height="16px" viewBox="0 0 32 16" className={props.className}>
            <defs>
                <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="linearGradient-c1wohz1yv5-1">
                    <stop stop-color="#FF6A63" offset="0%"></stop>
                    <stop stop-color="#FF8850" offset="100%"></stop>
                </linearGradient>
            </defs>
            <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="hot" fill-rule="nonzero">
                    <path d="M5.33333333,0 L26.6666667,0 C29.6121853,0 32,2.38781467 32,5.33333333 L32,10 C32,12.9455187 29.6121853,15.3333333 26.6666667,15.3333333 L1.33333333,15.3333333 C0.596953667,15.3333333 0,14.7363797 0,14 L0,5.33333333 C0,2.38781467 2.38781467,0 5.33333333,0 Z" id="圆角矩形_3" fill="url(#linearGradient-c1wohz1yv5-1)"></path>
                    <text id="HOT" fill="#FFFFFF" font-family="Helvetica" font-size="12" font-weight="normal">
                        <tspan x="3" y="12">HOT</tspan>
                    </text>
                </g>
            </g>
        </svg>
    )
}
