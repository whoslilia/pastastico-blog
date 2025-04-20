import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import PastaCards from "../pages/PastaCards";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/PastaCards" element={<PastaCards />} />
    </Routes>
  </Router>
);

export default AppRoutes;
