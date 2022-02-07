import React, { useEffect, useState } from "react";
import t1 from "../Team/team/t1.jpg";
import t2 from "../Team/team/t2.jpeg";
import "./style.css";
import MentorCard from "./MentorCard";
import steps from "./steps.png"

export default function Mentors() {
    const [text, settext] = useState("");
    const [expfilter, setexpfilter] = useState("All");
    useEffect(() => {
        document.getElementById("root").scrollTop = 0;
    }, []);

    const mentors = [
        [
            t1,
            "Hargun Kaur",
            "https://linkedin.com/in/hkaur008/",
            "https://github.com/hkaur008",
            "Founder",
            "manager",
            "Web Development",
        ],
        [
            t2,
            "Harsh Chhabra",
            "https://linkedin.com/in/harshchhabra",
            "https://github.com/chhabraharsh37",
            "Founder",
            "nonmanager",
            "Web Development",
        ]
    ];
    return (
        <div className="indvmentors">
            <div className="upper">
                <div className="mentortext">
                Our communication partner <a href="https://topmate.io/" target="_blank">topmate.io</a> has helped to bridge the gap between our amazing 
mentors and students. You can now have a 1 : 1 mentorship session with our mentors. follow few steps and you are good to go:
                </div>
                <div className="steps">
                    <div className="mentorimg"><img src={steps} alt="" className="stp"/></div>
                    <div className="mentorsearchtext">
                        <i class="fas fa-search"></i>
                        <input type="text" onChange={(e)=>{settext(e.target.value)}} value={text} placeholder="Search by name, role"/>
                    </div>
                        <select name="" id="mentorfilter" onChange={(e)=>{setexpfilter(e.target.value)}}>
                            <option value="All">All</option>
                            <option value="Web Development">Web Development</option>
                            <option value="App Development">App Development</option>
                            <option value="Desktop App">Desktop App</option>
                        </select>
                </div>
            </div>
            <div className="lower">
                {mentors.map((member) => {
                    return (
                        <MentorCard
                            key={member[1]}
                            imageLink={member[0]}
                            name={member[1]}
                            linkedin={member[2]}
                            topmate={member[3]}
                            position={member[4]}
                            role={member[5]}
                            expfilter={expfilter}
                            text={text}
                            expertize={member[6]}
                        />
                    );
                })}
            </div>
        </div>
    );
}
