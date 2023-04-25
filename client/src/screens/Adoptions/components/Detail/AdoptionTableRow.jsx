import React, { useRef } from "react";
import { TableCell, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";

const AdoptionTableRow = ({ item }) => {
  const navigate = useNavigate();

  const handleClickEdit = (e, id) => {
    navigate(`/dog/${id}`);
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
    </TableRow>
  );
};
AdoptionTableRow.propTypes = {
  item: PropTypes.object,
};
export default AdoptionTableRow;
