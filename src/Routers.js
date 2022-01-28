import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Address, Date, Name, Congrats, Home } from "./pages";
import "./pages/index";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/name" element={<Name />} />
        <Route path="/address" element={<Address />} />
        <Route path="/date" element={<Date />} />
        <Route path="/congrats" element={<Congrats />} />
      </Routes>
    </Router>
  );
};

export default Routers;
