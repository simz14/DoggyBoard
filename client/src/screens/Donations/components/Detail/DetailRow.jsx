import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

const DetailRow = ({ item }) => {
  const navigate = useNavigate();

  const handleClickRow = (id) => {
    navigate(`/donation/${id}`);
  };
  return (
    <TableRow onClick={() => handleClickRow(item.id)}>
      <TableCell>{item?.id}</TableCell>
      <TableCell>{item?.firstname}</TableCell>
      <TableCell>{item?.lastname}</TableCell>
      <TableCell>{item?.phone}</TableCell>
      <TableCell>{item?.amount}$</TableCell>
      <TableCell>{item?.dateInFormat}</TableCell>
    </TableRow>
  );
};
DetailRow.propTypes = {
  item: PropTypes.object,
};
export default DetailRow;
