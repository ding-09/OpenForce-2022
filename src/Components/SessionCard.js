import React from 'react'
import './styles/SessionCard.css';

const bookSession = async (id) =>{
    // todo: check if user is signed in and get `userId`
    let userId = null; // this userId will currently be giving error because it can't be found be the db
    const res = await fetch('http://localhost:5000/api/session/book',{
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: {
            sessionId:id,
            userId:userId,
        }
    })
    const data = await res.json();
    console.log(data);
}
function SessionCard(props) {
    return (
        <div className="SessionCard">
            <div className="session-image">
                <img src={props.image} alt={props.name}/>
            </div>
            <div className="session-about">
                <div className="session-about-name">
                    {props.name}
                </div>
                <div className="session-about-position">
                    {props.position}
                </div>
                <div className="session-about-description">
                    {props.description}
                </div>
            </div>
            <div className="session-book">
                <div className="session-book-btn" onClick={()=>bookSession(props.id)}>Book Your Seat</div>
            </div>
        </div>
    )
}

export default SessionCard
