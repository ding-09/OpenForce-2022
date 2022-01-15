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
                        Codeflow is an organization that serves the ultimate purpose of ‘Learning must go on,  is an organization whose main motive is to empower the student community by organizing webinars, hackathons, and open-source events. Codeflow is organizing the event named OpenForce, an initiative taken up for the students to provide them with the best learning environment and help them gain the principal knowledge about the fastest-growing field <span style={{ color: "#AD5FAA" }}>‘Open Source’.</span>    
                        </p>
                        <p>
                        We are conducting the Open Source Enlightenment Program, where we will be connecting Open Source Contributors with Opensource Organisations with an initiative of <span style={{ color: "#E1C340" }}>'OpenSource meets its Contributor Force!’.</span> We will be empowering many tech enthusiasts by providing them with the platform of learning with resources.
                        </p>
                    </div>
                    <div className="containerr d-block" >
                        <div>
                            <p className="textimg">
                                Our  Impact
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
