import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";

const DogsTableRow = ({ item }) => {
  const navigate = useNavigate();

  const handleClickRow = (e, id) => {
    navigate(`/donation/${id}`);
  };

  return (
    <TableRow
      onClick={(e) => handleClickRow(e, item.id)}
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
DogsTableRow.propTypes = {
  item: PropTypes.object,
};
export default DogsTableRow;
