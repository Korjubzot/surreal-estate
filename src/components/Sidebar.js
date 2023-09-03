import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <Link to={`/?query={"city": "Manchester"}`}>Manchester</Link>
      </div>
      <div>
        <Link to={`/?query={"city": "Leeds"}`}>Leeds</Link>
      </div>
      <div>
        <Link to={`/?query={"city": "Sheffield"}`}>Sheffield</Link>
      </div>
      <div>
        <Link to={`/?query={"city": "Liverpool"}`}>Liverpool</Link>
      </div>
    </div>
  );
};

export default Sidebar;
