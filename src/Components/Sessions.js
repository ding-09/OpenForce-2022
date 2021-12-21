import React, { useEffect, useState } from 'react'
import SessionCard from './SessionCard';
import './styles/Session.css'
import i1 from './assets/1.jpg'
import i2 from './assets/2.jpg'
import i3 from './assets/3.jpg'
import i4 from './assets/4.jpg'
import i5 from './assets/5.jpg'

function Sessions() {
    const [sessions, setSessions] = useState([]);
    useEffect(async () => {
        const res = await fetch('http://localhost:5000/api/session/',{
            method: 'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data = await res.json();
        setSessions(data.sessions);
        console.log(sessions,data);
    }, [])
    return (
        <div id="Sessions">
            <div className="heading">
                Schedule Event Now!
            </div>
            <div id="sessions-grid">
                {sessions.map((session=>{
                    return <SessionCard/>
                }))}
                
                {/* dummy data below */}
                <SessionCard image={i5} name={"Jamies Ford"} position={"Trainer"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."} id={"iiid"}/>
                <SessionCard image={i4} name={"Jamies Ford"} position={"Trainer"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."} id={"iiid"}/>
                <SessionCard image={i3} name={"Jamies Ford"} position={"Trainer"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."} id={"iiid"}/>
                <SessionCard image={i2} name={"Jamies Ford"} position={"Trainer"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."} id={"iiid"}/>
                <SessionCard image={i1} name={"Jamies Ford"} position={"Trainer"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."} id={"iiid"}/>
                <SessionCard image={i5} name={"Jamies Ford"} position={"Trainer"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."} id={"iiid"}/>
                <SessionCard image={i4} name={"Jamies Ford"} position={"Trainer"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."} id={"iiid"}/>
                <SessionCard image={i3} name={"Jamies Ford"} position={"Trainer"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."} id={"iiid"}/>
                <SessionCard image={i2} name={"Jamies Ford"} position={"Trainer"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."} id={"iiid"}/>
                <SessionCard image={i1} name={"Jamies Ford"} position={"Trainer"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."} id={"iiid"}/>
            </div>
        </div>
    )
}

export default Sessions
