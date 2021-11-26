import React from "react";
import Typography from "@mui/material/Typography";
import ForumIcon from "@mui/icons-material/Forum";
import ChatIcon from "@mui/icons-material/Chat";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Typography variant="overline">
        <Link to="/profile"> Мой Профиль</Link>
      </Typography>
      <Typography
        variant="h4"
        color="#A9D0F5"
        textAlign="right"
        className="header"
        component="h4"
      >
        <ChatIcon />
        Chat App
      </Typography>

      <Typography variant="overline" display="block">
        <ForumIcon></ForumIcon> Список чатов
      </Typography>
    </div>
  );
};

export { Header };
