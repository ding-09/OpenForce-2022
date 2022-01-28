import React, { useEffect } from "react";
import TeamCard from "../Team/TeamCard/TeamCard";
import t1 from "../Team/team/t1.jpg";
import t2 from "../Team/team/t2.jpeg";
import "./style.css";

export default function Mentors() {
    useEffect(() => {
        document.getElementById("root").scrollTop = 0;
    }, [])
    const mentors = [
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
        ]
    ];
    return (
        <div className="indvmentors">
            {mentors.map((member) => {
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
    );
}
