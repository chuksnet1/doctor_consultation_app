import React from "react";
import "./Whatwedo.css"
import med_professn from "../Asset/Image/med-profes.png"
import Two4hour from "../Asset/Image/247med.png"
import med_lab from "../Asset/Image/lab-med.png"
import consultation from "../Asset/Image/consultation.png"





const Whatwedo = () => {
    return (
        <div className="whatwedo-container">
            <div className="whatwedo-top">
                <h2>We Help You</h2>
                <h1>Get Well Soon!</h1>
            </div>
            <div className="whatwedo-image">
                <div className="wedo-imgages-1">
                    <img src={Two4hour}></img>
                    <h1>24 Hours Sercice</h1>
                </div>
                <div className="wedo-imgages-2">
                    <img src={med_professn}></img>
                    <h1>Medical Service</h1>
                </div>
                <div className="wedo-imgages-3">
                    <img src={med_lab}></img>
                    <h1>Laboratory Service</h1>
                </div>
                <div className="wedo-imgages-4">
                    <img src={consultation}></img>
                    <h1>Consultation</h1>
                </div>
            </div>
        </div>
    )
}

export default Whatwedo;