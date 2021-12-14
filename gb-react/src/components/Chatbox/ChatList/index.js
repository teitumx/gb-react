import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChatItem from "../ChatItem";
import List from "@mui/material/List";
import { Button } from "@mui/material";
import "./chatList.css";

import { selectChats } from "../../../store/chats/selectors";
import { addChatFireBase } from "../../../store/chats/actions";

const ChatList = ({ classes, onAddChat, onDeleteChat }) => {
  const chats = useSelector(selectChats);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addChatFireBase(value));

    setValue("");
  };

  return (
    <div>
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
