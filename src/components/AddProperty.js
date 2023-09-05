import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import "../styles/addproperty.css";
import Alert from "./Alert";

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
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    axios
      .post("http://localhost:4000/api/v1/PropertyListing", fields)
      .then(() => {
        setAlert({
          message: "Property Added",
          isSuccess: true,
        });
      })
      .catch(() => {
        setAlert({
          message: "Error: please try again later",
          isSuccess: false,
        });
      });
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <form onSubmit={handleAddProperty}>
        <Alert message={alert.message} success={alert.isSuccess} />
        <div className="form-div">
          <label htmlFor="title">
            Title
            <input
              id="title"
              name="title"
              placeholder="2 bed city centre flat"
              value={fields.title}
              onChange={handleFieldChange}
              required
            />
          </label>
        </div>

        <div className="form-div">
          <label htmlFor="city">
            City
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
        </div>

        <div className="form-div">
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
              <option value="semi-detached">Semi-detached</option>
              <option value="terraced">Terraced</option>
              <option value="end-of-terrace">End of Terrace</option>
              <option value="cottage">Cottage</option>
              <option value="bungalow">Bungalow</option>
            </select>
          </label>
        </div>

        <div className="form-div-bathroom">
          <label htmlFor="bedrooms">
            Bedrooms
            <input
              type="number"
              min="1"
              max="6"
              placeholder="2"
              id="bedrooms"
              name="bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
              required
            />
          </label>

          <label htmlFor="bathrooms">
            Bathrooms
            <input
              type="number"
              min="1"
              max="6"
              placeholder="2"
              id="bathrooms"
              name="bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
              required
            />
          </label>
        </div>

        <div className="form-div">
          <label htmlFor="price">
            Price £
            <input
              type="number"
              id="price"
              name="price"
              placeholder="500,000"
              value={fields.price}
              onChange={handleFieldChange}
              required
            />
          </label>
        </div>

        <div className="form-div">
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john.smith@email.com"
              value={fields.email}
              onChange={handleFieldChange}
              required
            />
          </label>
        </div>

        <button title="Add a property" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
