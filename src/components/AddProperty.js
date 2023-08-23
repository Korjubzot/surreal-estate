import React, { useState } from "react";
import "../styles/addproperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  return (
    <div className="add-property">
      <form onSubmit={handleAddProperty}>
        <p>hello world</p>
        <button title="Add a property" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
