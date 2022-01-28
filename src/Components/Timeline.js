import React, { useEffect } from "react";
import Heading from "./Heading";
import "./styles/Timeline.css";
export default function Timeline({resetTimeline}) {
    useEffect(()=>{
        console.log("first");
        setTimeout(resetTimeline,10);
    }, [])
    return (
        <>
            <Heading name="Timeline"/>
            <div className="timelineCont">
                <div className="tlline"></div>
                <div className="tlboxwrap tlfirst">
                    <div className="tlboxes dark" id="tlbox1">
                        15th January 2022
                        <div className="dot"></div>
                        {/* <div className="dotcircle"></div> */}
                    </div>
                    <div className="tlboxes" id="tlbox2">
                        Registration Open
                    </div>
                </div>

                <div className="tlboxwrap">
                    <div className="tlboxes dark" id="tlbox3">
                        28th February 2022
                        <div className="dot"></div>
                        {/* <div className="dotcircle"></div> */}
                    </div>
                    <div className="tlboxes" id="tlbox4">
                        Registration Close
                    </div>
                </div>

                <div className="tlboxwrap">
                    <div className="tlboxes dark" id="tlbox5">
                        3rd march 2022
                        <div className="dot"></div>
                        {/* <div className="dotcircle"></div> */}
                    </div>
                    <div className="tlboxes" id="tlbox6">
                        Opening Ceremony
                    </div>
                </div>

                <div className="tlboxwrap">
                    <div className="tlboxes dark" id="tlbox7">
                        5th March - 10th March 2022
                        <div className="dot"></div>
                        {/* <div className="dotcircle"></div> */}
                    </div>
                    <div className="tlboxes" id="tlbox8">
                        Panel Mentorship
                    </div>
                </div>

                <div className="tlboxwrap">
                    <div className="tlboxes dark" id="tlbox9">
                        28rd March 2022
                        <div className="dot"></div>
                        {/* <div className="dotcircle"></div> */}
                    </div>
                    <div className="tlboxes" id="tlbox10">
                        Contribution Deadline
                    </div>
                </div>
                <div className="tlboxwrap">
                    <div className="tlboxes dark" id="tlbox9">
                        31st March 2022
                        <div className="dot"></div>
                        {/* <div className="dotcircle"></div> */}
                    </div>
                    <div className="tlboxes" id="tlbox10">
                        Result Declaration
                    </div>
                </div>
            </div>
        </>
    );
}
