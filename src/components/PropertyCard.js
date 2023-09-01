import React from "react";

const PropertyCard = () => {
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
    <div className="property-card">
      <h4 className="title-property-card">{dummyData.title}</h4>
      <h5 className="type-city">
        {dummyData.type} - {dummyData.city}
      </h5>
      <h5 className="bathrooms">{dummyData.bathrooms} bathrooms</h5>
      <h5 className="bedrooms">{dummyData.bedrooms} bedrooms</h5>
      <h5 className="price">£{dummyData.price}</h5>
      <h5 className="email">
        <a href={`mailto:${dummyData.email}`}>Contact</a>
      </h5>
    </div>
  );
};

export default PropertyCard;
