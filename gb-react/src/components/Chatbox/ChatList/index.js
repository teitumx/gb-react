import React, { useState } from "react";
import ChatItem from "../ChatItem";
import List from "@mui/material/List";
import { Button } from "@mui/material";
import "./chatList.css";

const ChatList = ({ chats, classes, onAddChat, onDeleteChat }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== "") {
      onAddChat(value);
    }
    setValue("");
  };

  return (
    <div className={classes.topicsWindow}>
      <List
        dense
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
        {chats.map((chat) => (
          <ChatItem
            chat={chat}
            key={chat.id}
            id={chat.id}
            onDelete={onDeleteChat}
          />
        ))}
      </List>
      <form onSubmit={handleSubmit}>
        <div className="add-chat-form">
          <input type="text" value={value} onChange={handleChange} />
        </div>

        <div className="add-chat-form">
          <Button
            variant="contained"
            color="success"
            disabled={!value}
            onClick={handleSubmit}
          >
            Добавить чат
          </Button>
        </div>
      </form>
    </div>
  );
};

export { ChatList };
