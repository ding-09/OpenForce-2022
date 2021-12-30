import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BaseContext from "../Context/BaseContext";
import Addissue from "./Addissue";
import IssueCard from "./IssueCard";
import "./styles/OrgFullPage.css";

export default function OrgFullPage(props) {
    const context = useContext(BaseContext);
    const [url, setUrl] = useState(new URL(window.location.href));
    const [orgIssue, setorgIssue] = useState([]);
    const [orgData, setorgData] = useState({});
    const [difficultyLevel, setdifficultyLevel] = useState("All");
    const history = useHistory();
    useEffect(() => {
        const updateOrg = async () => {
            var data = await context.callApi(
                `/api/org/issue/${url.searchParams.get("id")}`,
                "GET",
                {}
            );
            console.log(data);
            data = data.data;
            if (!data) {
                history.push("/error");
                return;
            }

            console.log(data, "data");
            var comp = (
                await context.callApi(
                    `/api/org/${url.searchParams.get("id")}`,
                    "GET",
                    {}
                )
            ).data;
            setorgData(comp);
            context.setorgData(comp);
            var array = [];
            for (var i of data.issue) {
                array.push(JSON.parse(i));
            }
            setorgIssue(array);
        };
        updateOrg();
    }, []);

    useEffect(() => {
        console.log(orgIssue.issue, "fadfajdsfdklsjf");
    }, [orgIssue]);

    useEffect(()=>{
        console.log("orgData", orgData);
    }, [orgData])

    const chgPrefrence = (e) => {
        setdifficultyLevel(e.target.value);
    };

    const showAddNewIssue = ()=>{
        console.log("object")
        context.setshowNewIssue(true);
    }

    return (
        <div className="fullHeight">
            <Addissue/>
            <div className="orgHeader">
                <div className="vertical-center fpageOrgDetails">
                    <img src={orgData.logo} alt="" className="fullPageLogo" />
                    <div>{orgData.name}</div>
                </div>
                <div className="rightOrgFullHeader">
                    <select className="selectBox" onChange={chgPrefrence}>
                        <option>All</option>
                        <option>Easy</option>
                        <option>Intermediate</option>
                        <option>Hard</option>
                    </select>
                    <div class="addNew" onClick={showAddNewIssue}>Add New</div>
                </div>
            </div>
            <div className="issuesCont">
                {orgIssue.length === 0 ? (
                    <div className="noIssue middle">No Issue Avilable</div>
                ) : (
                    orgIssue.map((elem,ind) => {
                        elem.ind = ind + 1;
                        return (
                            <IssueCard
                                data={elem}
                                level={difficultyLevel}
                            />
                        );
                    })
                )}
            </div>
        </div>
    );
}
