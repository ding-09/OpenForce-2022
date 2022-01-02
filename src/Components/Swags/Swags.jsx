import React from "react";

import "../styles/Swags.css";
import SwagItem from "./SwagItem";

import config from "../../config/config";

const { desktopSwags, mobileSwags } = config;

function Swags(props) {
    return (
        <section id={"swags"}>
            <h1>DIGITAL SWAGS</h1>
            <p className={"swags-information"}>
                Get yourself equipped with some amazing official Hack This Fall
                Digital Swags, and flex it by owning them. Get our cool Hack
                This Fall wallpapers for your desktop computers and mobile
                phones. Don't forget to use the zoom/meet wallpapers in your
                meetings. Also, to have fun and enjoy, we have an Instagram
                Bingo Story for you, which you can share on your stories, tag
            </p>
            <div className={"swags-item-container"}>
                <SwagItem
                    images={desktopSwags.wallpaper.images}
                    link={desktopSwags.wallpaper.download}
                />
                <SwagItem
                    images={desktopSwags.zoomBackground.images}
                    link={desktopSwags.zoomBackground.images}
                />
            </div>
            <div className={"swags-item-container"}>
                <SwagItem
                    mobile={true}
                    images={mobileSwags.wallpaper.images}
                    link={mobileSwags.wallpaper.download}
                />
                <SwagItem
                    mobile={true}
                    images={mobileSwags.story.images}
                    link={mobileSwags.story.images}
                />
            </div>
        </section>
    );
}

export default Swags;
