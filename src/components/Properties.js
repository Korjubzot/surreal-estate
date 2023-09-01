import React from "react";
import PropertyCard from "./PropertyCard";
import "../styles/propertycardgrid.css";

const Properties = () => {
  const propertyData1 = {
    title: "2 bed city center",
    city: "Manchester",
    type: "Flat",
    bedrooms: 2,
    bathrooms: 2,
    price: 500000,
    email: "john.smith@gmail.com",
  };

  const propertyData2 = {
    title: "1 bed studio!!",
    city: "Leeds",
    type: "Flat",
    bedrooms: 1,
    bathrooms: 1,
    price: 250000,
    email: "john.smith@gmail.com",
  };

  return (
    <div className="property-card-grid">
      <PropertyCard {...propertyData1} />
      <PropertyCard {...propertyData2} />
    </div>
  );
};

export default Properties;
