import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import doctoImg from "../Asset/Image/doc11.webp"
import { Link } from "react-router-dom";



const SlideItem =(props)=>{
    return(
        <>
        <div className="slide-small-img">
                            <img style={{ height: "20px", width: "20px" }} src={props.image}></img>
                            <h1>{props.title}</h1>
                        </div>
                        <div > 
                            <Dropdown >
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {props.buttonTitle}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={props.onClick} href="#/action-1"><Link style={{textDecoration:"none"}} to={props.link} >{props.linkText}</Link></Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">{props.linkText2}</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">{props.linkText3}</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
        </>
    );
}

export default SlideItem;