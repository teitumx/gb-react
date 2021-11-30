import React from "react";
import { ListItem } from "@mui/material";
import { ListItemAvatar } from "@mui/material";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const ChatItem = ({ chat }) => {
  return (
    <ListItem className="list-item" key={chat.id} disablePadding>
      <ListItemAvatar>
        <Avatar src={`/static/images/avatar/${chat + 1}.jpg`} />
      </ListItemAvatar>
      <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
    </ListItem>
  );
};

export default ChatItem;
