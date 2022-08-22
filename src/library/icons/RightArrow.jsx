import React from 'react';


export default props => {
    let width = props.width || 11;

    return (
        <svg width={width + 'px'} height={19/11*width + 'px'} viewBox="0 0 11 19">
            <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                <g id="left_arrow" transform="translate(1.000000, 1.000000)" stroke={props.color || "#313131"} stroke-width="2">
                    <polyline id="路径" transform="translate(4.444444, 8.500000) scale(-1, 1) translate(-4.444444, -8.500000) " points="8.88888889 17 0 8.53775914 8.88888889 0"></polyline>
                </g>
            </g>
        </svg>
    )
}
