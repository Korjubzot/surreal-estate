import React from "react";

const PropertyCard = (props) => {
  const { title, city, type, bedrooms, bathrooms, price, email } = props;

  return (
    <div className="property-card">
      <h4 className="title-property-card">{title}</h4>
      <h5 className="type-city">
        {type} - {city}
      </h5>
      <h5 className="bathrooms">{bathrooms} bathrooms</h5>
      <h5 className="bedrooms">{bedrooms} bedrooms</h5>
      <h5 className="price">£{price}</h5>
      <h5 className="email">
        <a href={`mailto:${email}`}>Contact</a>
      </h5>
    </div>
  );
};

export default PropertyCard;
