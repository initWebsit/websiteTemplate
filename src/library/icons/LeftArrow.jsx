import React from "react"

export default props => {
    let color = props.color || '#fff'

    return (
        <svg width="11px" height="19px" viewBox="0 0 11 19" onClick={props.onClick}>
            <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                <g id="left_arrow" transform="translate(1.000000, 1.000000)" stroke={color} stroke-width="2">
                    <polyline id="路径" points="8.88888889 17 0 8.53775914 8.88888889 0"></polyline>
                </g>
            </g>
        </svg>
    )
}
