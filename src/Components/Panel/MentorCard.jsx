import React from 'react'
import "../styles/Panel.css"

export default function MentorCard(props) {
    return (
        <div className='mentorCard'>
            <div className='detail'>
            <img src={props.data.photo} alt={props.data.name} className="mentorPhoto"/>
            <div className='mentorDetail'>
                <div className='mentorName'>{props.data.name}</div>
                <div className='mentorSkill'>Skill : {props.data.skills}</div>
                <div className='mentorEmail'>{props.data.email}</div>
            </div>
            
            </div>
            <a href={props.data.linked} target="_blank" className='linkedIn'>View On LinkedIn</a>
        </div>
    )
}
