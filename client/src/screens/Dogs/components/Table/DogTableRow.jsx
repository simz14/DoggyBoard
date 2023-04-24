import React, { useRef } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { TableCell, TableRow } from "@mui/material";
import useDogs from "../../../../hooks/useDogs";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { handleClickDelete } from "../../../../utils/deleteFunction";

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
  const { setDogs } = useDogs();
  const navigate = useNavigate();
  const ref = useRef(null);

  const handleClickEdit = (e, id) => {
    if (!ref.current.contains(e.target)) {
      navigate(`/dog/${id}`);
    }
  };
  const removeDog = (id) => {
    setDogs((prev) => prev.filter((item) => item.id != id));
  };

  return (
    <TableRow
      onClick={(e) => handleClickEdit(e, item.id)}
      key={item?.id}
      sx={{ td: { border: 0 } }}
    >
      <TableCell>{item?.id}</TableCell>
      <TableCell>{item?.name}</TableCell>
      <TableCell>{item?.breed}</TableCell>
      <TableCell>{item?.age}</TableCell>
      <TableCell>{item?.location}</TableCell>
      <TableCell>
        <IconsWrapper>
          <div onClick={(e) => handleClickEdit(e, item.id)} ref={ref}>
            <MdDeleteOutline
              onClick={() =>
                handleClickDelete(item.id, () => removeDog(item.id))
              }
              className="delete"
            />
          </div>
          <AiOutlineEdit className="edit" />
        </IconsWrapper>
      </TableCell>
    </TableRow>
  );
};
DogsTableRow.propTypes = {
  item: PropTypes.object,
};
export default DogsTableRow;
