import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { StyledHeader } from "../Style.js";

export default function WiwiStaticQR() {
  return (
    <div style={{
       // backgroundImage: "url(../staticsite2.gif)",
       backgroundColor: "rgb(21,201,243)",
    }}>

      <Helmet>
        <title>We want our Mensa back!</title>
      </Helmet>
      <Header/>
        <img src={"../staticsite2.gif"} style={{
            objectPosition: "center",
            size: "contain",
            height: "100vh",
            }} alt={"QR-CODE FOR SCANNING"}/>
    </div>
  );
}

function Header() {
  return (
    <StyledHeader>
      <nav>
        <span className="logo" style={{color: 'black'}}>
            <NavLink to="/">
                BACK TO THE MENSA
            </NavLink>
        </span>
      </nav>
    </StyledHeader>
  );
}

