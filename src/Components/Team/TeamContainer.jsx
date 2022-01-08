import React from 'react';
import './TeamContainer.css';
import TeamCard from './TeamCard/TeamCard';
import Heading from '../Heading';

function TeamContainer(){
    const teamMembers = [["https://t4america.org/wp-content/uploads/2016/10/Blank-User.jpg","Name1","Subteam","",""],["https://t4america.org/wp-content/uploads/2016/10/Blank-User.jpg","Name2","Subteam","",""],["https://t4america.org/wp-content/uploads/2016/10/Blank-User.jpg","Name3","Subteam","",""]];
    return (
        <>
            <Heading name="Brought to you by"/>
            <div className="team-container">
                <div className="team-flexbox">
                    {teamMembers.map((member)=>{
                        return <TeamCard key={member[1]} imageLink={member[0]} name={member[1]}  subteam={member[2]} linkedin={member[3]} github={member[4]} />;
                    })}
                </div>
            </div>
        </>
    );
}

export default TeamContainer;