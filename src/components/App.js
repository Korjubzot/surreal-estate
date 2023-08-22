import "../styles/app.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperties from "./AddProperties";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={Properties} />
        <Route path="/add-property" element={AddProperties} />
      </Routes>
      <h2>Surreal Estate</h2>
    </div>
  );
};

export default App;
