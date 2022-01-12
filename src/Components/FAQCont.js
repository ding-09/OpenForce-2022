import React, { useState } from 'react'
import FAQ from './FAQ';
import Heading from './Heading';
import "./styles/FAQnew.css"

export default function FAQCont() {

    const [faqs, setfaqs] = useState([
        {
            question: "Who can participate in OpenForce 2022?",
            answer: "Everyone can participate weather you are a college, school student, a freelance developer or a professional one, person with any kind of profile can participate in this event. You just need to have a will to learn and contribute to such great organisations.",
            open: true,
        },
        {
            question: "What would be the level of issues?",
            answer: "Level of issues will be good-first issues, beginner, medium/intermediate, hard. Dont worry even if you are a beginner. There will be ample amount of beginner friendly issues with which you can start your opensource journey. ",
            open: false,
        },
        {
            question: "What are the perks of participating in this event?",
            answer: "1. All the participants who completely solve atleast one issue under the OpenForce category, will be provided the certificate of recognition from Codeflow. ",
            option2 : "2. Special goodies/swags/cash prizes are mentioned in the prizes section.",
            option3 : "3. There will be various mini-events and quizzes throughout the contribution period, whose winners will get cash prizes, cool goodies  and schwags.",
            open: false,
        },
        {
            question: "What is procedure to participate in OpenForce 2022",
            answer: "You have to first get yourself registered for OpenFroce 2022, then join discord (as all organisation, mentor, maintainers will be on codeflow discord for one on one mentorship) then subscribe to codeflow youtube channel for live sessions/webminars. You will be given 20-30 days time period to submit your PRs in the form provided for leaderboard after panel mentorship. Check timeline for the same.",
            open: false,
        },
        {
            question: "Where I can get more details?",
            answer: "For more details refer",
            option2: "1. D2C https://dare2compete.com/workshop/openforce-2022-codeflow-organisation-252247",
            option3 : "2. Discord (24x7) : https://discord.com/invite/t4UBDWmv",
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
