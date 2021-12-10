import React from "react";
import { Routes, Route } from "react-router-dom";
import { Profile } from "../Profile";
import { Chats } from "../Chats";
import { News } from "../News";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Chats />} />
      <Route path="/chats/:chatId/*" element={<Chats />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/news" element={<News />} />
    </Routes>
  );
};

export { AppRoutes };
