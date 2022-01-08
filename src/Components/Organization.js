import React, { useEffect, useState } from 'react'
import Heading from './Heading';
import OrganizationCard from './OrganizationCard'
import "./styles/Organization.css"

export default function Organization(props) {
    const [organization, setorganization] = useState([]);
    useEffect(()=>{
        const getOrg = async ()=>{
            const url = `https://openforce2022.herokuapp.com/api/org/`;
            const resp = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
            });

            var data = (await resp.json()).data;
            setorganization(data);
        }
        getOrg();
    },[])

    return (
        <>
            <Heading name="Open Source Ground"/>
            <div className="orgSupCont">
                <div className="orgContainer">
                    {
                        organization.map((elem)=>{
                            return <OrganizationCard data={elem} key={elem._id}/>
                        })
                    }
                    {/* <div className="bePartofCont">
                        <div className="bePartOf">Be part of Openforce
                        <div className="bePartOfTwo">Be part of Openforce</div>
                        </div>
                        
                    </div> */}
                </div>
            </div>
        </>
    )
}
