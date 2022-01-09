import React from 'react';
import './TeamContainer.css';
import TeamCard from './TeamCard/TeamCard';
import Heading from '../Heading'; 
import t1 from './team/t1.jpg';
import t2 from './team/t2.jpeg';


function TeamContainer(){
    const codeflow = [[,"","","",""]];

    const founderMembers = [[t1,"Hargun Kaur","Founder, Codeflow","https://linkedin.com/in/hkaur008/","https://github.com/hkaur008"],
    [t2,"Harsh Chhabra","Founder, Codeflow","https://linkedin.com/in/harshchhabra","https://github.com/chhabraharsh37"]];
    
    const organiserMembers = [[,"","","",""],[,"","","",""],[,"","","",""]];

    const teamMembers = [[,"","","",""],[,"","","",""],[,"","","",""],[,"","","",""],[,"","","",""],];

    return (
        <>
            <Heading name="Brought to you by"/>
            <div className="team-container">
            <div className="team-flexbox">
                    {codeflow.map((member)=>{
                        return <TeamCard key={member[1]} imageLink={member[0]} name={member[1]}  subteam={member[2]} linkedin={member[3]} github={member[4]} />;
                    })}
                </div>
                <div className="team-flexbox">
                    {founderMembers.map((member)=>{
                        return <TeamCard key={member[1]} imageLink={member[0]} name={member[1]}  subteam={member[2]} linkedin={member[3]} github={member[4]} />;
                    })}
                </div>
                <div className="team-flexbox">
                    {organiserMembers.map((member)=>{
                        return <TeamCard key={member[1]} imageLink={member[0]} name={member[1]}  subteam={member[2]} linkedin={member[3]} github={member[4]} />;
                    })}
                </div>
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