import React from "react";

function Message({ author, message, i }) {
  return (
    <li key={i} className="clearfix">
      <div className="message-data text-right">
        <span className="name-sent">{author}</span>
        <img
          src="https://bootdey.com/img/Content/avatar/avatar7.png"
          alt="avatar"
        />
      </div>
      <div className="message other-message float-right">{message}</div>
    </li>
  );
}

export default Message;
