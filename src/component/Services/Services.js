import React from "react";
import "./Services.css"
import stetoscope from "../Asset/Image/doc stetoscope.jpeg"
import heart from "../Asset/Image/heart.jpeg"
import teeth from "../Asset/Image/teeth.jpeg"
import wheel from "../Asset/Image/wheel chair.jpeg"
import eye from "../Asset/Image/eye.jpeg"
import children from "../Asset/Image/children.jpeg"
import ServiceItem from "./SterviceItem";



const Services = () => {
    return (
        <div className="services-container">
            <div className="services-left">
                <div>
                    <h1>We Offer
                        Medical Services</h1>
                    <p>We specialize in a wide array of medical fields and have some of the best facilities.</p>
                </div>
                <div>
                    <h3>EMERGENCY CALL:</h3>
                    <h1>+44 78434 900 321</h1>
                </div>
            </div>
            <div className="services-right">
                    <ServiceItem image={stetoscope} Title="Primary Care" subTitle="Consulting"/>
                    <ServiceItem image={eye} Title="Eye Care" subTitle="Prescription Servives"/>
                    <ServiceItem image={children} Title="Pediatrics" subTitle="Pediatrics Specil Service"/>
                    <ServiceItem image={wheel} Title="Physical Therapy" subTitle="Rehabilitation services"/>
                    <ServiceItem image={heart} Title="General Health" subTitle="Diagnostic, tests"/>
                    <ServiceItem image={teeth} Title="Dental Care" subTitle="Orthodontics"/>             
            </div>
        </div>
    )
}

export default Services;