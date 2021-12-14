import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChatItem from "../ChatItem";
import List from "@mui/material/List";
import { Button } from "@mui/material";
import "./chatList.css";

import uniqid from "uniqid";

import { db } from "../../../services/firebase";
import { ref, set, onValue } from "firebase/database";
import { selectChats } from "../../../store/chats/selectors";
import { addChatFireBase } from "../../../store/chats/actions";

const ChatList = ({ classes, onAddChat, onDeleteChat }) => {
  // const [chats, setChats] = useState([]);
  const chats = useSelector(selectChats);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (value !== "") {
    //   onAddChat(value);
    // }
    // setValue("");

    // const newId = uniqid();
    // const chatsDbRef = ref(db, `chats/${newId}`);
    // set(chatsDbRef, {
    //   id: newId,
    //   name: value,
    // });
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
