import React from "react";
import "./PreLoader.css";
import logo from "./logo.png";

export default () => {
    return (
        <div className="preloader">
            <img src={logo} alt="" className="preloader-img" />
        </div>
    )
}