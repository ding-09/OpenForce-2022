import React, { useEffect } from "react";
import ChallengeCard from "./ChallengeCard";
import challenges from "./ChallengeDesc";

export default function ChallengeContainer() {
    useEffect(() => {
        document.getElementById("root").scrollTop = 0;
    }, [])
    
    return (
        <section className="challenge">
            <>
                <h1>
                    Challenges <i className="fab fa-angellist"></i>
                </h1>
                <p className={"swags-information"}>
                Complete the challenge provided by our prestigious Sponsors and Open Source Organization to get awesome prizes and badges.
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
