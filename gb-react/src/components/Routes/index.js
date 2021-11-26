import React from "react";
import { Routes, Route } from "react-router-dom";
import { Profile } from "../Profile";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default AppRoutes;
