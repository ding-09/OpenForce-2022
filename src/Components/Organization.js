import React, { useContext } from 'react'
import BaseContext from '../Context/BaseContext'
import OrganizationCard from './OrganizationCard'
import "./styles/Organization.css"

export default function Organization(props) {
    const context = useContext(BaseContext);

    return (
        <>
            <div className="divider">
                <div className="dividerHorBar"></div>
                <div className="orgHeading">Our Sponsors</div>
            </div>
            <div className="orgContainer">
                {
                    context.organization.map((elem)=>{
                        return <OrganizationCard data={elem} key={elem._id}/>
                    })
                }
                <div className="bePartofCont">
                    <div className="bePartOf">Be part of Openforce
                    <div className="bePartOfTwo">Be part of Openforce</div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
