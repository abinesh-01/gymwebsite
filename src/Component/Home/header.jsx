import React from "react";
import "./header.css"

const Header = () =>{
    return(
        <div className="header">
            <div className="logo">
                <h1>THE FIT CLUB</h1>
            </div>
            <div className="menu">
                <ul>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Programs</li></a>
                    <a href="#"><li>Why us</li></a>
                    <a href="#"><li>Plans</li></a>  
                    <a href="#"><li>Testimonalals</li></a>  
                </ul>
            </div>
        </div>
    )
}
export default Header;
