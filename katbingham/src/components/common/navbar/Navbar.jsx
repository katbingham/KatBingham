import React from "react";

import "./Navbar.css";
import About from "../../../pages/About";
import Resume from "../../../pages/Resume";
import Contact from "../../../pages/Contact";

export default function Navbar() {
    return (
        <>
        <nav className="nav">
            <a href="/Home" className="site-title">Kat Bingham</a>
            <ul>
                <li className="active"> 
                <a href="/About" className="navbar-about">About</a>
                </li> 
                <li>
                <a href="/Resume" className="navbar-resume">Resume</a>
                </li> 
                <li>
                <a href="/Contact" className="navbar-contact">Contact</a>
                </li>
            </ul>
        </nav>
        </>
    )
}