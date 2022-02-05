import React from "react";
import "./styles/Home.css";

import bharatX from "./Sponsors/logo/bharatX-white.png"
import codeflow from "./Team/team/codeflow.png"

function Home() {

    return (
        <div className="landing" id="homepageLink">
            <div className="landindContent">
            <div className="poweredby" style={{fontSize:"20px",marginTop:"60px"}}>
                    <p>Powered By</p>
                    {/* BharatX */}
                    <img src={bharatX} alt="BharatX"/>
                </div>
                <h1 className="homeCont openforcemention">OpenForce 2022</h1>
                <span className="homeContSub"  style={{color:"#BC52B8", fontSize:"24px", fontWeight:"500px"}}>&lt;Opensource meets  its Contributor force/&gt;</span>
                <div className="homeContSub" style={{fontWeight:"100",lineHeight:"1.2em", marginTop:"20px"}}>We bring Top Opensource organisations to you.</div> 
                <div className="homeContSub" style={{fontWeight:"bolder",lineHeight:"1.2em"}}>Are you ready to be part of our OpenForce 2022?</div>
                
                <div className="poweredby organisedby">
                    <p>Organised By</p>
                    {/* Codeflow */}
                    <img src={codeflow} alt="Codeflow"/>
                </div>
                <p style={{textAlign:"left",fontFamily:"'Poppins', sans-serif",letterSpacing:".6px",fontWeight:"500"}}>
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
                <img src="./images/Main-image3.png" />
                <div className="photo-bg"></div>
            </div>
        </div>
    );
}
export default Home;
