import React from "react";
import { Routes, Route } from "react-router-dom";
import { Profile } from "../Profile";
import { Chats } from "../Chats";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Chats />} />
      <Route path="/chats/:chatId/*" element={<Chats />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export { AppRoutes };
