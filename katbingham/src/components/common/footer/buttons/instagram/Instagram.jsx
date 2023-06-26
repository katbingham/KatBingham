import React, { useState } from "react";
import InstagramImg from "../../../../../img/buttons/icon-instagram.png";
import InstagramHover from "../../../../../img/buttons/icon-instagram-hover.png";

export default function Instagram() {
    const [over, setOver] = useState(false);
    return (
        <>
        <div className="instagram"
            onMouseOver={() => setOver(true)}
            onMouseOut={() => setOver(false)}>
                <img
                src={over ? InstagramHover : InstagramImg}
                alt="Instagram Logo"
                width="48px"
                />
        </div>
        </>
    )
}