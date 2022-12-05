import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/client/Home";
import ListsDepot from "./components/list/ListDepot";
import ListTransfert from "./components/list/ListTransfert";
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home_client" element={<Home />} />
        < Route path="/list_depot" element={<ListsDepot />} />
        <Route path="/list_transfert" element={<ListTransfert />} />
      </Routes>
    </ >
  );
}

export default App;
