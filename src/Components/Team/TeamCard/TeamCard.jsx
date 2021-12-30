import React from 'react';
import './TeamCard.css';

function TeamCard(props){
    return (
        <div className="team-card">
            <img src={props.imageLink} alt="" className="team-img" />
            <h3 className="team-text">{props.name}</h3>
            <h4 className="team-text">{props.subteam}</h4>
            <span><a href={props.linkedin}><i className="fab fa-linkedin"></i></a> <a href={props.github}><i className="fab fa-github"></i></a></span>
        </div>
    );
}

export default TeamCard;