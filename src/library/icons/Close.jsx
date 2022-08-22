import React from "react"

export default props => {
    let color = props.color || '#313131';

    return (
        <svg className={props.className} width="20px" height="20px" viewBox="0 0 20 20" fill="none"  onClick={props.onClick}>
            <path d="M18.2357 1.60295L1.26517 18.5735" stroke={color} stroke-width="2" />
            <path d="M18.4852 18.3239L1.51461 1.35331" stroke={color} stroke-width="2" />
        </svg>
    )
}