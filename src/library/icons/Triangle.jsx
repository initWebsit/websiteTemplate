import React from "react"


export default props => {
    let color = props.color || 'white';
    return (
        <svg width="6px" height="6px" viewBox="0 0 6 6" className={props.className}>
            <path d="M3.39326 4.9853C3.19311 5.24531 2.80101 5.24533 2.60085 4.98533L0.152471 1.80501C-0.100642 1.47622 0.133738 0.999997 0.548665 0.999997L5.44509 0.999997C5.86 0.999997 6.09439 1.47619 5.8413 1.80498L3.39326 4.9853Z" fill={color} />
        </svg>
    )
}