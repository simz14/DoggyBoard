import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";

const DonationsRow = ({ item }) => {
  const navigate = useNavigate();

  const handleClickRow = (e, id) => {
    navigate(`/donation/${id}`);
  };

  return (
    <TableRow
      onClick={(e) => handleClickRow(e, item.id)}
      sx={{ td: { border: 0 } }}
    >
      <TableCell>{item?.id}</TableCell>
      <TableCell>{item?.firstname}</TableCell>
      <TableCell>{item?.lastname}</TableCell>
      <TableCell>{item?.phone}</TableCell>
      <TableCell>{item?.amount}$</TableCell>
    </TableRow>
  );
};
DonationsRow.propTypes = {
  item: PropTypes.object,
};
export default DonationsRow;
