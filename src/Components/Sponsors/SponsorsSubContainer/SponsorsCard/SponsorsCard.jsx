import React from 'react';
import './SponsorsCard.css';

function SponsorsCard(props){
    return (
        <div className='sponsors-card-cont'>
            <a href={props.link.website} className="sponsors-card" target="_blank">
            <img className="sponsors-img" src={props.link.logo} alt=""/>
            <div className='sponsor-name'>{props.link.name}</div>
        </a>
        </div>
    );
}

export default SponsorsCard;