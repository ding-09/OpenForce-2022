import React from "react";
import "./Challenge.css"

export default function ChallengeCard({data}) {
    return (
        <div className="challengeCard">
            <div className="companyChallHeading">{data.heading}</div>
            <div className="challengeDesc">{data.desc}</div>
            <div className="fromOrg">From - {data.org}</div>
        </div>
    );
}
