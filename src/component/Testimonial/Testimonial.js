import React from "react";
import "./Testimonial.css"
import imageitem from "../Asset/Image/email.png"



const Testimonial = () => {
    return (
        <div className="Testimonial-container">
            <div className="tetimonial-top">
                <h1 id="testi-h1">Satisfied Patient</h1>
                <h2>"</h2>
                <h1>We Are always accepting new patient. We believe that health is wealth and no one should die unnecessarily before their time and God want us all to live long</h1>
            </div>
            <div className="testimonial-bottom">
                <img src={imageitem}></img>
                <div>
                    <h1>JOHN JERRY</h1>
                    <h2>CEO OF MADDISON</h2>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;