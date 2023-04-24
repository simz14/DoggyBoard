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
import styled from "styled-components";
import { useForm } from "react-hook-form";
import BasicButton from "../../../../components/BasicButton";

const FormWrapper = styled.div`
  background-color: white;
  padding: ${({ theme }) => theme.spacing.padding.m};
  gap: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: ${({ theme }) => theme.border.radius.s};
  justify-content: center;
  .storyField {
    grid-column: 1/3;
  }
  button {
    grid-column: 1/3;
  }
`;

const NewDogForm = () => {
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm();

  const handleClickAdd = () => {
    console.log(getValues());
  };

  return (
    <FormWrapper>
      <TextField
        {...register("name", { required: "Name is required!" })}
        label="Name"
        variant="outlined"
        error={errors.name ? true : false}
        helperText={errors.name?.message}
      />
      <TextField
        {...register("breed", { required: "Breed is required!" })}
        label="Breed"
        variant="outlined"
        error={errors.breed ? true : false}
        helperText={errors.breed?.message}
      />

      <FormControl>
        <InputLabel sx={errors.sex && { color: "#d32f2f" }}>Sex</InputLabel>
        <Select
          defaultValue={""}
          {...register("sex", { required: "Sex is required!" })}
          label="Sex"
          error={errors.sex ? true : false}
        >
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Male">Male</MenuItem>
        </Select>
        {errors.sex && (
          <FormHelperText sx={{ color: "#d32f2f" }}>
            {errors.sex?.message}
          </FormHelperText>
        )}
      </FormControl>

      <TextField
        {...register("age", { required: "Age is required!" })}
        label="Age"
        variant="outlined"
        error={errors.age ? true : false}
        helperText={errors.age?.message}
      />
      <TextField
        {...register("location", { required: "Location is required!" })}
        label="Location"
        variant="outlined"
        error={errors.location ? true : false}
        helperText={errors.location?.message}
      />
      <TextField
        {...register("color", { required: "Color is required!" })}
        label="Color"
        variant="outlined"
        error={errors.color ? true : false}
        helperText={errors.color?.message}
      />
      <TextField
        {...register("size", { required: "Size is required!" })}
        InputProps={{
          endAdornment: <InputAdornment position="end">kg</InputAdornment>,
        }}
        label="Size"
        variant="outlined"
        error={errors.size ? true : false}
        helperText={errors.size?.message}
      />
      <TextField
        {...register("petId", { required: "Pet id is required!" })}
        label="PetId"
        variant="outlined"
        error={errors.petId ? true : false}
        helperText={errors.petId?.message}
      />
      <TextField
        {...register("story", { required: "Story is required!" })}
        className="storyField"
        label="Story"
        multiline
        minRows={3}
        error={errors.story ? true : false}
        helperText={errors.story?.message}
      />
    </FormWrapper>
  );
};

export default NewDogForm;
