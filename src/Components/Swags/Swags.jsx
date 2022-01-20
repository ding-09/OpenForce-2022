import React, { useEffect } from "react";

import "../styles/Swags.css";
import SwagItem from "./SwagItem";

import config from "../../config/config";
import Prices from "./Prizes";

const { desktopSwags, mobileSwags, prizes } = config;

function Swags(props) {
    useEffect(() => {
        document.getElementById("root").scrollTop = 0;
    }, [])
    return (
        <section id={"swags"}>
            <>
                <h1>Prizes <i className="fas fa-award"></i></h1>

                <div className="swagborder">
                    <div className={"swags-item-container"}>
                        {
                            prizes.map((elem) => {
                                return (<Prices data={elem} key={elem}/>)
                            })
                        }
                    </div>
                </div>
            </>

            <>
                <h1>DIGITAL SWAGS <i className="fas fa-gifts"></i></h1>
                <p className={"swags-information"}>
                    Get Openforce 2022 awesome wallpaper for your computer and mobile phones. Don't forget to shine among your friend by getting these swags.
                </p>
                <div className="swagborder">
                    <div className={"swags-item-container"}>
                        <SwagItem
                            key={mobileSwags.wallpaper.download}
                            mobile={true}
                            divId={"mobileSwags-walpaper"}
                            images={mobileSwags.wallpaper.images}
                            link={mobileSwags.wallpaper.download}
                        />
                        <SwagItem
                            key={mobileSwags.story.download}
                            mobile={true}
                            divId={"mobileSwags-background"}
                            images={mobileSwags.story.images}
                            link={mobileSwags.story.download}
                        />
                    </div>
                    <div className={"swags-item-container"}>
                        <SwagItem
                            key={desktopSwags.wallpaper.download}
                            divId={"desktopSwags-walpaper"}
                            images={desktopSwags.wallpaper.images}
                            link={desktopSwags.wallpaper.download}
                        />
                        <SwagItem
                            key={desktopSwags.zoomBackground.download}
                            divId={"desktopSwags-background"}
                            images={desktopSwags.zoomBackground.images}
                            link={desktopSwags.zoomBackground.download}
                        />
                    </div>
                </div>
            </>
        </section>
    );
}

export default Swags;
