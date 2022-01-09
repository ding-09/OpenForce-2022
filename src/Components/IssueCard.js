import React, { useEffect } from "react";
import "./styles/OrgFullPage.css";

export default function IssueCard(props) {
    if (props.level !== "All" && props.level !== props.data.level) return <></>;
    return (
        <div className="card" style={{color:"#EEE9E6", width:"100%",border:"2px solid #eee9e6", marginTop:"20px", borderRadius:"10px"}}>
            <div className="card-header" style={{background:"#1C232D", borderTopRightRadius:"10px", borderTopLeftRadius:"10px"}}>
                Issue-{props.data.ind}{" "}
                <span className="badge bg-secondary" style={{marginLeft:"20px"}}>{props.data.level}</span>
            </div>
            <div className="card-body" style={{background:"#46474B",borderBottomRightRadius:"10px",borderBottomLeftRadius:"10px"}}>
                <h5 className="card-title">{props.data.title}</h5>
                <p className="card-text">{props.data.desc}</p>
                <a href={props.data.repo} className="btn btn-dark" style={{background:"#1c232d", border:"none", minWidth:"100px"}} target="_blank">
                    Open
                </a>
            </div>
        </div>
    );
}
