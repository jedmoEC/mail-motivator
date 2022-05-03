import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
    StyledHeader,
    StyledOverlay,
    StyledImage,
} from "../Style.js";

export default function WiwiMainPage(props) {
    return (
        <div

        >
            <Helmet>
                <title>We want our Mensa back!</title>
            </Helmet>
            <IntroHeader/>

            <IntroOverlay {...props}/>
        </div>
    );
}

function IntroHeader() {
    return (
        <StyledHeader>
            <nav>
        <span className="logo">
          An Website of StuRa <b>ˣ</b> J.
        </span>
            </nav>
        </StyledHeader>
    );
}

function IntroOverlay(props) {
    return (
        <StyledOverlay>
            <nav>
                <header>We want our Mensa back!</header>
                <ul>
                    {props.pages.map((page) => (
                        <li key={page.route}>
                            <NavLink to={page.route}>
                                <StyledImage src={page.thumb} />
                                <p>{page.title}</p>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </StyledOverlay>
    );
}

