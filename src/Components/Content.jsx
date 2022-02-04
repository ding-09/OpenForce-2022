import React from "react";
import Heading from "./Heading";
import "./styles/Content.css"
import { Link } from "react-router-dom";

export default function Content() {
    return (
        <div className="contContainer">
            <Heading name="Program Overview" />

            <div className="content-cont">
                <span className="bold" style={{color:"#5865F2"}}>OpenForce 2022</span> is a place where they can meet mentors from OpenSource
                Organisations and contribute to them under guidance, network, and
                “bring the Open Source Culture” with great enthusiasm.
                <br/>
                <br/>
                <ul>
                    <li>
                        <span className="bold">Contribution Period:</span> The Open-source organizations in
                        the program will provide OpenForce Specific Issues which
                        participants can resolve in the Contribution Period
                        mentioned in Timeline.{" "}
                    </li>
                    <li>
                        <span className="bold">Panel Mentorship:</span> There will be a panel of mentors
                        available for you for any kind of help or doubts. The
                        panel will consist of people directly from the
                        organizations with whom you can network.{" "}
                    </li>
                </ul>
                <br/>
                However, the Date and Time for the availability of Mentors from
                each organization may vary between 5th & 10th March. You will be
                notified earlier when specific organization members/mentors are
                available for doubt discussion and networking.
                <br />
                <br/>
                You can join Our Discord for reminders of the program:{" "}
                <a href="https://bit.ly/openforce2022" style={{fontWeight:"bolder"}}>
                    https://bit.ly/openforce2022
                </a>
                <div>
                    <Link to="/overview" ><div className="theme-orange">Read More...</div></Link>
                </div>
            </div>
        </div>
    );
}
