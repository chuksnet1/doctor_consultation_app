import React from "react";
import "./Slidebar.css"
import location from "../Asset/Image/location.png"
import { Carousel } from "react-bootstrap";
import slide from "../Asset/Image/nurse.png"
import slide2 from "../Asset/Image/hospital.png"
import slide3 from "../Asset/Image/theater.png"
import SlideItem from "./SlideItem";
import doctoImg from "../Asset/Image/doc11.webp"
import docLogo from "../Asset/Image/doclog.jpeg"




const Slidebar = () => {
    return (
        <>
            <div className="slide-bar">
                <Carousel slide={false}>
                    <Carousel.Item>
                        <img src={slide}></img>
                        {/* <ExampleCarouselImage text="First slide" /> */}
                        <Carousel.Caption style={{ color: "black" }}>
                            <h3>We Give Hope To You</h3>
                            <p>Our Mission Is To Ensure That No One Dies Un-natural.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={slide2}></img>
                        <Carousel.Caption style={{ color: "rgb(35, 32, 114)" }}>
                            <h3>State Of the Art Facility</h3>
                            <p>Comfort Even As You Recover</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={slide3}></img>
                        <Carousel.Caption >
                            <h3>Well Equipped Medical Facility</h3>
                            <p style={{ fontWeight:"bold" }}> 
                                We Have State Of The Art Medical Equipment To Empower Our Our Doctors
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="slide-bar-second-top">
                <div className="slide-bar-second">
                    <div className="slide-overall">
                        <div className="slide-mall-img">
                            <SlideItem onClick={() => { console.log("we are there") }} buttonTitle={"Chat a DoctorAI"} image={doctoImg} link="chat" linkText="Chat a Doc" linkText2="Call A Doc" title="Talk To a Doctor" />
                        </div>
                        <div className="slide-mall-img">
                            <SlideItem image={location} buttonTitle={"Check All Location"} title="Find Nearest Location" linkText="Get Location" linkText2="Track A Doc"/>
                        </div>
                        <div className="slide-mall-img">
                            <SlideItem image={docLogo} buttonTitle={"Get Diagnosis"} title="Get A Diagnosis" linkText="Get Result" linkText2="Dispute Result" linkText3="Change Result"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slidebar;