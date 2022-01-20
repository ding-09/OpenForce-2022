import React from "react";
import "./TeamContainer.css";
import TeamCard from "./TeamCard/TeamCard";
import Heading from "../Heading";
import logo from "./team/codeflow.png";
import t1 from "./team/t1.jpg";
import t2 from "./team/t2.jpeg";
import t3 from "./team/t3.jpeg";
import t4 from "./team/t4.jpeg";
import t5 from "./team/t5.jpeg";
import t6 from "./team/t6.jpeg";
import t7 from "./team/t7.jpeg";
import t8 from "./team/t8.jpeg";
import t9 from "./team/t9.jpeg";
import t10 from "./team/t10.jpeg";
import t11 from "./team/t11.jpeg";
import t12 from "./team/t12.jpeg";
import t13 from "./team/t13.jpeg";
import t14 from "./team/t14.jpeg";
import t15 from "./team/t15.jpeg";
import t16 from "./team/t16.jpeg";
import t17 from "./team/t17.jpeg";
import t18 from "./team/t18.jpeg";
import t19 from "./team/t19.jpeg";
import t20 from "./team/t20.jpeg";
import t21 from "./team/t21.jpeg";
import t22 from "./team/t22.jpeg";
import t23 from "./team/t23.jpeg";
import t24 from "./team/t24.jpeg";
import t25 from "./team/t25.jpeg";
import t26 from "./team/t26.jpeg";

function TeamContainer() {
    const codeflow = [
        [logo, "Codeflow", "Openforce 2022 Organiser", "", "", ""],
    ];

    const founderMembers = [
        [
            t1,
            "Hargun Kaur",
            "Founder, Codeflow",
            "https://linkedin.com/in/hkaur008/",
            "https://github.com/hkaur008",
        ],
        [
            t2,
            "Harsh Chhabra",
            "Founder, Codeflow",
            "https://linkedin.com/in/harshchhabra",
            "https://github.com/chhabraharsh37",
        ],
    ];

    const organiserMembers = [
        [
            t3,
            "Priyanshi Sinha",
            "Program Manager,Codeflow",
            "https://www.linkedin.com/in/priyanshi-sinha-378439191/",
            "https://github.com/priyanshisinha4",
        ],
        [
            t4,
            "Aarushi Hans",
            "Sponsorships & Events Executive",
            "https://www.linkedin.com/in/aarushihans",
            "https://github.com/Aarushi11H",
        ],
        [
            t26,
            "Gautam Behl",
            "Opensource Organisations Exec.",
            "https://www.linkedin.com/in/gautambehl",
            "https://github.com/ghackg11",
        ],
    ];

    const teamMembers = [
        [
            t5,
            "Aman Saini",
            "UI/UX Designer",
            "https://www.linkedin.com/in/aman-saini-951838203",
            "https://github.com/saini72002",
        ],
        [
            t6,
            "Shreya Sahu",
            "UI/UX Designer",
            "https://www.linkedin.com/in/shreyasahu5",
            "https://github.com/shreya0005/",
        ],
        [t7, "Aastha Sharma", "UI/UX Designer", "", ""],
        [
            t8,
            "Deepak Kumar",
            "Developer Engineer",
            "https://www.linkedin.com/in/deepak-kumar-947a16202/",
            "https://github.com/Deepak-Kumar201",
        ],
        [
            t9,
            "Adityabhan Singh Rathore",
            "Developer Engineer",
            "https://linkedin.com/in/bhannasa",
            "https://github.com/bhannasa",
        ],
        [
            t10,
            "Rohan Kumar",
            "Developer Engineer",
            "https://www.linkedin.com/in/rohan-kumar-465218227",
            "https://github.com/cor1234",
        ],
        [
            t11,
            "Simran Saigal",
            "Developer Engineer",
            "https://www.linkedin.com/in/simran-saigal",
            "https://github.com/simsam0502",
        ],
        [
            t12,
            "Rushikesh Adhav",
            "Developer Engineer",
            "https://www.linkedin.com/in/rushikeshadhav",
            "https://github.com/rushikeshadhav",
        ],
        [
            t13,
            "Manan Jain",
            "Opensource Maintainer",
            "https://www.linkedin.com/in/manan-jain-65aa561b7/",
            "https://github.com/Manan-jn",
        ],
        [
            t15,
            "Pranav Chauhan",
            "DevRel Engineer",
            "https://www.linkedin.com/in/pranav-chauhan-217bb11b9/",
            "https://github.com/PranavChauhan22",
        ],
        [
            t16,
            "Anupam Mishra",
            "DevRel Engineer",
            "https://www.linkedin.com/in/anupam--mishra",
            "https://github.com/anupamishra333",
        ],
        [
            t17,
            "Aakash Raj",
            "DevRel Engineer",
            "https://www.linkedin.com/in/aakash-raj-b62b541a4",
            "https://github.com/Aakash-Raj-2001",
        ],
        [
            t18,
            "Sejal Dahake",
            "DevRel Engineer",
            "https://www.linkedin.com/in/sejalxz/",
            "https://github.com/sejalxz",
        ],
        [
            t21,
            "Ruchi",
            "Graphic Designer",
            "https://www.linkedin.com/in/ruchi-kumari-0090a4211",
            "https://github.com/RUCHI21CODES",
        ],
        [
            t22,
            "Ritika Mittal",
            "Graphic Designer",
            "https://www.linkedin.com/in/ritika-m-801563202",
            "https://github.com/RITIKA1312",
        ],
        [t23, "Aaryav Sethi", "Social Media Incharge", "", ""],
        [
            t24,
            "Vibhuti Jindal",
            "Sponsorship team",
            "https://www.linkedin.com/in/vibhuti-jindal-572695217",
            "https://github.com/VibhutiJindal",
        ],
        [
            t25,
            "Vinayak",
            "Discord Server Designer",
            "https://www.linkedin.com/in/vinayak-gavariya-88aa541ba",
            "https://github.com/VG-1",
        ],
    ];

    return (
        <>
            <Heading name="Brought to you by" />
            <div className="team-container">
                <div className="team-flexbox">
                    {codeflow.map((member) => {
                        return (
                            <TeamCard
                                key={member[1]}
                                imageLink={member[0]}
                                name={member[1]}
                                subteam={member[2]}
                                linkedin={member[3]}
                                github={member[4]}
                            />
                        );
                    })}
                </div>
                <div className="team-flexbox">
                    {founderMembers.map((member) => {
                        return (
                            <TeamCard
                                key={member[1]}
                                imageLink={member[0]}
                                name={member[1]}
                                subteam={member[2]}
                                linkedin={member[3]}
                                github={member[4]}
                            />
                        );
                    })}
                </div>
                <div className="team-flexbox">
                    {organiserMembers.map((member) => {
                        return (
                            <TeamCard
                                key={member[1]}
                                imageLink={member[0]}
                                name={member[1]}
                                subteam={member[2]}
                                linkedin={member[3]}
                                github={member[4]}
                            />
                        );
                    })}
                </div>
                <div className="team-flexbox">
                    {teamMembers.map((member) => {
                        return (
                            <TeamCard
                                key={member[1]}
                                imageLink={member[0]}
                                name={member[1]}
                                subteam={member[2]}
                                linkedin={member[3]}
                                github={member[4]}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default TeamContainer;
