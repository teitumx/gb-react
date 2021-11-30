import React from "react";
import ChatItem from "../ChatItem";
import List from "@mui/material/List";

const ChatList = ({ chats, classes }) => {
  return (
    <div className={classes.topicsWindow}>
      <List
        dense
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
        {chats.map((chat) => {
          return <ChatItem chat={chat} key={chat.id} />;
        })}
      </List>
    </div>
  );
};

export { ChatList };
