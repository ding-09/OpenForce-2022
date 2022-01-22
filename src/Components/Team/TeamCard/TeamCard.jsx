import React from "react";
import "./TeamCard.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

// import { linkedin,github} from "@fortawesome/free-solid-svg-icons"
function TeamCard(props) {
    return (
        <div className="team-card">
            <img src={props.imageLink} alt="" className="team-img" />
            <h5 className="team-text">{props.name}</h5>
            <h6 className="team-text">{props.subteam}</h6>
            <div className="team-description" style={{paddingTop:"5px"}}>
                <a href={props.linkedin} className="teamlinkes">
                    <i className="fab fa-linkedin" style={{fontSize:"25px"}}></i>
                </a>{" "}
                <a href={props.github} className="teammemb-git">
                    <i className="fab fa-github" style={{fontSize:"25px"}}></i>
                </a>
            </div>
        </div>
    );
}

export default TeamCard;
