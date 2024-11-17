import React from "react";
import About from "../../../pages/About";
import Resume from "../../../pages/Resume";
import Contact from "../../../pages/Contact";

export default function Navbar() {
    var a = document.querySelectorAll(".nav li");
    for (var i = 0, length = a.length; i < length; i++) {
    a[i].onclick = function() {
        var b = document.querySelector(".nav li.active");
        if (b) b.classList.remove("active");
        this.parentNode.classList.add('active');
    };
    }
    return (
        <>
        <nav className="nav">
            <a href="/Home" className="site-title">Kat Bingham</a>
            <ul>
                <li> 
                <a onClick={() => console.log('Button clicked!')} href="/About" className="navbar-about">About</a>
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