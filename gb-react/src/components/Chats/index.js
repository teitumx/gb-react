import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../Chatbox/Header";
import { Message } from "../Message";
import { ChatList } from "../Chatbox/ChatList";
import { Inputs } from "../Chatbox/Inputs";
import useStyles from "../styles";

import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

const initialChats = {
  "chat-1": [
    { text: "some text", author: "Иван Иванов", id: "mess-1" },
    { text: "some text2", author: "Иван Иванов", id: "mess-2" },
  ],
  "chat-2": [
    { text: "some new text", author: "Петр Петров", id: "mess-3" },
    { text: "some text2", author: "Петр Петров", id: "mess-4" },
  ],
};

const chats = [
  {
    id: "chat-1",
    name: "Иван Иванов",
  },
  {
    id: "chat-2",
    name: "Петр Петров",
  },
];

const Chats = () => {
  const { chatId } = useParams();
  const classes = useStyles();
  const [messageList, setMessageList] = useState(initialChats);

  const addNewMessage = useCallback(
    (text) => {
      setMessageList((prevMess) => ({
        ...prevMess,
        [chatId]: [
          ...prevMess[chatId],
          {
            text: text,
            author: "ME",
            id: `msg-${Date.now()}`,
          },
        ],
      }));
    },
    [chatId]
  );

  // Перестал работать БОТ, не понимаю, как исправить

  // useEffect(() => {
  //   let timeout;
  //   if (
  //     !!chatId &&
  //     messageList[chatId].length >= 1 &&
  //     messageList[chatId][messageList.length - 1].author !== "BOT"
  //   ) {
  //     timeout = setTimeout(() => {
  //       addNewMessage({
  //         text: "HELLO FROM BOT!",
  //         author: "BOT",
  //         id: `bot-${Date.now()}`,
  //       });
  //     }, 2000);
  //   }
  //   return () => clearTimeout(timeout);
  // }, [messageList]);

  return (
    <Container maxWidth="lg">
      <Paper className={classes.root} elevation={1}>
        <Header />
        <div className={classes.flex}>
          <ChatList chats={chats} classes={useStyles} />
          {!!chatId && (
            <div className={classes.chatWindow}>
              <div className="myMessage">
                {messageList[chatId].map((message) => (
                  <Message
                    key={message.id}
                    text={message.text}
                    author={message.author}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        {!!chatId && (
          <div className={classes.flexInput}>
            <Inputs classes={useStyles} addNewMessage={addNewMessage} />
          </div>
        )}
      </Paper>
    </Container>
  );
};
export { Chats };
