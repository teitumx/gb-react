import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Message from "./components/Message";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import ForumIcon from "@mui/icons-material/Forum";
import ChatIcon from "@mui/icons-material/Chat";

const chats = [
  {
    id: 1,
    name: "Иван Иванов",
  },
  {
    id: 2,
    name: "Петр Петров",
  },
  {
    id: 3,
    name: "Николай Николаев",
  },
  {
    id: 4,
    name: "Денис Денисов",
  },
  {
    id: 5,
    name: "Илон Маск",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "50px",
    padding: theme.spacing(3, 2),
  },
  flex: {
    display: "flex",
  },
  header: {
    textAlign: "right",
    color: "blue",
  },
  topicsWindow: {
    width: "30%",
    borderRight: "1px solid #FAFAFA",
  },
  chatWindow: {
    width: "70%",
    padding: "20px",
  },
  chatBox: {
    width: "85%",
    padding: "10px",
    justifyContent: "center",
  },
  button: {
    width: "15%",
    marginTop: "30px",
  },
  myMessage: {
    backgroundColor: "tomato",
    marginLeft: "auto",
  },
  messageInput: {
    width: "80%",
    padding: "10px",
  },
  inputsBox: {
    display: "flex",
    justifyContent: "right",
    textAlign: "center",
  },
  nameInput: {
    width: "40%",
    margin: "10 10 10 10px",
  },
}));

function App() {
  const classes = useStyles();
  const [messageList, setMessageList] = useState([]);
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(true);
  const messageRef = useRef();

  const addNewMessage = () => {
    setMessageList((prev) => [...prev, { author: author, message: message }]);
    setAuthor("");
    setMessage("");
    setShowMessage(true);
  };

  //почему-то после отправки сообщения и изменения messageList не появляется фокус на инпуте
  useEffect(() => {
    messageRef.current.focus();
  }, [messageList]);

  useEffect(() => {
    if (
      messageList.length >= 1 &&
      messageList[messageList.length - 1].author !== "BOT"
    ) {
      setTimeout(() => {
        setMessageList([
          ...messageList,
          { author: "BOT", message: "Hello from BOT" },
        ]);
      }, 2000);
    }
  }, [messageList]);

  return (
    <Container maxWidth="lg">
      <Paper className={classes.root} elevation={1}>
        <Typography
          variant="h4"
          color="#A9D0F5"
          textAlign="right"
          className="header"
          component="h4"
        >
          <ChatIcon />
          Chat App
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          <ForumIcon></ForumIcon> Список чатов
        </Typography>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List
              dense
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {chats.map((value) => {
                return (
                  <ListItem key={value.id} disablePadding>
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar
                          src={`/static/images/avatar/${value + 1}.jpg`}
                        />
                      </ListItemAvatar>
                      <ListItemText primary={value.name} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </div>
          <div className={classes.chatWindow}>
            <div className="myMessage">
              {showMessage
                ? messageList.map(({ message, author }, i) => (
                    <Message key={i} message={message} author={author} />
                  ))
                : ""}
            </div>
          </div>
        </div>
        <div className={classes.inputsBox}>
          <div className={classes.chatBox}>
            <TextField
              className={classes.nameInput}
              id="standard-basic"
              label="Имя"
              variant="standard"
              value={author}
              name="author"
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
          </div>
          <div className={classes.chatBox}>
            <TextField
              className={classes.messageInput}
              id="standard-basic"
              label="Сообщение"
              variant="standard"
              autoFocus={true}
              ref={messageRef}
              value={message}
              name="message"
              onChange={(e) => {
                setMessage(e.target.value);
                e.preventDefault();
                messageRef.current.focus();
              }}
            />
          </div>
          <div className={classes.button}>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              type="submit"
              onClick={addNewMessage}
            >
              Send
            </Button>
          </div>
        </div>
      </Paper>
    </Container>
  );
}
export default App;
