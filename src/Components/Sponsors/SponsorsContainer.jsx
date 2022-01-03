import React from 'react';
import './SponsorsContainer.css';
import SponsorsSubContainer from './SponsorsSubContainer/SponsorsSubContainer';

function SponsorsContainer(){
    const sponsorTypes = [["Diamond Sponsors 💎",["","",""]],["Platinum Sponsors 🏆",["","",""]],["Gold Sponsors 🥇",["","",""]],["Silver Sponsors 🥈",["","",""]],["Bronze Sponsors 🥉",["","",""]],["Community Partners 🤝",["","",""]]]
    
    return (
        <div className="sponsors-container" id="sponserLink">
            <div className="heading">Sponsors and Partners</div>
            {sponsorTypes.map((sponsorType)=>{
                return <SponsorsSubContainer subheading={sponsorType[0]} links={sponsorType[1]}/>
            })}
        </div>
    );
}

export default SponsorsContainer;