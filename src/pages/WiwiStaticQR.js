import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { StyledHeader } from "../Style.js";

export default function WiwiStaticQR() {
  return (
    <div style={{
        backgroundImage: "url(../staticsite.gif)",
        backgroundPosition: "center",
        backgroundSize: "contain",
        height: "100vh",
    }}>

      <Helmet>
        <title>We want our Mensa back!</title>
      </Helmet>
      <Header/>

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

