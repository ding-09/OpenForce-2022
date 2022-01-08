import React from 'react'
import './styles/Heading.css'
function Heading(props) {
    return (
        <div className="Heading">
            <hr />
            <div className="heading-name" id={props.id}>{props.name}</div>
        </div>
    )
}

export default Heading
