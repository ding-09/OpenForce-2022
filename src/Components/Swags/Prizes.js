import react from 'react';
import "../styles/Prices.css"

export default function Prices(props) {
        return(
            props.data.prices.map((el)=>{
                return (
                    <div className='card-subtitle'>
                        {el}
                    </div>
                )
            })
        );
}
