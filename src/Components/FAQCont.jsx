import React, { useState } from 'react'
import FAQ from './FAQ';
import Heading from './Heading';
import "./styles/FAQnew.css"

export default function FAQCont() {

    const [faqs, setfaqs] = useState([
        {
            question: "Who can participate in Openforce 2022?",
            answer: "Everyone can participate whether you are a college, school student, a freelance developer, or a professional one, a person with any kind of profile can participate in this event. You just need to have a will to learn and contribute to such great organizations.",
            open: true,
        },
        {
            question: "What would be the level of issues?",
            answer: "The level of issues will be good-first issues, beginner, medium/intermediate, hard. Don't worry even if you are a beginner. There will be an ample amount of beginner-friendly issues with which you can start your open-source journey.",
            open: false,
        },
        {
            question: "What are the perks of participating in this event?",
            answer: "1. All the participants who completely solve at least one issue under the OpenForce category, will be provided the certificate of recognition from Codeflow. ",
            option2 : "2. Special goodies/swags/cash prizes are mentioned in the prizes section.",
            option3 : "3. There will be various mini-events and quizzes throughout the contribution period, whose winners will get cash prizes, cool goodies, and swags.",
            open: false,
        },
        {
            question: "What is the procedure to participate in Openforce 2022?",
            answer: "You have to first get yourself registered for Openforce 2022, then join discord (as all organizations, mentors, maintainers will be on Codeflow discord for one on one mentorship) then subscribe to Codeflow youtube channel for live sessions/webinars. You will be given a 20-30 days time period to submit your PRs in the form provided for the leaderboard after panel mentorship. Check timeline for the same.",
            open: false,
        },
        {
            question: "Where I can get more details?",
            answer: "For more details refer",
            option2: "1. D2C https://dare2compete.com/workshop/openforce-2022-codeflow-organisation-252247",
            option3 : "2. Discord (24x7): https://discord.com/invite/t4UBDWmv",
            open: false,
        }
    ]);

    return (
        <>
            <Heading id="faqclick" name="FAQs"/>
            <div className='faqcont'>
                <div className="faqs">
                    {faqs.map((faq, i) => (
                        <FAQ
                            key={i}
                            faq={faq}
                            index={i}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
