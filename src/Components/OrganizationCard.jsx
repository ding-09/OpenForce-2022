import React from "react";
import { useHistory } from "react-router-dom";
import "./styles/Organization.css";
import img from "./orgtags/canosp.png";

export default function OrganizationCard(props) {
    const history = useHistory();
    const showIssues = () => {
        history.push(`issue?id=${props.data._id}`);
    };
    const showPanel = () => {
        history.push(`panel?id=${props.data._id}`);
    };
    return (
        <div className="orgCont">
            <div className="orgDataCont">
                <img
                    src={props.data.logo}
                    alt={props.data.name}
                    width="150px"
                    className="orgLogo"
                />
            </div>
            <div className="orgNavigation">
                <div  className="contcont">
                    <div className="orgName">
                        {props.data.name}
                        <a href={props.data.website} target="_blank">
                            <i className="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                    <div className="orgTagLine">{props.data.tagline}</div>
                    <div className="orgeventtags">
                        {props.data.tags.map((elem) => {
                            return (
                                <div
                                    className="badge"
                                    style={{
                                        backgroundColor: "#1C232D",
                                        fontSize: "12px",
                                    }}
                                    key={elem}
                                >
                                    {elem}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="btncont">
                    <div className="orgIssue orgButton" onClick={showIssues}>
                        Issues
                    </div>
                    <div className="orgPanel orgButton" onClick={showPanel}>
                        Panel Mentorship
                    </div>
                </div>

                {/* <div className="absolute orgBall ball1"></div> */}
                {/* <div className="absolute orgBall ball3"></div> */}
            </div>
        </div>
    );
}
