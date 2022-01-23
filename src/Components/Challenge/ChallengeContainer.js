import React from "react";
import ChallengeCard from "./ChallengeCard";
import challenges from "./ChallengeDesc";

export default function ChallengeContainer() {
    return (
        <section className="challenge">
            <>
                <h1>
                    Challenges <i className="fab fa-angellist"></i>
                </h1>
                <p className={"swags-information"}>
                    Complete the challenge provided by our prestigious Sponsors and Open Source Orginization tp get awsome prizes and bedges.
                </p>
                <div className="swagborder">
                    <div className={"swags-item-container"}>
                        {
                            challenges.map((elem, ind)=>{
                                return (<ChallengeCard data={elem} key={ind}/>)
                            })
                        }
                    </div>
                </div>
            </>
        </section>
    );
}
