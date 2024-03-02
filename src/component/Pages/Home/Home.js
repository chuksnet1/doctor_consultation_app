import React from "react";
import Slidebar from "../../Slidebar/Slidebar";
import Attestation from "../../Attestation/Attestation";
import Enquiry from "../../Enquiry/Enquiry";
import Whatwedo from "../../WhatWeDo/Whatwedo";
import Services from "../../Services/Services";
import Testimonial from "../../Testimonial/Testimonial";
import Companies from "../../Companies/Companies";
import Footer from "../../Footer/Footer";
import ChatBot from "../../ChatBot/ChatBot";



const Home =()=>{
    return(
        <div>
            <Slidebar/>
            <Attestation/>
            <Enquiry/>
            <Whatwedo/>
            <Services/>
            <Testimonial/>
            <Companies/>
            <Footer/>  
        </div>
    )
}

export default Home;