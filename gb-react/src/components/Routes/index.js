import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Profile } from "../Profile";
import { Chats } from "../Chats";
import { News } from "../News";
import { PrivateRoute } from "../PrivateRoute";
import { PublicRoute } from "../PublicRoute";
import { Login } from "../Login";
import { auth, login, signOut, signUp } from "../../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { SignUp } from "../SignUp";
import { Navigate } from "react-router-dom";

const AppRoutes = () => {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    });

    return unSubscribe;
  }, []);

  const handleLogin = async (email, password) => {
    try {
      await login(email, password);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSignUp = async (email, password) => {
    try {
      await signUp(email, password);
    } catch (e) {
      console.log(e);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
      setAuthed(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Routes>
      {/* <Route path="/" element={<Chats />} /> */}
      <Route path="/" element={<PublicRoute />}>
        <Route exact path="/" element={<Chats />} />
      </Route>
      {/* <Route path="/chats/:chatId/*" element={<Chats />} /> */}

      {/* Профиль */}
      <Route path="/profile" element={<PrivateRoute authed={authed} />}>
        <Route path="/profile" element={<Profile onLogout={handleLogout} />} />
      </Route>

      {/* Чаты */}
      <Route path="/chats/:chatId/*" element={<PrivateRoute />} authed={authed}>
        <Route exact path="/chats/:chatId/*" element={<Chats />} />
      </Route>

      {/* Новости */}
      <Route path="/news" element={<News />} />

      {/* Логин */}

      <Route path="/login" element={<PublicRoute />} authed={authed}>
        <Route exact path="/login" element={<Login onLogin={handleLogin} />} />
      </Route>

      {/* Регистрация */}

      <Route path="/signup" element={<PublicRoute />} authed={authed}>
        <Route
          exact
          path="/signup"
          element={<SignUp onSignUp={handleSignUp} />}
        />
      </Route>
    </Routes>
  );
};

export { AppRoutes };
