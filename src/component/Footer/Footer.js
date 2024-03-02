import React from "react";
import "./Footer.css"



const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-top">
                <div className="foot-left">
                    <h1>DoctorAid</h1>
                </div>
                <div className="foot-right">
                    <ul><th>HEAD OFFICE</th>
                        <li>14 Arawalo str Edinburg</li>
                        <li>Mon-Thu: 8a.m to 4pm</li>
                        <li>Mon-Thu: 8a.m to 4pm</li>
                        <p>info@doctoraid.com</p>
                        <p>+44 0784 2781 899</p></ul>
                    <ul>
                        <th>USEFUL LINKS</th>
                        <li>About</li>
                        <li>Doctors</li>
                        <li>Services</li>
                        <li>Patient</li>
                        <li>Contact</li>
                    </ul>
                    <ul>
                        <th>DEPARTMENT</th>
                        <li>About</li>
                        <li>Doctors</li>
                        <li>Services</li>
                        <li>Patient</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div id="foot-tech">
                    <p>@2023 DoctorAid. All right reserved- Made by Jerach Tech Ltd</p>
                </div>
                <div>
                    <ul id="foot-private">
                        <li>Terms and Conditions</li>
                        <li>Privacy</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;