import React from "react";
import "./Attestation.css"
import docgroup from "../Asset/Image/doctorgroup.jpeg"


const Attestation =()=>{
    return(
        <div className="attestation-container">
            <div className="attestation-left">
                <img src={docgroup}></img>
            </div>
            <div className="attestation-right">
                <h1>20 Years Of </h1>
                <h1>Qualified Medical Practice</h1>
                <p>Our administrative and clinical team is second to none. We reiterates the pledge to help all and give hope to those who have lost hope. In this endeavor, while we have the best of an expert team of doctors taking care of the patients at one hand.</p>
            </div>
        </div>
    )
}

export default Attestation;