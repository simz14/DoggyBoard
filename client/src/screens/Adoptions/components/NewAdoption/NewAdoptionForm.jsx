import {
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import {
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineMinusCircle,
} from "react-icons/hi";
import styled from "styled-components";

const FormWrapper = styled.div`
  background-color: white;
  padding: ${({ theme }) => theme.spacing.padding.m};
  gap: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: ${({ theme }) => theme.border.radius.s};
  justify-content: center;

  button {
    grid-column: 1/3;
  }
  .reasonField {
    grid-column: 1/3;
  }
  .iconsWrapper {
    grid-column: 1 / 3;
    display: flex;
    justify-content: center;
    svg {
      width: 1.5rem;
      height: 1.5rem;
      cursor: pointer;
    }
    .approved {
      color: green;
      opacity: 0.3;
    }
    .declined {
      color: red;
      opacity: 0.3;
    }
    .pending {
      color: orange;
      opacity: 0.3;
    }
    .active {
      opacity: 1;
    }
  }
`;

const NewAdoptionForm = ({
  adoptionStatus,
  setAdoptionStatus,
  register,
  errors,
}) => {
  return (
    <FormWrapper>
      <TextField
        {...register("firstName", { required: "First Name is required!" })}
        label="First Name"
        multiline
        error={errors.firstName ? true : false}
        helperText={errors.firstName?.message}
      />

      <TextField
        {...register("lastName", { required: "Last Name is required!" })}
        label="Last Name"
        multiline
        error={errors.lastName ? true : false}
        helperText={errors.lastName?.message}
      />
      <TextField
        {...register("email", { required: "Email is required!" })}
        label="Email"
        multiline
        error={errors.email ? true : false}
        helperText={errors.email?.message}
      />
      <TextField
        {...register("phone", { required: "Phone is required!" })}
        label="Phone"
        multiline
        error={errors.phone ? true : false}
        helperText={errors.phone?.message}
      />
      <TextField
        {...register("age", { required: "Age is required!" })}
        label="Age"
        multiline
        error={errors.age ? true : false}
        helperText={errors.age?.message}
      />
      <TextField
        {...register("petId", {
          required: "Pet Id is required!",
        })}
        label="Pet Id"
        multiline
        error={errors.petId ? true : false}
        helperText={errors.petId?.message}
      />
      <TextField
        className="reasonField"
        {...register("reasonForAdopting", {
          required: "Reason For Adopting is required!",
        })}
        label="Reason For Adopting"
        minRows={2}
        multiline
        error={errors.reasonForAdopting ? true : false}
        helperText={errors.reasonForAdopting?.message}
      />
      <div className="iconsWrapper">
        <HiOutlineCheckCircle
          onClick={() => setAdoptionStatus("approved")}
          className={`approved ${adoptionStatus === "approved" && "active"}`}
        />
        <HiOutlineMinusCircle
          onClick={() => setAdoptionStatus("declined")}
          className={`declined ${adoptionStatus === "declined" && "active"}`}
        />
        <HiOutlineClock
          onClick={() => setAdoptionStatus("pending")}
          className={`pending ${adoptionStatus === "pending" && "active"}`}
        />
      </div>
    </FormWrapper>
  );
};

export default NewAdoptionForm;
