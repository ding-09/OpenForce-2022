import React from 'react';
import './SponsorsContainer.css';
import SponsorsSubContainer from './SponsorsSubContainer/SponsorsSubContainer';

function SponsorsContainer(){
    return (
        <div className="sponsors-container">
            <h1 className="sponsors-heading"># Sponsors and Partners</h1>
            <SponsorsSubContainer subheading="Test"/>
        </div>
    );
}

export default SponsorsContainer;