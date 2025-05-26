import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import PastaCards from "../pages/PastaCards";
import NotFound from "../pages/NotFound";
import Recipes from "../pages/Recipes";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/home" replace />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/pastacards" element={<PastaCards />} />
    <Route path="/recipes" element={<Recipes />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
