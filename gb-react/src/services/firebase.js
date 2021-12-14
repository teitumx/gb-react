// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from "firebase/auth";

import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTjvsd2N23UZUvZuJdP73w9NvH3uYZsjE",
  authDomain: "gb-react-60cdf.firebaseapp.com",
  databaseURL:
    "https://gb-react-60cdf-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gb-react-60cdf",
  storageBucket: "gb-react-60cdf.appspot.com",
  messagingSenderId: "202972716393",
  appId: "1:202972716393:web:1b546a4f0a93dbdcf531f8",
  measurementId: "G-CDXZQKL3G7",
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getDatabase();

export const signUp = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

export const login = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const signOut = async () => {
  await firebaseSignOut(auth);
};
