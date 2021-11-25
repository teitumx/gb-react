import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Header from "./components/Chatbox/Header";
import Message from "./components/Message";
import ChatList from "./components/Chatbox/ChatList";
import Inputs from "./components/Chatbox/Inputs";
import useStyles from "./components/styles";

import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

const chats = [
  {
    id: 1,
    name: "Иван Иванов",
    text: "Привет, это Иван Иванов",
  },
  {
    id: 2,
    name: "Петр Петров",
    text: "Привет, это Петр Петров",
  },
  {
    id: 3,
    name: "Николай Николаев",
    text: "Привет, это Николай Николаев",
  },
  {
    id: 4,
    name: "Денис Денисов",
    text: "Привет, это Денис Денисов",
  },
  {
    id: 5,
    name: "Илон Маск",
    text: "Привет, это Илон Маск",
  },
];

function App() {
  const classes = useStyles();
  const [messageList, setMessageList] = useState([]);

  const addNewMessage = useCallback((message) => {
    setMessageList((prev) => [
      ...prev,
      {
        message: message,
        author: "ME",
        id: `msg-${Date.now()}`,
      },
    ]);
  }, []);

  useEffect(() => {
    let timeout;
    if (
      messageList.length >= 1 &&
      messageList[messageList.length - 1].author !== "BOT"
    ) {
      timeout = setTimeout(() => {
        setMessageList([
          ...messageList,
          { author: "BOT", message: "Hello from BOT", id: `msg-${Date.now()}` },
        ]);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [messageList]);

  return (
    <Container maxWidth="lg">
      <Paper className={classes.root} elevation={1}>
        <Header />
        <div className={classes.flex}>
          <ChatList chats={chats} classes={useStyles} />

          <div className={classes.chatWindow}>
            <div className="myMessage">
              {messageList.map((message) => (
                <Message
                  key={message.id}
                  message={message.message}
                  author={message.author}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={classes.flexInput}>
          <Inputs classes={useStyles} addNewMessage={addNewMessage} />
        </div>
      </Paper>
    </Container>
  );
}
export default App;
