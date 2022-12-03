import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listdepot" element= />
      </Routes>
    </div >
  );
}

export default App;
