import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BaseContext from "../Context/BaseContext";
import Addissue from "./Addissue";
import IssueCard from "./IssueCard";
import "./styles/OrgFullPage.css";

export default function IssueFullPage(props) {
    const context = useContext(BaseContext);
    const [orgIssue, setorgIssue] = useState([]);
    const [orgData, setorgData] = useState({});
    const [difficultyLevel, setdifficultyLevel] = useState("All");
    const history = useHistory();
    useEffect(() => {
        document.getElementById("root").scrollTop = 0;
        const updateOrg = async () => {
            var urlParm = new URL(window.location.href);
            var url = `https://openforce2022.herokuapp.com/api/org/issue/${urlParm.searchParams.get(
                "id"
            )}`;
            var resp = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
            });

            var data = (await resp.json()).data;
            // if (!data) {
            //     history.push("/error");
            //     return;
            // }

            url = `https://openforce2022.herokuapp.com/api/org/${urlParm.searchParams.get(
                "id"
            )}`;
            resp = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
            });

            var comp = (await resp.json()).data;

            setorgData(comp);
            var array = [];
            for (var i of data.issue) {
                array.push(JSON.parse(i));
            }
            setorgIssue(array);
        };
        updateOrg();
    }, []);

    useEffect(() => {}, [orgIssue]);

    useEffect(() => {}, [orgData]);

    const chgPrefrence = (e) => {
        if (document.querySelector(".dropDown").style.height != "160px") {
            document.querySelector(".dropDown").style.height = "160px";
            document.querySelector(".dropDir").style.transform = "rotateZ(-180deg)";
        } else {
            document.querySelector(".dropDown").style.height = "0px";
            document.querySelector(".dropDir").style.transform = "rotateZ(0deg)";
        }


    };
    
    const setAll = ()=>{
        document.querySelector(".dropDown").style.height = "0px";
        document.querySelector("#selectedVal").innerHTML = "All";
        setdifficultyLevel("All");
        document.querySelector(".dropDir").style.transform = "rotateZ(0deg)"
    }

    const setEasy = ()=>{
        document.querySelector(".dropDown").style.height = "0px";
        document.querySelector("#selectedVal").innerHTML = "Easy";
        document.querySelector(".dropDir").style.transform = "rotateZ(0deg)"
        setdifficultyLevel("Easy");
    }

    const setInter = ()=>{
        document.querySelector(".dropDown").style.height = "0px";
        document.querySelector(".dropDir").style.transform = "rotateZ(0deg)"
        document.querySelector("#selectedVal").innerHTML = "Intermed..";
        setdifficultyLevel("Intermediate");
    }

    const setHard = ()=>{
        document.querySelector(".dropDown").style.height = "0px";
        document.querySelector(".dropDir").style.transform = "rotateZ(0deg)"
        document.querySelector("#selectedVal").innerHTML = "Hard";
        setdifficultyLevel("Hard");
    }

    return (
        <div className="fullHeight">
            {/* <Addissue/> */}
            <div className="orgHeader">
                <div className="vertical-center fpageOrgDetails">
                    <img src={orgData.logo} alt="" className="fullPageLogo" />
                    <div>{orgData.name}</div>
                </div>
                <div className="rightOrgFullHeader">
                    <div className="selectLevel">
                        <div id="selected" onClick={chgPrefrence}><span id="selectedVal">All</span> <i className="fas fa-caret-down dropDir"></i></div>
                        <div className="dropDown">
                            <div className="option" onClick={setAll}>All</div>
                            <div className="option" onClick={setEasy}>Easy</div>
                            <div className="option" onClick={setInter}>Intermediate</div>
                            <div className="option" onClick={setHard}>Hard</div>
                        </div>
                    </div>
                    {/* <div className="addNew" onClick={showAddNewIssue}>Add New</div> */}
                </div>
            </div>
            <div className="issuesCont">
                {orgIssue.length === 0 ? (
                    <div className="noIssue middle">No Issue Available</div>
                ) : (
                    orgIssue.map((elem, ind) => {
                        elem.ind = ind + 1;
                        return (
                            <IssueCard data={elem} level={difficultyLevel} />
                        );
                    })
                )}
            </div>
        </div>
    );
}
