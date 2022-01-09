import React from "react";
import "./styles/faq.css";

function FAQ({ faq,index }) {
    const toggle = () => {};
    return (
        <>
            <div className="accordion" id="accordionExample" style={{marginTop:"12px"}}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={"#collapseOne-"+index}
                            aria-expanded={false}
                            aria-controls="collapseOne"
                        >
                            {faq.question}
                        </button>
                    </h2>
                    <div
                        id={"collapseOne-"+index}
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FAQ;
