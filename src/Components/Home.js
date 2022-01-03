import React from "react";
import "./styles/Home.css"

function Home() {
  return (
      <div className="landing">

        <div className="landindContent">
          
          <h1>
            OpenSource meets its{" "}
            <span className="dynamic-text">Contributor Force</span>
          </h1>
          <p>
            10th to 15th Jan <span className="span-color">2021</span>
          </p>

          <div className="landingBtn--wapper">
            <button className="register landingBtn">Register</button>
            <button className="discord landingBtn">
              <img src="./images/Discord.png" alt="" />
              <a href="https://discord.com/invite/s77kYnfSGf" target={"_blank"} >Discord</a>
            </button>
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
