import React from "react";
import Swal from "sweetalert2";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { TableCell, TableRow } from "@mui/material";
import useDogs from "../../../hooks/useDogs";
import styled from "styled-components";

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  .delete {
    color: red;
    cursor: pointer;
  }
  .edit {
    color: orange;
    cursor: pointer;
  }
`;

const DogsTableRow = ({ item }) => {
  const { dogs, setDogs } = useDogs();

  const handleClickDelete = async (id) => {
    const alertResult = await Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (alertResult.isConfirmed) {
      setDogs((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <TableRow key={item?.id} sx={{ td: { border: 0 } }}>
      <TableCell>{item?.id}</TableCell>
      <TableCell>{item?.name}</TableCell>
      <TableCell>{item?.breed}</TableCell>
      <TableCell>{item?.age}</TableCell>
      <TableCell>{item?.location}</TableCell>
      <TableCell>
        <IconsWrapper>
          <MdDeleteOutline
            onClick={() => handleClickDelete(item.id)}
            className="delete"
          />
          <AiOutlineEdit className="edit" />
        </IconsWrapper>
      </TableCell>
    </TableRow>
  );
};

export default DogsTableRow;
