import React from "react";
import "./SponsorsContainer.css";
import SponsorsSubContainer from "./SponsorsSubContainer/SponsorsSubContainer";
import stickermule from "./logo/stickermule.png";
import bharatX from "./logo/bharatX.png";
import gdsc from "./logo/template2_white.png";
import ShardingSphere from "./logo/ShardingSphere Logo.jpeg";
import givemycertificates from "./logo/givemycertificates.png"
import eclipse from "./logo/eclipse.png"
import jina from "./logo/jina.png"
import Heading from "../Heading";
import IEEEDTU from "./logo/IEEEDTU.png"
import gdscamity from "./logo/gdscemity.png"
import TurningClub from "./logo/Turning Club.jpeg"
import LWM from "./logo/LWM.jpeg"
import HITK from "./logo/HITK.png"
import IEEEBITS from "./logo/IEEEBITS.png"
import GDSCRur from "./logo/GDSCRourkela.png"
import GDSCBITW from "./logo/GDSCBITW.png"
import GDSCKalindiDU  from "./logo/GDSCKalindiDU.png"
import IOS  from "./logo/IOS.png"
import IEEEMSIT from "./logo/IEEEMSIT.png"
import topmate from "./logo/topmate.png"
import pepcoding from "./logo/pepcoding.png"
import nados from "./logo/nados.png"

function SponsorsContainer() {
    const titleSpon = [
        [
            {
                website: "https://bharatx.tech/",
                desc: "BharatX enables Consumer facing apps & websites to give their users Credit, as a Feature, using their APIs in under 60 minutes.",
                logo: bharatX,
                tags: ["Hiring Opportunities", "Cash Prize", "Goodie Bags"],
            },
        ],
    ];
    const sponsorTypes = [
        [
            "Diamond Sponsors 💎",
            [
                {
                    website: "https://shardingsphere.apache.org/",
                    logo: ShardingSphere,
                    logoSize:"25%",
                    tags: ["Goodies", "Workshops"],
                    desc :"Apache ShardingSphere is an open source Big Data ecosystem, and one of the most successful Apache Software Foundation projects.",
                    padding:"20px"
                },
                // "2",
                // "3",
            ],
        ],
        // ["Platinum Sponsors 🏆", ["4", "5", "6"]],
        [
            "Gold Sponsors 🥇",
            [
                {
                    website: "https://projects.eclipse.org/projects/adoptium.aqavit",
                    // name: "Eclipse AqAvit",
                    logo: eclipse,
                    logoSize:"35%",
                    tags: ["Goodies", "Workshops"],
                    desc : "Eclipse AQAvit project began about 4 years ago as a community effort to improve the quality of OpenJDK binaries"
                },
                ,
                // "8",
                // "9",
            ],
        ],
        [
            "Silver Sponsors 🥈",
            [
                {
                    website: "https://www.stickermule.com/",
                    name: "Stickermule",
                    logo: stickermule,
                },
                // "11",
                // "12",
            ],
        ],
        [
            "Bronze Sponsors 🥉",
            [
                {
                    website: "https://jina.ai/",
                    name: "Jina.Ai",
                    logo: jina,
                },
                // "13",
                // "14",
            ],
        ],
        [
            "Special Partners 📜",
            [
                {
                    logo: topmate,
                    website: "https://topmate.io/",
                    name: "Topmate",
                    width : "320px",
                    height : "180px",
                    fontSize:"15px",
                    logoSize:"60%",
                    tags:["Communication Partner"]
                },
                {
                    website: "https://www.pepcoding.com/",
                    name: "Pepcoding",
                    logo: pepcoding,
                    padding:"20px",
                    width : "320px",
                    height : "180px",
                    fontSize:"15px",
                    logoSize:"30%",
                    tags:["Education Partner"]
                },
                {
                    website: "https://nados.io/feed",
                    name: "NADOS",
                    logo: nados,
                    // padding:"20px",
                    width : "320px",
                    height : "180px",
                    fontSize:"15px",
                    logoSize:"60%",
                    tags:["Education Partner"]
                },
                {
                    website: "https://givemycertificate.com/",
                    name: "Give My Certificates",
                    logo: givemycertificates,
                    logoSize:"20%",
                    width : "320px",
                    height : "180px",
                    fontSize:"15px",
                    tags:["Certificate Partner"]
                },
                {
                    website: "mailto:codefloworg@gmail.com",
                    name: "Become Our Partner!",
                    width : "320px",
                    height : "180px",
                    fontSize:"23px",
                    tags:["Platform Partner"]
                },
                {
                    website: "mailto:codefloworg@gmail.com",
                    name: "Become Our Partner!",
                    width : "320px",
                    height : "180px",
                    fontSize:"23px",
                    tags:["Media Partner"]
                },
                
            ],
        ],
        [
            "Community Partners 🤝",
            [
                {
                    website: "#",
                    name: "GDSC NIT Kurukshetra",
                    logo: gdsc,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"80%"
                },
                {
                    website: "#",
                    // name: "IEEE Delhi Technological University",
                    logo: IEEEDTU,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"60%"
                },
                {
                    website: "#",
                    name: "Turning Club",
                    logo: TurningClub,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"45%"
                },
                {
                    website: "#",
                    name: "GDSC Amity",
                    logo: gdscamity,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"90%"
                },
                {
                    website: "#",
                    name: "Learn With Mitul Community",
                    logo: LWM,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"40%"
                },
                {
                    website: "#",
                    name: "HITK Tech Community",
                    logo: HITK,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"40%"
                },
                {
                    website: "#",
                    // name: "HITK Tech Community",
                    logo: IEEEBITS,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"60%"
                },
                {
                    website: "#",
                    name: "GDSC NIT Rourkela",
                    logo: GDSCRur,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"80%"
                },
                {
                    website: "#",
                    name: "GDSC BITW",
                    logo: GDSCBITW,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"80%"
                },
                {
                    website: "#",
                    name: "GDSC Kalindi",
                    logo: GDSCKalindiDU,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"80%"
                },
                {
                    website: "#",
                    name: "International Organisation of software Developers",
                    logo: IOS,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"80%"
                },
                {
                    website: "#",
                    // name: "IEEE MSIT",
                    logo: IEEEMSIT,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"65%"
                }
                
                
            ],
        ],

    ];

    return (
        <div id="sponserLink" className="component-container">
            <Heading name="Sponsors and Partners" />
            <div className="sponsors-container">
                <SponsorsSubContainer
                    key={0}
                    subheading={`Title Sponsor ⚡`}
                    links={titleSpon[0]}
                />
                {sponsorTypes.map((sponsorType, i) => {
                    return (
                        <SponsorsSubContainer
                            key={i}
                            subheading={sponsorType[0]}
                            links={sponsorType[1]}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default SponsorsContainer;
