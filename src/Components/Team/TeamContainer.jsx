import React from 'react';
import './TeamContainer.css';
import TeamCard from './TeamCard/TeamCard';

function TeamContainer(){
    const teamMembers = [["https://t4america.org/wp-content/uploads/2016/10/Blank-User.jpg","Name","Subteam","",""],["https://t4america.org/wp-content/uploads/2016/10/Blank-User.jpg","Name","Subteam","",""],["https://t4america.org/wp-content/uploads/2016/10/Blank-User.jpg","Name","Subteam","",""]];
    return (
        <div className="team-container">
            <h1 className="team-heading">Brought to you by</h1>
            <div className="team-flexbox">
                {teamMembers.map((member)=>{
                    return <TeamCard imageLink={member[0]} name={member[1]}  subteam={member[2]} linkedin={member[3]} github={member[4]} />;
                })}
            </div>
        </div>
    );
}

export default TeamContainer;