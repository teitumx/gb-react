import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Container } from "@mui/material";

import { db } from "../../services/firebase";
import { ref, set, onValue } from "firebase/database";

const Profile = ({ onLogout }) => {
  const showName = useSelector((state) => state.showName);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    const userDbRef = ref(db, "user");
    onValue(userDbRef, (snapshot) => {
      const data = snapshot.val();
      console.log("--------", data);
      setName(data?.user || "");
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("");
    set(ref(db, "user"), {
      user: value,
    });
  };

  const handleChange = (e) => {
    // dispatch(toggleShowName);
    setValue(e.target.value);
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <Container>
      <button onClick={handleLogout}>Logout</button>

      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>

      <div>{name}</div>
    </Container>
  );
};

export { Profile };
