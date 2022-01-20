import react from 'react';
import "../styles/Prices.css"

export default function Prices(props) {
    return (
        <div className="pricescont">
            <div className="subcont">
                <center><img src={props.data.icon} alt="logo" className="prizelogo" /></center>
                <div className="prizelower">
                    <p className="prizepara">{props.data.p1}</p>
                    <p className="prizepara">{props.data.p2}</p>
                    <div className="pricesdesc">
                        <h3>Prizes</h3>
                        <ul>
                            {
                                props.data.prices.map((elem) => {
                                    return <li key={elem}>{elem}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

}