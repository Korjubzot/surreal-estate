import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import "../styles/propertycardgrid.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then(({ data }) => {
        setProperties(data);
      })
      .catch(() => {
        setAlert({ message: "Error: Failed to Load, idiot." });
      });
  }, []);

  const dummyData = {
    title: "2 bed city center",
    city: "Manchester",
    type: "Flat",
    bedrooms: 2,
    bathrooms: 2,
    price: 500000,
    email: "john.smith@gmail.com",
  };

  return (
    <div className="property-card-grid">
      {properties.map((property) => (
        <div className="item">
          <PropertyCard key={property._id} {...property} />{" "}
        </div>
      ))}
    </div>
  );
};

export default Properties;
