/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/sidebar.css";
import qs from "qs";

const Sidebar = () => {
  const buildQueryString = (operation, valueObj) => {
    const { search } = useLocation();

    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };
  };

  return (
    <ul className="sidebar">
      <li>
        <Link to={`/?query={"city": "Manchester"}`} className="sidebar-link">
          Manchester
        </Link>
      </li>
      <li>
        <Link to={`/?query={"city": "Leeds"}`} className="sidebar-link">
          Leeds
        </Link>
      </li>
      <li>
        <Link to={`/?query={"city": "Sheffield"}`} className="sidebar-link">
          Sheffield
        </Link>
      </li>
      <li>
        <Link to={`/?query={"city": "Liverpool"}`} className="sidebar-link">
          Liverpool
        </Link>
      </li>
      <li>
        <Link to="/" className="sidebar-link">
          Price Descending
        </Link>
      </li>
      <li>
        <Link to="/" className="sidebar-link">
          Price Ascending
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
