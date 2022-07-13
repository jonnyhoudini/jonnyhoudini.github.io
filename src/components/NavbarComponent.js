import React from 'react';
import '../static/Navbar.css';

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
                <a href="#" className="logo">JHM</a>
                <a href="#">About Me</a>
                <a href="#">Skills</a>
                <a href="#">Projects</a>
                <a href="javascript:void(0);" className="icon" onClick={handleClick}>
                    <i className="fa fa-bars"></i>
                </a>
            </nav>

        </>
    )
}

export default NavbarComponent