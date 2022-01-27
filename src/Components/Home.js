import React from "react";
import "./styles/Home.css";

function Home() {

    const dynamicText = ["Contributor Force", ""]

    const switchCont = (id, cont)=>{
        const interval1 = setInterval(()=>{
            const elem = document.getElementById(id);
            if (!elem) return;
            elem.innerHTML = elem.innerHTML.substring(0, elem.innerHTML.length - 1);
            if(elem.innerHTML.length <= 1) {
                clearInterval(interval1);
                const interval2 = setInterval(()=>{
                    elem.innerHTML = cont.substring(0, elem.innerHTML.length + 1);
                    if(elem.innerHTML.length === cont.length){
                        clearInterval(interval2);
                        return;
                    }
                },140)
            }
        },140)
    }

    setInterval(()=>{
        const elem = document.getElementById("dynamic-text");
        if(!elem) return;
        if(elem.innerHTML === "Contributor Force"){
            switchCont("dynamic-text", "Openforce");
        }else if(elem.innerHTML === "Openforce"){
            switchCont("dynamic-text", "Contributor Force");
        }
    },4000)

    
    return (
        <div className="landing" id="homepageLink">
            <div className="landindContent">
                <h1 className="homeCont">
                    <div className="openforcemention">OpenForce 2022</div>
                    <div>OpenSource meets</div>
                    <div className="homeContSub">its{" "}<div className="dynamic-text" id="dynamic-text">Contributor Force</div></div>
                </h1>
                <p>
                3rd March to 28rd March <span className="span-color">2022</span>
                </p>

                <div className="landingBtn--wapper">
                    <a href="https://forms.gle/VBqnNxuYUVdwHKgy6" target="_blank">
                        <button className="homeregbtn landingBtn">Register</button>
                    </a>
                    <a
                        href="https://discord.com/invite/s77kYnfSGf"
                        target={"_blank"}
                    >
                        <button className="discord landingBtn">
                            <img src="./images/Discord.png" alt="" className="discordimg"/>
                            Discord
                        </button>
                    </a>
                </div>
            </div>

            <div className="landingImage">
                <img src="./images/Main-image.png" />

                <div className="photo-bg"></div>
            </div>
        </div>
    );
}
export default Home;
