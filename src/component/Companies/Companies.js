import React from "react";
import pfizer from "../Asset/Image/pfizer.png"
import fitbit from "../Asset/Image/Fitbit-Logo.png"
import gsk from "../Asset/Image/gsk-logo.png"
import pharma from "../Asset/Image/pharma-logo.avif"
import medcare from "../Asset/Image/medcare-logo.jpeg"
import "./Companies.css"


const Companies =()=>{
    return(
        <div className="companies-container">
            <div className="companies-imag">
                <img src={pfizer}></img>
                <img src={fitbit}></img>
                <img src={gsk}></img>
                <img src={pharma}></img>
                <img src={medcare}></img>
            </div>
        </div>
    )
}

export default Companies;