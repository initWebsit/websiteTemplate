import React from "react"


export default function Facebook (props) {
    return (
        <svg width="48px" height="48px" viewBox="0 0 48 48" onClick={props.onClick} className={props.className}>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(1.000000, 1.000000)">
                    <circle stroke-opacity="0.1" stroke="#313131" cx="23" cy="23" r="23"></circle>
                    <path d="M20.0946596,33.7657617 L20.0638298,23.9785277 L16.1489362,23.9785277 L16.1489362,20.063634 L20.0638298,20.063634 L20.0638298,17.6168255 C20.0638298,13.9843915 22.3132298,12.2338468 25.5535872,12.2338468 C27.1058426,12.2338468 28.4398426,12.3493362 28.8285915,12.4010128 L28.8285915,16.1970894 L26.5812468,16.198166 C24.8188596,16.198166 24.4776766,17.0355617 24.4776766,18.2644468 L24.4776766,20.063634 L29.606383,20.063634 L27.6489362,23.9785277 L24.4776766,23.9785277 L24.4776766,33.7657617 L20.0946596,33.7657617 Z" fill="#227AEE" fill-rule="nonzero"></path>
                </g>
            </g>
        </svg>
    )
}
