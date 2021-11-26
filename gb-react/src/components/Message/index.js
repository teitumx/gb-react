import React from "react";

const Message = ({ author, text, id }) => {
  return (
    <li key={id} className="messages">
      <div className="messageBox">
        <div className="name-sent">{author}</div>
        <div className="message other-message float-left">{text}</div>
      </div>
    </li>
  );
};

export { Message };
