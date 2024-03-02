import React from "react";
import "./Services.css"



const ServiceItem = (props) => {
    return (
        <div className="service-container">
            <div className="img-container">
                <img src={props.image} alt=""></img>
            </div>
            <div className="text-box">
                <h2>{props.Title}</h2>
                <p>{props.subTitle}</p>
            </div>
        </div>
    )
}

export default ServiceItem;