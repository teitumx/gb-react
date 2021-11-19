import React, { useState, useEffect } from "react";
import "./App.css";
import Message from "./components/Message";
import Bot from "./components/Bot";

function App() {
  const [messageList, setMessageList] = useState([{}]);
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [showBotMessage, setShowBotMessage] = useState(false);

  function addNewMessage() {
    setMessageList([...messageList, { author: author, message: message }]);
    setAuthor("");
    setMessage("");
    setShowMessage(true);
  }

  useEffect(() => {
    if (messageList.length > 1) {
      setTimeout(() => {
        setShowBotMessage(true);
      }, 2000);
    }
  }, [messageList]);

  return (
    <div className="container">
      <div className="card chat-app">
        <div className="chat">
          <div className="chat-history">
            <ul className="m-b-0">
              {showMessage
                ? messageList.map(({ message, author }) => (
                    <Message
                      id={Math.random * 100}
                      message={message}
                      author={author}
                    />
                  ))
                : ""}
              {showBotMessage ? <Bot /> : ""}
            </ul>
          </div>
          <div className="chat-message clearfix">
            <div className="input-group mb-0">
              <input
                type="text"
                value={author}
                name="author"
                className="name-form form-control"
                style={{ width: "20%" }}
                placeholder="Введите Ваше имя..."
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
              />
              <input
                type="text"
                value={message}
                name="message"
                className="message-form form-control"
                style={{ width: "60%" }}
                placeholder="Введите сообщение..."
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              <div className="input-group-prepend">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={addNewMessage}
                >
                  Отправить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
