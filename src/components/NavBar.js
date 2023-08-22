import React from "react";
import "../styles/navbar.css";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="surreal estate logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">placeholder1</li>
        <li className="navbar-links-item">placeholder2</li>
      </ul>
    </div>
  );
};

export default NavBar;
