import React, { useState } from "react";
import "../styles/addproperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bedrooms: "",
      bathrooms: "",
      price: "",
      email: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Title
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="city">
          City
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="manchester">Manchester</option>
            <option value="leeds">Leeds</option>
            <option value="sheffield">Sheffield</option>
            <option value="liverpool">Liverpool</option>
          </select>
        </label>

        <label htmlFor="type">
          Type
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="flat">Flat</option>
            <option value="detached">Detached</option>
            <option value="semi-detached">Detached</option>
            <option value="terraced">Terraced</option>
            <option value="end-of-terrace">End of Terraca</option>
            <option value="cottage">Cottage</option>
            <option value="bungalow">Bungalow</option>
          </select>
        </label>

        <label htmlFor="bedrooms">
          Bedrooms
          <input
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          />
        </label>

        <label htmlFor="bathrooms">
          Bathrooms
          <input
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          />
        </label>

        <label htmlFor="price">
          Price
          <input
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </label>

        <button title="Add a property" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
