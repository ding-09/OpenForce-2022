import react from 'react';
import "../styles/Prizes.css"

export default function Prices(props) {
        return(
            <ol id="PrizesComponent">
                {
                    props.data.prices.map((el)=>{
                        return (
                            <li className='card-subtitle'>
                                {el}
                            </li>
                        )

                    })
                }
            </ol>
        );
}
