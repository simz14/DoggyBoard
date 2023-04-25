import { TextField } from "@mui/material";
import styled from "styled-components";

const FormWrapper = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.border.radius.s};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: ${({ theme }) => theme.spacing.padding.m};
  .reasonField {
    grid-column: 1/3;
  }
`;

const AdoptionDetailForm = ({ register, adopter, errors }) => {
  return (
    <FormWrapper>
      <TextField
        {...register("firstName", { required: "First Name is required!" })}
        label="First Name"
        defaultValue={adopter?.firstName}
        multiline
      />
      <TextField
        {...register("lastName", { required: "Last Name is required!" })}
        label="Last Name"
        defaultValue={adopter?.lastName}
        multiline
      />
      <TextField
        {...register("email", { required: "Email is required!" })}
        label="Email"
        defaultValue={adopter?.email}
        multiline
      />
      <TextField
        {...register("phone", { required: "Phone is required!" })}
        label="Phone"
        defaultValue={adopter?.age}
        multiline
      />
      <TextField
        {...register("age", { required: "Age is required!" })}
        label="Age"
        defaultValue={adopter?.age}
        multiline
      />
      <TextField
        {...register("petId", {
          required: "Pet Id is required!",
        })}
        label="Pet Id"
        defaultValue={adopter?.petId}
        multiline
      />
      <TextField
        className="reasonField"
        {...register("reasonForAdopting", {
          required: "Reason For Adopting is required!",
        })}
        label="Reason For Adopting"
        defaultValue={adopter?.reasonForAdopting}
        minRows={2}
        multiline
      />
    </FormWrapper>
  );
};

export default AdoptionDetailForm;
