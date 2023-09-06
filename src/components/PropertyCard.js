/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSink,
  faBed,
  faSterlingSign,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const PropertyCard = (props) => {
  const { title, city, type, bedrooms, bathrooms, price, email } = props;

  return (
    <div className="property-card">
      <h4 className="title-property-card">{title}</h4>
      <h5 className="type-city">
        {type} - {city}
      </h5>
      <h5 className="bathrooms">
        <FontAwesomeIcon icon={faBed} /> {bathrooms}
      </h5>
      <h5 className="bedrooms">
        <FontAwesomeIcon icon={faSink} /> {bedrooms}
      </h5>
      <h5 className="price">
        <FontAwesomeIcon icon={faSterlingSign} /> {price}
      </h5>
      <h5 className="email">
        <FontAwesomeIcon icon={faEnvelope} />
        &nbsp;
        <a href={`mailto:${email}`}>Contact</a>
      </h5>
    </div>
  );
};

export default PropertyCard;
