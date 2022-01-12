import React, { useEffect, useState } from 'react'
import SessionCard from './SessionCard';
import './styles/Session.css'
import Heading from './Heading';
import leftArr from './assets/left_arr.svg';
import rightArr from './assets/right_arr.svg';
import sessionData from '../data/sessions.json';
const scroll = (dir)=>{
    let sg = document.getElementById('sessions-grid');
    sg.scrollLeft+=dir*window.innerWidth*0.8;
}
function Sessions() {
    const [sessions, setSessions] = useState([]);
    const [pastSessions, setPastSessions] = useState([]);
    useEffect(async () => {
        // const res = await fetch('https://openforce2022.herokuapp.com/api/session/',{
        //     method: 'GET',
        //     headers:{
        //         'Content-Type':'application/json'
        //     }
        // })
        // const data = await res.json();
        const data = sessionData;
        const s = [],ps = [];
        for(var i of data){
            if(new Date(i.time)<new Date()) ps.push(i);
            else s.push(i);
        }
        s.sort((a,b)=>new Date(a.time) - new Date(b.time));
        ps.sort((a,b)=>new Date(b.time) - new Date(a.time));
        setSessions(s);
        setPastSessions(ps);
    }, [])
    return (
    <div id="sessionsLink" className='component-container'>
        <Heading name="Schedule Event Now!"/>
        <div id="Sessions">
            <div id="sessions-grid">
                {sessions.map((session=>{
                    return <SessionCard key={session._id} session={session}/>
                }))}
                {pastSessions.map((session=>{
                    return <SessionCard key={session._id} session={session}/>
                }))}
            </div>
            <div className="session-arrows" id="ses-prev" onClick={()=>{scroll(-1)}}>
                <img src={leftArr} alt="" />
            </div>
            <div className="session-arrows" id="ses-next" onClick={()=>{scroll(+1)}}>
                <img src={rightArr} alt="" />    
            </div>
        </div>
        </div>
    )
}

export default Sessions
