import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
    StyledHeader,
    StyledOverlay,
    StyledImage,
} from "../Style.js";

import mensahdvid from "../media/mensahd.mp4"
import mensamobilevid from "../media/mensamobile.mp4"



export const Vid = () => {
    if (window.width < 721) {
        return (<video id={'vide'} autoPlay loop muted style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "100vh",}} src={mensamobilevid} playsInline={true}/>)
    } else {
        console.log(1)
        return (<video id={'vide'} autoPlay loop muted style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "100vh",}} src={mensahdvid}/>)
    }
}

export default function WiwiMainPage(props) {
    return (
        <div>
            <Helmet>
                <title>We want our Mensa back!</title>
            </Helmet>
            <IntroHeader/>
            <Vid/>
            <IntroOverlay {...props}/>
        </div>
    );
}

function IntroHeader() {
    return (
        <StyledHeader>
            <nav>
        <span className="logo">
          An Website of StuRa <b>ˣ</b> Ju.
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

