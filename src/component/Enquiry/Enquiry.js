import React from "react";
import "./Enquiry.css"



const Enquiry = () => {
    return (
        <div className="enquiry-container">
            <div className="enquiry-left">
                <h2>Have An Emergency?</h2>
                <h1>Book Your Session</h1>
            </div>
            <div className="enquiry-right">
                <form className="enquiry-form">
                    <div className="entry-name">
                        <input type="text" placeholder="Your Name"></input>
                        <input type="text" placeholder="Your Phone"></input>
                    </div>
                    <div className="entry-email">
                        <input type="email" placeholder="Your Email"></input>
                        <input type= "text" placeholder="mm/dd/yyyy"></input>
                    </div>
                    <button>Book Now</button>
                </form>
            </div>
        </div>
    )
}

export default Enquiry;