import React from "react";
import "./styles/Home.css";

import bharatX from "./Sponsors/logo/bharatX-white.png"
import codeflow from "./Team/team/codeflow.png"

function Home() {

    return (
        <div className="landing" id="homepageLink">
            <div className="landindContent">
                <h1 className="homeCont openforcemention">OpenForce 2022</h1>
                <div className="poweredby organisedby">
                    <p>Organised By</p>
                    {/* Codeflow */}
                    <img src={codeflow} alt="Codeflow"/>
                </div>
                <div className="poweredby">
                    <p>Powered By</p>
                    {/* BharatX */}
                    <img src={bharatX} alt="BharatX"/>
                </div>
                {/* <div className="homeContSub" style={{fontWeight:"bolder",lineHeight:"1.2em"}}>Are you ready to be part of our OpenForce 2022?</div>
                <div className="homeContSub" style={{fontWeight:"100",lineHeight:"1.2em"}}>We bring Top Opensource organisations to you.</div> */}
                <span className="homeContSub" style={{fontSize:"20px",marginTop:"60px"}}>Opensource meets  its</span><span className="homeContSub"  style={{color:"#AD5FAA", fontSize:"30px", fontWeight:"900"}}> Contributor force</span>
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
