import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import React, { useState } from "react";
import {
    faMapMarkerAlt,
    faPhone,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/Contact.css";
import Heading from "./Heading";
library.add(faMapMarkerAlt, faPhone, faEnvelope);

function Contact() {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:3000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    return (
        <div className="full-page-container">
            <Heading name="Contact Us" />
            <section className="contact">
                <div className="container">
                    <div className="contactInfo">
                        <div className="box">
                            <div className="icon">
                                <FontAwesomeIcon icon="map-marker-alt" />
                            </div>
                            <div className="text">
                                <h3>Address</h3>
                                <p>
                                    New Delhi, India
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon">
                            <FontAwesomeIcon icon="envelope" />
                            </div>

                            <div className="text">
                                <h3>Queries Email</h3>
                                <p>queries.codeflow@gmail.com</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon">
                                <FontAwesomeIcon icon="envelope" />
                            </div>
                            <div className="text">
                                <h3>Email</h3>
                                <div className="email_">
                                    codefloworg@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contactForm">
                        <form action="https://formsubmit.co/queries.codeflow@gmail.com" method="POST">
                            <h2>Send Message</h2>
                            <div className="inputBox">
                                <input
                                    type="text"
                                    name="Name"
                                    required="required"
                                />
                                <span>Full Name</span>
                            </div>
                            <input type="hidden" name="_captcha" value="false"/>
                            <input type="hidden" name="_subject" value="New message from OpenForce 2022"/>
                            <input type="hidden" name="_next" value="http://localhost:3000/"/>
                            <div className="inputBox">
                                <input
                                    type="text"
                                    name="user_email"
                                    required="required"
                                />
                                <span>Email</span>
                            </div>

                            <div className="inputBox">
                                <input type="text" required="required" name="Message"></input>
                                <span>Type Your message</span>
                            </div>
                            <div className="inputBox">
                                <button id="submit-contact-form">
                                    {status}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
