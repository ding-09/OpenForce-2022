import React, { useEffect, useState } from 'react'
import orgData from '../config/Organization';
import Heading from './Heading';
import OrganizationCard from './OrganizationCard'
import "./styles/Organization.css"

export default function Organization(props) {
    const [organization, setorganization] = useState(orgData);

    return (
        <div id="issueLink" className='component-container'>
            <Heading name="Open Source Ground"/>
            <div className="orgSupCont">
                <div className="orgContainer">
                    {
                        organization.map((elem)=>{
                            return <OrganizationCard data={elem} key={elem.name}/>
                        })
                    }
                    
                    {/* <div className="bePartofCont">
                        <div className="bePartOf">Be part of Openforce
                        <div className="bePartOfTwo">Be part of Openforce</div>
                        </div>
                        
                    </div> */}
                </div>
            </div>
        </div>
    )
}
