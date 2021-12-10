import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit">
            <Link className="one" to="/">
              Главная
            </Link>
          </Button>
          <Button color="inherit">
            <Link className="one" to="/profile">
              Мой Профиль
            </Link>
          </Button>
          <Button color="inherit">
            <Link className="one" to="/news">
              Новости
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
