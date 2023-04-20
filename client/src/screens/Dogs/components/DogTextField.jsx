import { TextField } from "@mui/material";
import { PropTypes } from "prop-types";
import React, { useState } from "react";

const DogTextField = ({ type, multiline, className, label, value, setter }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const handleChange = (e) => {
    setter(e.target.value);
    if (!e.target.value) {
      setErrorMsg(`${label} is required`);
    } else {
      setErrorMsg("");
    }
  };
  return (
    <TextField
      type={type}
      className={className}
      label={label}
      value={value}
      onChange={(e) => handleChange(e)}
      multiline={multiline}
      error={errorMsg ? true : false}
      helperText={errorMsg && errorMsg}
    />
  );
};

DogTextField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  setter: PropTypes.func,
  type: PropTypes.string,
  multiline: PropTypes.bool,
};
DogTextField.defaultProps = {
  type: "text",
  multiline: false,
};

export default DogTextField;
