import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ListsDepot from "./components/list/ListDepot";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list_depot" element={<ListsDepot />} />
        <Route path="/list_transfert" />
      </Routes>
    </div >
  );
}

export default App;
