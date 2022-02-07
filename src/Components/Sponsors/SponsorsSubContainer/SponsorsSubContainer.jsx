import React from 'react';
import './SponsorsSubContainer.css';
import SponsorsCard from './SponsorsCard/SponsorsCard';

function SponsorsSubContainer(props){
    return (
        <div className="sponsors-sub-container" style={{marginTop:"50px"}}>
            <h3 className="sponsors-sub-heading"><span className='purplespon'>#</span> {props.subheading}</h3>
            <div className="sponsors-sub-container-flexbox">
                {props.links.map((link,index)=>{
                    return <SponsorsCard key={index} link={link}/>
                })}
            </div>
        </div>
    );
}

export default SponsorsSubContainer;