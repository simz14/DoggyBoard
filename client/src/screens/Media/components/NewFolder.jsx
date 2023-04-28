import React from "react";
import { Modal, TextField } from "@mui/material";
import styled from "styled-components";
import BasicButton from "../../../components/BasicButton";
import { useForm } from "react-hook-form";
import useFolders from "../../../hooks/useFolders";
import Swall from "sweetalert2";

const NewFolderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: ${({ theme }) => theme.spacing.padding.l};
  border-radius: ${({ theme }) => theme.border.radius.s};
  gap: 1rem;
  width: 50%;
`;

const NewFolder = ({ showAddFolder, setShowFolder }) => {
  const { folders, setFolders } = useFolders();
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  const handleClose = () => {
    setShowFolder(false);
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
    <Modal
      open={showAddFolder}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <NewFolderWrapper>
        <TextField
          {...register("name", { required: "Name is required!" })}
          label="Folder name"
          variant="outlined"
          error={errors.name ? true : false}
          helperText={errors.name?.message}
        />
        <BasicButton onClick={handleSubmit(handleClickAdd)} title="Add" />
      </NewFolderWrapper>
    </Modal>
  );
};

export default NewFolder;
