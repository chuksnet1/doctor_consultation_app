import React, { useState } from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
import call from "../Asset/Image/call.jpeg"
import Email from "../Asset/Image/email.png"
import Location from "../Asset/Image/location.png"



const Navbar = () => {

    const [menu, setMenu] = useState("home");
    const [page, setPage] = useState("home");

    return (
        <div>
            <div className="navbar">
                <div className="nav-logo" style={{}}>

                    <p>DOCTORAiD</p>
                </div>
                <ul className="nav-menu">
                    <li onClick={() => { setMenu("home"); }}> {menu === "home" ? <hr /> : <></>}</li>
                    <li onClick={() => {setMenu("phone"); }}><img style={{height:"20px", width: "20px"}} src={call}></img><Link style={{ textDecoration: "none" }} to="/phone">+447867346997</Link>{menu === "phone" ? <hr /> : <></>}</li>
                    <li onClick={() => {setMenu("email");}}><img style={{height:"20px", width: "20px"}} src={Email}></img><Link style={{ textDecoration: "none" }} to="/email"> example@doctoraid.com</Link>{menu === "email" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("address"); }}><img style={{height:"20px", width: "20px"}} src={Location}></img><Link style={{ textDecoration: "none" }} to="/address"> 13 mongomentry park</Link>{" "}{menu === "address" ? <hr /> : <></>} </li></ul>
                <div className="nav-login-cart">
                    {/* <Link to="/login">
                        <button>login</button>
                    </Link>
                    <Link to="/cart">
                        <img
                            src
                            style={{ height: "50px", width: "50px" }}
                            alt=""
                        ></img>
                    </Link> */}
                    {/* <div className="nav-cart-count"></div> */}
                </div>
            </div>
            <div className="nav-bar-under">
                <ul className="under-nav">
                    <li onClick={()=>setPage("home")}><Link style={{textDecoration: "none"}} to="/">Home</Link> {page === "home"? <hr style={{ margin: "0px"}}/> : <></>}</li>
                    <li onClick={()=>setPage("consult")}><Link style={{textDecoration: "none"}} to={"/chat"}>Consultation</Link> {page === "consult"? <hr style={{ margin: "0px"}}/> : <></>} </li>
                    <li>Doctors</li>
                    <li>Location</li>
                    <li>Services</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;