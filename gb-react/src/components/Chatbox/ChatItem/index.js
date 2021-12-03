import React from "react";
import { Button, ListItem } from "@mui/material";
import { ListItemAvatar } from "@mui/material";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./chatItem.css";

const ChatItem = ({ chat, onDelete, id }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <ListItem className="list-item" key={chat.id} disablePadding>
      <ListItemAvatar>
        <Avatar src={`/static/images/avatar/${chat + 1}.jpg`} />
      </ListItemAvatar>
      <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
      <span>
        <Button onClick={handleDelete} className="delete-button">
          <DeleteOutlineIcon fontSize="small" color="red" />
        </Button>
      </span>
    </ListItem>
  );
};

export default ChatItem;
