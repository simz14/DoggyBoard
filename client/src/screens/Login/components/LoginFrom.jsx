import {
  Checkbox,
  FormControlLabel,
  InputAdornment,
  ListItemButton,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import BasicButton from "../../../components/BasicButton";
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { loginService } from "../../../services/loginService";

const LoginWrap = styled.div`
  max-width: 20rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5rem;
  gap: 1rem;
  z-index: 999;
  @media (max-width: 1000px) {
    background-color: white;
    border-radius: ${({ theme }) => theme.border.radius.s};
    box-shadow: 0px 1px 4px -2px #888888;
    padding: 3rem;
  }
  @media (max-width: 600px) {
    border-radius: none;
    box-shadow: none;
  }
`;

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    getValues,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleClickSignIn = () => {
    loginService(getValues());
    navigate("/");
    reset();
  };

  return (
    <LoginWrap>
      <h1>Sign In</h1>
      <TextField
        {...register("email", {
          required: "Email is required!",
          pattern: {
            value: /^\S+@\S+$/,
            message: "Email is not valid!",
          },
        })}
        label="Email"
        size="normal"
        error={errors.email ? true : false}
        helperText={errors.email?.message}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MdOutlineEmail />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        {...register("password", {
          required: "Password is required!",
        })}
        label="Password"
        type={showPassword ? "text" : "password"}
        size="normal"
        error={errors.password ? true : false}
        helperText={errors.password?.message}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MdLockOutline />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <ListItemButton onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </ListItemButton>
            </InputAdornment>
          ),
        }}
      />
      <div>
        <FormControlLabel control={<Checkbox />} label="Remember me" />
      </div>
      <BasicButton onClick={handleSubmit(handleClickSignIn)} title="Sign In" />
    </LoginWrap>
  );
};

export default LoginForm;
