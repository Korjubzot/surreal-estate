import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <div className="navbar" data-testid="navbar">
      <img className="logo" src={logo} alt="surreal estate logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">View All Properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/add-property">Add New Property</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
