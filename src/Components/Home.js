import React from "react";

function Home() {
  return (
    <div>
      {/* <div className="header-container">
        <div className="wrapper row"> */}
      <header className="row">
        <div className="hero-content col col-md-6">
          <h1>
            OpenSource meets its{" "}
            <span className="dynamic-text">Contributor Force</span>
          </h1>
          <p>
            10th to 15th Jan <span className="span-color">2021</span>
          </p>
          <button className="register">Register</button>
          <button className="discord">
            <img src="./images/Discord.png" alt="" />
            <a href="https://discord.com/invite/s77kYnfSGf" target={"_blank"} >Discord</a>
          </button>
        </div>
        <div className="hero-image col col-md-6">
            <img src="./images/Main-image.png" />

          <div className="photo-bg"></div>
        </div>
      </header>
      {/* </div>
      </div> */}
    </div>
  );
}
export default Home;
