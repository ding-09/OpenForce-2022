import React from 'react'

export default function ScrollTop() {
    const scrollZero = ()=>{
        document.getElementById("root").scrollTop = 0;
    }


    return (
        <div className='scrollTop' onClick={scrollZero}>
            <div className='scrollMe'><i className="fas fa-chevron-up"></i></div>
        </div>
    )
}
