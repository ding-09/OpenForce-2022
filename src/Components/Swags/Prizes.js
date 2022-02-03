import react from 'react';
import "../styles/Prices.css"

export default function Prices(props) {
        return(
            <ol>
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
