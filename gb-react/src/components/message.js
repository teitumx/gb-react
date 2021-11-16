import React from "react";

function Message({ message }) {
  const styleMessage = {
    display: "flex",
    justifyContent: "center",
    padding: "10px",
    margin: "0 auto",
    width: "50%",
    background: "rgb(243, 243, 243)",
  };
  const messages = message.map((msg) => {
    return (
      <div key={msg.id} style={styleMessage}>
        <div className="author">{msg.author} : </div>
        <div className="message">{msg.message}</div>
      </div>
    );
  });
  return messages;
}

export default Message;
