import React, { useState } from 'react'
import FAQ from './FAQ';
import Heading from './Heading';
import "./styles/FAQnew.css"

export default function FAQCont() {

    const [faqs, setfaqs] = useState([
        {
            question: "This is a sample faq long context This is a sample faq long context This is a sample faq long contextThis is a sample faq long context This is a sample faq long context This is a sample faq long context This is a sample faq long context This is a sample faq long contextThis is a sample faq long contextThis is a sample faq long contextThis is a sample faq long context",
            answer: "This is a sample answer",
            open: true,
        },
        {
            question: "This is yet again a sample faq",
            answer: "Yes again a sample answer",
            open: false,
        },
        {
            question: "This is yet again a sample faq",
            answer: "Yes again a sample answer",
            open: false,
        },
        {
            question: "Oops again a sample faq",
            answer: "sample answer cheers :)",
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
