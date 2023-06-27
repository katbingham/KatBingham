import React, { useState } from "react";
import Githubimg from "../../../../../img/buttons/icon-github.png";
import GithubHover from "../../../../../img/buttons/icon-github-hover.png";

export default function Github() {
    const [over, setOver] = useState(false);
    return (
        <>
        <div className="github"
            onMouseOver={() => setOver(true)}
            onMouseOut={() => setOver(false)}>
                <img
                src={over ? GithubHover : Githubimg}
                alt="Github Logo"
                width="48px"
                />
        </div>
        </>
    )
}