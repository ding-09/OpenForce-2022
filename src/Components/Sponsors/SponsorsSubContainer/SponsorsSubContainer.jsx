import React from 'react';
import './SponsorsSubContainer.css';
import SponsorsCard from './SponsorsCard/SponsorsCard';

function SponsorsSubContainer(props){
    return (
        <div className="sponsors-sub-container">
            <h2 className="sponsors-sub-heading">## {props.subheading}</h2>
            <SponsorsCard link=""/>
        </div>
    );
}

export default SponsorsSubContainer;