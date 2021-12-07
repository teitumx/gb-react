import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { toggleShowName } from "../../store/profile/actions";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@mui/material";

const Profile = () => {
  const showName = useSelector((state) => state.showName);
  const dispatch = useDispatch();

  const name = "Eric";

  const handleChange = () => {
    dispatch(toggleShowName);
  };
  return (
    <Container>
      <h3>
        <b>Name:</b> {showName && name}
      </h3>
      <div>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Показывать имя?"
          onChange={handleChange}
        />
      </div>
    </Container>
  );
};

export { Profile };
