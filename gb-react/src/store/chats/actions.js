import { db } from "../../services/firebase";
import { ref, onValue, set } from "firebase/database/";
import uniqid from "uniqid";

export const ADD_CHAT = "CHAT::ADD_CHAT";
export const DELETE_CHAT = "CHAT::DELETE_CHAT";
export const SET_CHATS = "CHAT::SET_CHATS";

export const addChat = (name) => ({
  type: ADD_CHAT,
  payload: name,
});

export const delChat = (id) => ({
  type: DELETE_CHAT,
  payload: id,
});

export const setChats = (chats) => ({
  type: SET_CHATS,
  payload: chats,
});

export const initChats = () => (dispatch) => {
  const chatsDbRef = ref(db, "chats");
  onValue(chatsDbRef, (snapshot) => {
    const data = snapshot.val();
    dispatch(setChats(Object.values(data || {})));
  });
};

export const addChatFireBase = (name) => () => {
  const newId = uniqid();
  const chatsDbRef = ref(db, `chats/${newId}`);

  set(chatsDbRef, {
    id: newId,
    name,
  });
};
