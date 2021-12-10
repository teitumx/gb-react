import React, { useRef, useState, useCallback } from "react";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

const Inputs = ({ classes, addNewMessage }) => {
  const messageRef = useRef();
  const [value, setValue] = useState("");

  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const handleAddMessage = (e) => {
    e.preventDefault();
    addNewMessage(value);
    setValue("");

    messageRef.current.focus();
  };
  return (
    <form className="messageForm" onSubmit={handleAddMessage}>
      <TextField
        className="messageInput"
        id="standard-basic"
        variant="standard"
        autoFocus={true}
        inputRef={messageRef}
        value={value}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        type="submit"
        onClick={handleAddMessage}
      >
        Send
      </Button>
    </form>
  );
};

export { Inputs };
