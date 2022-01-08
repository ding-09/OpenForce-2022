import React from "react";
import "./SponsorsContainer.css";
import SponsorsSubContainer from "./SponsorsSubContainer/SponsorsSubContainer";
import stickermule from "./logo/stickermule.png";
import gdsc from "./logo/template2_white.png"
import Heading from "../Heading";

function SponsorsContainer() {
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
        <div id="sponserLink">
            <Heading name="Sponsors and Partners" />
            <div className="sponsors-container">
                {sponsorTypes.map((sponsorType) => {
                    return (
                        <SponsorsSubContainer
                            key={sponsorType[0]}
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
