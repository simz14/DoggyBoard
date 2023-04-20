import { TextField } from "@mui/material";
import { PropTypes } from "prop-types";
import React from "react";

const DogTextField = ({ type, multiline, className, label, value, setter }) => {
  return (
    <TextField
      type={type}
      className={className}
      label={label}
      value={value}
      onChange={(e) => setter(e.target.value)}
      multiline={multiline}
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
