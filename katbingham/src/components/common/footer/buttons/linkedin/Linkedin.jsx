import React, { useState } from "react";
import LinkedinImg from "../../../../../img/buttons/icon-linkedin.png";
import LinkedinHover from "../../../../../img/buttons/icon-linkedin-hover.png";

export default function Linkedin() {
    const [over, setOver] = useState(false);
    return (
        <>
        <div className="linkedin"
            onMouseOver={() => setOver(true)}
            onMouseOut={() => setOver(false)}>
                <img
                src={over ? LinkedinHover : LinkedinImg}
                alt="Linkedin Logo"
                width="48px"
                />
        </div>
        </>
    )
}