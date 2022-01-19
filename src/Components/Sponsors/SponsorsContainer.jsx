import React from "react";
import "./SponsorsContainer.css";
import SponsorsSubContainer from "./SponsorsSubContainer/SponsorsSubContainer";
import stickermule from "./logo/stickermule.png";
import bharatX from "./logo/bharatX.png";
import gdsc from "./logo/template2_white.png"
import Heading from "../Heading";

function SponsorsContainer() {
    const titleSpon = [
            [
                {
                    website: "https://bharatx.tech/",
                    desc: "BharatX enables Consumer facing apps & websites to give their users Credit, as a Feature, using their APIs in under 60 minutes.",
                    logo: bharatX,
                    tags: ["Hiring Opportunities", "Cash Prize", "Goodie Bags", ""],
                }
            ]
    ]
    const sponsorTypes = [
        ["Diamond Sponsors 💎", ["1", "2", "3"]],
        ["Platinum Sponsors 🏆", ["4", "5", "6"]],
        ["Gold Sponsors 🥇", ["7", "8", "9"]],
        [
            "Silver Sponsors 🥈",
            [
                {
                    website: "https://www.stickermule.com/",
                    name: "Stickermule",
                    logo: stickermule,
                },
                "11",
                "12",
            ],
        ],
        // ["Bronze Sponsors 🥉", ["12", "13", "14"]],
        [
            "Community Partners 🤝",
            [
                {
                    website: "#",
                    name: "",
                    logo: gdsc,
                },
            ],
        ],
    ];

    return (
        <div id="sponserLink" className='component-container'>
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
