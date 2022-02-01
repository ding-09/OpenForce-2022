import React, { useEffect } from 'react';
import './styles/Overview.css';

function Overview() {

    useEffect(()=>{
        document.getElementById("root").scrollTop = 0;
    },[])

    return <div id="Overview">
        <p>
            <span className='bold'>Codeflow</span> is an organization that serves the ultimate purpose of <span className='theme-blue'>‘Learning must go on’</span>,  is an organization whose main motive is to empower the student community by organizing webinars, hackathons, and open-source events. Codeflow is organizing the event named OpenForce, an initiative taken up for the students to provide them with the best learning environment and help them gain the principal knowledge about the fastest-growing field <span className='theme-orange'>‘Open Source’</span>.
        </p>
        <p>
        <span className='bold'>Milestones:</span>
            <ul>
                <li>
                    As a community, we have impacted <span className='theme-orange'>10k+ students</span> and reached <span className='theme-orange'>115+ colleges</span> in <span className='theme-orange'>less than 1 year</span>.
                </li>
                <li>
                    We had previously organized an event called <span className='theme-blue'>“DSA Bootcamp”</span> which had <span className='theme-orange'>6k+ registrations</span>, <span className='theme-orange'>30+ community partners</span>, and collaborated with <span className='theme-orange'>25+ eminent speakers</span>. We have established ourselves as one of the fastest-growing communities.
                </li>
                <li>
                    Conducted exclusive programs like <span className='theme-blue'>"Codeflow Developer Conclave 1.0"</span> and <span className='theme-blue'>"90 Day of Coding"</span> with <span className='theme-orange'>2000+ mentored students</span>.
                </li>
            </ul>
        </p>
        <p>
        <div className='bold'>About the program: </div>
        <div className='blockquote'>
            We are conducting the Open Source Enlightenment Program, where we will be connecting Open Source Contributors with Opensource Organisations with an initiative of <span className='theme-blue'>'OpenSource meets its Contributor Force!’</span>. We will be empowering many tech enthusiasts by providing them with the platform of learning with resources.

            OpenForce is a place where they can meet mentors from OpenSource Organisations and contribute to them under guidance, network and “bring the Open Source Culture” with great enthusiasm.
        </div>
            <ul>
                <li>
                    <span className='bold'>Contribution Period:</span> The Open-source organizations in the program will provide OpenForce Specific Issues which participants can resolve in the Contribution Period mentioned in Timeline.
                </li>
                <li>
                    <span className='bold'>Panel Mentorship:</span> There will be a panel of mentors available for you for any kind of help or doubts. The panel will consist of people directly from the organizations with whom you can network.
                </li>
            </ul>
        </p>
        <p>
            However, the Date and Time for the availability of Mentors from each organization may vary between <span className='theme-orange'>5th & 10th March</span>. You will be notified earlier when specific organization members/mentors are available for doubt discussion and networking.

            You can join Our Discord for reminders of the program:  <a href="https://bit.ly/openforce2022" target="_blank"><span className='theme-orange'>https://bit.ly/openforce2022</span></a>
        </p>
    </div>;
}

export default Overview;
