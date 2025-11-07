import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Energy from "./pages/services/Energy";
import Movement from "./pages/services/Movement";
import SpaceVastu from "./pages/services/SpaceVastu";
import Manifestation from "./pages/services/Manifestation";
import Material from "./pages/services/Material";
import ServiceDetails from "./pages/services/ServiceDetails";
import Blogs from "./pages/Blogs";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/energy" element={<Energy />} />
      <Route path="/movement" element={<Movement />} />
      <Route path="/space-vastu" element={<SpaceVastu />} />
      <Route path="/manifestation" element={<Manifestation />} />
      <Route path="/material" element={<Material />} />
      <Route path="/service/:id" element={<ServiceDetails />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  );
}
