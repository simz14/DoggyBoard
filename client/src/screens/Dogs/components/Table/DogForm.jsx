import { TextField } from "@mui/material";
import styled from "styled-components";

const FormWrapper = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.border.radius.s};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: ${({ theme }) => theme.spacing.padding.m};
  .storyField {
    grid-column: 1/3;
  }
`;

const DogDetailForm = ({ register, dog, errors }) => {
  return (
    <FormWrapper>
      <TextField
        {...register("name", { required: "Name is required!" })}
        label="Name"
        defaultValue={dog?.name}
        multiline
      />
      <TextField
        {...register("breed", { required: "Breed is required!" })}
        label="Breed"
        defaultValue={dog?.breed}
        multiline
      />
      <TextField
        {...register("sex", { required: "Sex is required!" })}
        label="Sex"
        defaultValue={dog?.sex}
        multiline
      />
      <TextField
        {...register("age", { required: "Age is required!" })}
        type="number"
        label="Age"
        defaultValue={dog?.age}
        multiline
      />
      <TextField
        {...register("location", { required: "Location is required!" })}
        label="Location"
        defaultValue={dog?.location}
        multiline
      />
      <TextField
        {...register("color", { required: "Color is required!" })}
        label="Color"
        defaultValue={dog?.color}
        multiline
      />
      <TextField
        {...register("size", { required: "Size is required!" })}
        label="Size"
        defaultValue={dog?.size}
        multiline
      />
      <TextField
        {...register("petId", { required: "Pet id is required!" })}
        type="number"
        label="Pet Id"
        defaultValue={dog?.petId}
        multiline
      />
      <TextField
        {...register("story", { required: "Story is required!" })}
        className="storyField"
        label="Story"
        defaultValue={dog?.story}
        multiline
      />
    </FormWrapper>
  );
};

export default DogDetailForm;
