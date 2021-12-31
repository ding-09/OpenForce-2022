import React from "react";
import leftImg from "./Image/register.png";
import "./styles/Registration.css";

export default function Registration() {
    return (
        <div className="registration">
            <div className="heading">Register Now</div>
            <div className="regForm">
                <form>
                    <div>
                        <div className="regText">Full Name</div>
                        <div className="regInput">
                            <input
                                type="text"
                                required={true}
                                className="regInputField"
                                id="regname"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="regText">Email</div>
                        <div className="regInput">
                            <input
                                type="email"
                                required={true}
                                id="regemail"
                                className="regInputField"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="regText">Mobile No</div>
                        <div className="regInput">
                            <input
                                type="number"
                                required={true}
                                id="regno"
                                className="regInputField"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="regText">Gender</div>
                        <div className="regInput genderSelect">
                            <span>
                                <input type="radio" name="gender" id="male" />
                                <label htmlFor="male">Male</label>
                            </span>
                            <span>
                                <input type="radio" name="gender" id="female" />
                                <label htmlFor="female">Female</label>
                            </span>
                            <span>
                                <input type="radio" name="gender" id="other" />
                                <label htmlFor="other">Other</label>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="regText">College</div>
                        <div className="regInput">
                            <input
                                type="text"
                                required={true}
                                className="regInputField"
                                id="regcollege"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="regText">City</div>
                        <div className="regInput">
                            <input
                                type="text"
                                required={true}
                                className="regInputField"
                                id="regcity"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="regText">State</div>
                        <div className="regInput">
                            <input
                                type="text"
                                id="regstate"
                                required={true}
                                className="regInputField"
                            />
                        </div>
                    </div>
                    <input type="submit" value="Register" id="register"/>
                </form>
                <div className="leftRegBar">
                    <img src={leftImg} className="regimage" />
                </div>
                <div className="ball1"></div>
            </div>
        </div>
    );
}
