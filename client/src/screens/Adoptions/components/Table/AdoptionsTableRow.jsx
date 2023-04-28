import React, { useRef } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { TableCell, TableRow } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { handleClickDelete } from "../../../../utils/deleteFunction";
import useAdoptions from "../../../../hooks/useAdoptions";
import {
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineMinusCircle,
} from "react-icons/hi";

const IconsWrapper = styled.div`
  display: flex;

  .delete {
    color: red;
    cursor: pointer;
  }
  .edit {
    color: orange;
    cursor: pointer;
  }
  .approved {
    color: green;
  }
  .declined {
    color: red;
  }
  .pending {
    color: orange;
  }
`;

const AdoptionsTableRow = ({ item }) => {
  const { setAdoptions } = useAdoptions();
  const navigate = useNavigate();
  const ref = useRef(null);

  const handleClickEdit = (e, id) => {
    if (!ref.current.contains(e.target)) {
      navigate(`/adoption/${id}`);
    }
  };
  const removeAdoption = (id) => {
    setAdoptions((prev) => prev.filter((item) => item.id != id));
  };

  return (
    <TableRow
      onClick={(e) => handleClickEdit(e, item.id)}
      key={item?.id}
      sx={{ td: { border: 0 } }}
    >
      <TableCell>{item?.id}</TableCell>
      <TableCell>{item?.firstName}</TableCell>
      <TableCell>{item?.lastName}</TableCell>
      <TableCell>{item?.email}</TableCell>
      <TableCell>{item?.petId}</TableCell>
      <TableCell>
        <IconsWrapper>
          {item?.status === "approved" ? (
            <HiOutlineCheckCircle className="approved" />
          ) : item?.status === "declined" ? (
            <HiOutlineMinusCircle className="declined" />
          ) : (
            <HiOutlineClock className="pending" />
          )}
        </IconsWrapper>
      </TableCell>
      <TableCell>
        <IconsWrapper>
          <div onClick={(e) => handleClickEdit(e, item.id)} ref={ref}>
            <MdDeleteOutline
              onClick={() =>
                handleClickDelete(item.id, () => removeAdoption(item.id))
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
AdoptionsTableRow.propTypes = {
  item: PropTypes.object,
};
export default AdoptionsTableRow;
