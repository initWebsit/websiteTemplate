import React from "react"


export default props => {
    let color = props.color || '#313131';

    return (
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none"  onClick={props.onClick}>
            <g opacity="0.7">
                <rect y="15.1577" width="23.6842" height="2.84211" rx="1.42105" fill={color}/>
                <rect y="7.5791" width="23.6842" height="2.84211" rx="1.42105" fill={color}/>
                <rect width="23.6842" height="2.84211" rx="1.42105" fill={color}/>
            </g>
        </svg>
    )
};