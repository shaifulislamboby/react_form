import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import Formula from "./Formula";

const Startseite = props => {
  let pageLoad;
  if (props.type === "Formula") {
    pageLoad = <Formula props />;
  } else {
    // Load Default
  }
  return (
    <div className="beforeLogin" type={props.type}>
      <nav className="nav nav-bar d-flex align-items-center py-2">
        <a id="logo" href="/" className="m-0">
          Aufgaben Startseite
        </a>
        <div className="login-links ml-auto">
          <NavLink to="/formula">Formula</NavLink>
          <br />
          <NavLink to="/danke"></NavLink>
        </div>
      </nav>
      <div id="beforeLoginContainer">{pageLoad}</div>
    </div>
  );
};

export default withRouter(Startseite);
