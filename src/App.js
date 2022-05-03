import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { GlobalStyle } from "./Style.js";

import WiwiMainPage from "./pages/WiwiMainPage.js";
import WiwiStaticQR from "./pages/WiwiStaticQR.js";
import WiwiMail from "./pages/WiwiMail.js";

const pages = [
  {
    title: "QR-Code-Static",
    route: "/wiwi/qr",
    source: WiwiStaticQR,
    thumb: "./qr.gif",
  },
  {
    title: "Send Mail",
    route: "/wiwi/mail",
    source: WiwiMail,
    thumb: "./mailicon.gif",
  },
];

function App() {

  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <GlobalStyle/>
        <Route exact path="/" render={() => <WiwiMainPage pages={pages} />} />
        {pages.map((page) => (
            <Route key={page.route} path={page.route} render={page.source} />
        ))}
      </BrowserRouter>
  );
}

export default App;

