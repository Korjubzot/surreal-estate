import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/propertycardgrid.css";
import Sidebar from "./Sidebar";

const Properties = () => {
  const initialState = {
    alert: {
      message: "",
      isError: false,
    },
  };
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then(({ data }) => {
        setProperties(data);
      })
      .catch(() => {
        setAlert({ message: "Error: Failed to Load, idiot.", isError: true });
      });
  }, []);

  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((err) => console.error(err));
  }, [search]);

  return (
    <div className="property-card-grid">
      <Sidebar className="sidebar" />
      <Alert message={alert.message} error={alert.isError} />
      {properties.map((property) => (
        <div className="item">
          <PropertyCard key={property._id} {...property} />{" "}
        </div>
      ))}
    </div>
  );
};

export default Properties;
