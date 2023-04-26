import React, { useRef } from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";
import BasicButton from "../../../components/BasicButton";
import { useForm } from "react-hook-form";
import useFolders from "../../../hooks/useFolders";
import Swall from "sweetalert2";

const NewFolderWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #0000003c;
  height: 100vh;
  width: 100vw;
  z-index: 99999999;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: ${({ theme }) => theme.spacing.padding.l};
    border-radius: ${({ theme }) => theme.border.radius.s};
    gap: 1rem;
  }
`;

const NewFolder = ({ setShowFolder }) => {
  const { folders, setFolders } = useFolders();
  const ref = useRef();
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  const handleClickAway = (e) => {
    if (!ref.current.contains(e.target)) {
      setShowFolder(false);
    }
  };

  const handleClickAdd = () => {
    const getLastId = folders.at(-1).id;
    setFolders((prev) => [...prev, { id: getLastId + 1, ...getValues() }]);
    setShowFolder(false);
    Swall.fire({
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  return (
    <NewFolderWrapper onClick={(e) => handleClickAway(e)}>
      <div ref={ref} className="wrapper">
        <TextField
          {...register("name", { required: "Name is required!" })}
          label="Folder name"
          variant="outlined"
          error={errors.name ? true : false}
          helperText={errors.name?.message}
        />
        <BasicButton onClick={handleSubmit(handleClickAdd)} title="Add" />
      </div>
    </NewFolderWrapper>
  );
};

export default NewFolder;
