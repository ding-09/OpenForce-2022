import React from "react";
import { useHistory } from "react-router-dom";
import "./styles/Organization.css";

export default function OrganizationCard(props) {
    console.log(props.data);
    const history = useHistory();
    const showIssues = ()=>{
        console.log(history);
        console.log(`org=${props.data._id}`)
        history.push(`issue?id=${props.data._id}`)
    }
    const showPanel = ()=>{
        console.log(history);
        console.log(`org=${props.data._id}`)
        history.push(`panel?id=${props.data._id}`)
    }
    return (
        <div className="orgCont">
            <div className="orgDataCont">
                <img
                    src={props.data.logo}
                    alt={props.data.name}
                    width="150px"
                    className="orgLogo"
                />
                <div className="orgName">{props.data.name}</div>
            </div>
            <div className="orgNavigation">
                <div className="orgIssue" onClick={showIssues}>Issues</div>
                <div className="orgIssue" onClick={showPanel}>Panel</div>
            </div>
        </div>
    );
}
