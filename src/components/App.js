import "../styles/normalize.css";
import "../styles/app.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Properties />} />
        <Route path="/add-property" exact element={<AddProperty />} />
      </Routes>
      <h2 className="footer">Surreal Estate</h2>
    </div>
  );
};

export default App;
