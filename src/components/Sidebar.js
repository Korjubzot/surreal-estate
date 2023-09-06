/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/sidebar.css";
import qs from "qs";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const buildQueryString = (operation, valueObj) => {
    const { search } = location;

    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    navigate(newQueryString);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <ul className="sidebar">
        <li>
          <Link
            to={buildQueryString("query", { city: "Manchester" })}
            className="sidebar-link"
          >
            Manchester
          </Link>
        </li>
        <li>
          <Link
            to={buildQueryString("query", { city: "Leeds" })}
            className="sidebar-link"
          >
            Leeds
          </Link>
        </li>
        <li>
          <Link
            to={buildQueryString("query", { city: "Sheffield" })}
            className="sidebar-link"
          >
            Sheffield
          </Link>
        </li>
        <li>
          <Link
            to={buildQueryString("query", { city: "Liverpool" })}
            className="sidebar-link"
          >
            Liverpool
          </Link>
        </li>
        <li>
          <Link
            to={buildQueryString("sort", { price: -1 })}
            className="sidebar-link"
          >
            Price Descending
          </Link>
        </li>
        <li>
          <Link
            to={buildQueryString("sort", { price: 1 })}
            className="sidebar-link"
          >
            Price Ascending
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
