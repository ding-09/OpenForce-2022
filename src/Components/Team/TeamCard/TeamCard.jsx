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
            <div className="team-description">
                <a href={props.linkedin}>
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </a>{" "}
                <a href={props.github} className="teammemb-git">
                    <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
            </div>
        </div>
    );
}

export default TeamCard;
