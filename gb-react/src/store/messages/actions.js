import { db } from "../../services/firebase";
import { ref, onValue, set } from "firebase/database/";
import uniqid from "uniqid";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGE";
export const SET_MESSAGES = "MESSAGES::SET_MESSAGES";

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

export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: messages,
});

export const initMessages = () => (dispatch) => {
  const messagesDbRef = ref(db, "messages");
  onValue(messagesDbRef, (snapshot) => {
    const data = snapshot.val();

    dispatch(setMessages(data || {}));
  });
};

export const addMessageFromFireBase = (text, author, chatId) => (dispatch) => {
  const newId = uniqid();
  const messagesDbRef = ref(db, `messages/${chatId}/${newId}`);
  set(messagesDbRef, {
    author,
    text,
    id: newId,
  });
};

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
