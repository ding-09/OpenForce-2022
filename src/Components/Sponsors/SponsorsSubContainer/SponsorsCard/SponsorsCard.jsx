import React from 'react';
import './SponsorsCard.css';

function SponsorsCard(props){
    return (
        <img class="sponsors-img" src={props.link} alt=""/>
    );
}

export default SponsorsCard;