import { TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.border.radius.s};
`;

const NewDogForm = () => {
  return <FormWrapper></FormWrapper>;
};

export default NewDogForm;
