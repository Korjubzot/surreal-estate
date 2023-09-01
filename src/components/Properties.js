import React from "react";
import PropertyCard from "./PropertyCard";
import "../styles/propertycardgrid.css";

const Properties = () => {
  return (
    <div className="property-card-grid">
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
    </div>
  );
};

export default Properties;
