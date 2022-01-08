import React from 'react'
import "./styles/AboutUs.css"
import aboutimage from './Image/aboutus.png'
import Heading from './Heading'

export default function AboutUs() {
    return (
        <div className="full-page-container" id="aboutusLink">
            <Heading name="About Us"/>
            <div className='aboutUsCont'>
                {/* <div className='heading'>About Us</div> */}
                <div className='aboutsubcont'>
                    <div className='aboutCont'>
                        <p>
                        We are planning to conduct the Open Source Enlightenment Program, where we will be connecting Open Source Contributors with Opensource Organisations with an initiative of <span style={{color:"#AD5FAA"}}>'OpenSource meets its Contributor Force!’</span>. 
                        </p>
                        <p>
                        OpenForce is a place where they can meet mentors from OpenSource Organisations and contribute to them under guidance, network and <span style={{color:"#AD5FAA"}}>“bring the Open Source Culture”</span> with great enthusiasm.
                        </p>
                    </div>
                    <div className='aboutImg'>
                        <img src={aboutimage} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
