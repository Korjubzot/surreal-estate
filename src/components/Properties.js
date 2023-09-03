import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/propertycardgrid.css";

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

  return (
    <div className="property-card-grid">
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
