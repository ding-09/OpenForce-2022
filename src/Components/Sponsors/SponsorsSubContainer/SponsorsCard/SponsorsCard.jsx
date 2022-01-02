import React from 'react';
import './SponsorsCard.css';

function SponsorsCard(props){
    return (
        <div className="sponsors-card">
            <img class="sponsors-img" src={props.link} alt=""/>
        </div>
    );
}

export default SponsorsCard;