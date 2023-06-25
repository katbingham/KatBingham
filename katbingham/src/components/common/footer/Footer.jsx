import React from "react";
import "./Footer.css"

import Github from "./buttons/github/Github";
import Instagram from "./buttons/instagram/Instagram";
import Linkedin from "./buttons/linkedin/Linkedin";

export default function Footer() {
    return (
        <>
        <div className="wrapper">
            <div className="social-links">
                <a id="github-link" target="_blank" href="https://github.com/katbingham" style={{marginRight: "10px"}}> <Github/></a> 
                <a id="linkedin-link" target="_blank" href="https://www.linkedin.com/in/kathryn-bingham-a56796a4/" style={{marginRight: "10px"}}> <Linkedin/></a>
                <a id="instagram-link" target="_blank" href="https://www.instagram.com/kat.bing/" style={{marginRight: "10px"}}> <Instagram/></a>
            </div>
            <hr color="#121621"/>
            <div>
                &copy; 2022 Kathryn Bingham <br/> this site was lovingly built using both digital and mixed media
            </div>
        </div>
        </>
    )
}