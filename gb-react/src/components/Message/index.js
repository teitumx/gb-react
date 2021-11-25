import React from "react";

function Message({ author, message, id }) {
  return (
    <li key={id} className="messages">
      <div className="messageBox">
        <div className="name-sent">{author}</div>
        <div className="message other-message float-right">{message}</div>
      </div>
    </li>
  );
}

export default Message;
