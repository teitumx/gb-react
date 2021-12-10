export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGE";

export const addMessage = (chatId, author, text) => ({
  type: ADD_MESSAGE,
  payload: {
    chatId,
    author,
    text,
  },
});

export const deleteMessage = (chatId, id) => ({
  type: DELETE_MESSAGE,
  payload: {
    chatId,
    id,
  },
});

let timeout;

export const addMessageWithRepply = (chatId, author, text) => (dispatch) => {
  dispatch(addMessage(chatId, author, text));
  if (author === "ME") {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      dispatch(addMessage(chatId, "BOT", "Hello, from BOT"));
    }, 2000);
  }
};
