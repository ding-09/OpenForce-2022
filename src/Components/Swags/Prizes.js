import react from 'react';
import "../styles/Prices.css"

export default function Prices(props) {
    return (
            <div className="subcont">
                <div class="sopnsedText">Sponsored By</div>
                <center><a href={props.data.website} target="_blank"><img src={props.data.icon} alt="logo" className="prizelogo" /></a></center>
                <div className="prizelower">
                    {props.data.prices[0]}
                </div>
            </div>
    );

}