import React from 'react'
import "./styles/error.css"
import sad from "./Image/emoji.png"

export default function Error() {
    return (
        <div className='errorCont'>
            <div className='error'><img src={sad}/></div>
            <div className='errorType'>
                <span style={{color:"#F48B0C"}}>Error 404</span>, Page not found
            </div>
        </div>
    )
}
