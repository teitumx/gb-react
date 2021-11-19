import React from "react";

function Bot() {
  const botAnswer = {
    author: "BOT",
    text: "Hello!",
  };
  return (
    <li className="clearfix">
      <div className="message-data">
        <span className="name-bot">{botAnswer.author}</span>
        <span className="message-data-time">{new Date().toLocaleString()}</span>
      </div>
      <div className="message my-message">{botAnswer.text}</div>
    </li>
  );
}

export default Bot;
