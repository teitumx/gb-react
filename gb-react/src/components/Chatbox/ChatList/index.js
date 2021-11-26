import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const ChatList = ({ chats, classes }) => {
  return (
    <div className={classes.topicsWindow}>
      <List
        dense
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
        {chats.map((value) => {
          return (
            <ListItem className="list-item" key={value.id} disablePadding>
              <ListItemAvatar>
                <Avatar src={`/static/images/avatar/${value + 1}.jpg`} />
              </ListItemAvatar>
              {/* <ListItemText primary={value.name} /> */}
              <Link to={`/chats/${value.id}`}>{value.name}</Link>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export { ChatList };
