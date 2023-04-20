import { TextField } from "@mui/material";
import React from "react";

const DogTextField = ({ type, className, label, value, setter }) => {
  return (
    <TextField
      type={type}
      className={className}
      multiline={true}
      label={label}
      value={value}
      onChange={(e) => setter(e.target.value)}
    />
  );
};

export default DogTextField;
