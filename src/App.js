import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ListsDepot from "./components/list/ListDepot";
import ListTransfert from "./components/list/ListTransfert";
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listdepot" element={<ListsDepot />} />
        <Route path="/listtransfert" element={<ListTransfert />} />
      </Routes>
    </div >
  );
}

export default App;
