import React, { useCallback, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Header } from "../Chatbox/Header";
import { Message } from "../Message";
import { ChatList } from "../Chatbox/ChatList";
import { Inputs } from "../Chatbox/Inputs";
import { addChat, delChat } from "../../store/chats/actions";
import { addMessageWithRepply } from "../../store/messages/actions";

import { selectChats } from "../../store/chats/selectors";
import { selectMessages } from "../../store/messages/selesctors";

import useStyles from "../styles";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

const Chats = () => {
  const { chatId } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const messageList = useSelector(selectMessages);
  const chats = useSelector(selectChats);

  const chatExists = useMemo(
    () => !!chats.find(({ id }) => id === chatId),
    [chatId, chats]
  );

  const addNewMessage = useCallback(
    (text, author) => {
      dispatch(addMessageWithRepply(chatId, text, author));
    },
    [chatId, dispatch]
  );

  const handleAddMessage = useCallback(
    (text) => {
      addNewMessage("ME", text);
    },
    [addNewMessage]
  );

  //добавление нового чата
  const addNewChat = useCallback(
    (name) => {
      dispatch(addChat(name));
    },
    [dispatch]
  );

  //удаление чата
  const deleteChat = useCallback(
    (id) => {
      dispatch(delChat(id));

      if (chatId !== id) {
        return;
      }

      if (chats.length === 1) {
        navigate(`/${chats[0].id}`);
      } else {
        navigate("/");
      }
    },
    [chats, chatId, dispatch, navigate]
  );

  return (
    <Container maxWidth="lg">
      <Paper className={classes.root} elevation={1}>
        <Header />
        <div className={classes.flex}>
          <ChatList
            chats={chats}
            onAddChat={addNewChat}
            onDeleteChat={deleteChat}
            classes={useStyles}
          />
          {!!chatId && chatExists && (
            <div className={classes.chatWindow}>
              <div className="myMessage">
                {(messageList[chatId] || []).map((message) => (
                  <Message
                    key={message.id}
                    text={message.text}
                    author={message.author}
                    chatId={chatId}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        {!!chatId && (
          <div className={classes.flexInput}>
            <Inputs classes={useStyles} addNewMessage={handleAddMessage} />
          </div>
        )}
      </Paper>
    </Container>
  );
};
export { Chats };
