import React from 'react'
import "./styles/AboutUs.css"
import aboutimage from './Image/aboutus.png'
import Heading from './Heading'
import au1 from "./Image/au1.png";
import au2 from "./Image/au2.png";
import au3 from "./Image/au3.png";
import au4 from "./Image/au4.png";

export default function AboutUs() {
    return (
        <div className="full-page-container" id="aboutusLink">
            <Heading name="About Us" />
            <div className='aboutUsCont'>
                <div className="aboutsubcont">
                    <div className="aboutCont">
                        <p>
                            We are planning to conduct the Open Source Enlightenment Program,
                            where we will be connecting Open Source Contributors with Opensource
                            Organisations with an initiative of{" "}
                            <span style={{ color: "#AD5FAA" }}>
                                'OpenSource meets its Contributor Force!’
                            </span>
                            .
                        </p>
                        <p>
                            This mega event is organised by{" "}
                            <span style={{ color: "#E1C340" }}>“Codeflow”</span> along with{" "}
                            <span style={{ color: "#008000" }}>
                                “Google developer Students Club NIT Kurukshetra.”
                            </span>
                            Codeflow is an organisation whose main motive is to empower the
                            student community by organising webinars, hachathons and open source
                            events.
                        </p>
                    </div>
                    <div className="containerr d-block" >
                        <div>
                            <p className="textimg">
                                #  Our  Impact
                            </p>
                        </div>
                        <div className="next d-flex">
                            <div className="first d-block">
                                <img className="imgs " src={au1} alt="" />
                                <img className="imgs my-5" src={au2} alt="" />
                            </div>

                            <div className="second d-block">
                                <img className="imgs" src={au3} alt="" />
                                <img className="imgs my-5" src={au4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
