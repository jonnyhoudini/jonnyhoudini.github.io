import React from 'react';
import '../static/Navbar.css';
import { Link } from "react-router-dom";

const NavbarComponent = () => {

    const handleClick = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    return (
        <>
            <nav className="topnav" id="myTopnav">

                <Link to="/" className="logo">JHM</Link>
                <Link to="/about">About Me</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/projects">Projects</Link>
                <a href="javascript:void(0);" className="icon" onClick={handleClick}>
                    <i className="fa fa-bars"></i>
                </a>
            </nav>

        </>
    )
}

export default NavbarComponent