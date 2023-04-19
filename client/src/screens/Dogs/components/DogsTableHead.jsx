import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";

const DogsTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="right">Id</TableCell>
        <TableCell align="right">Name</TableCell>
        <TableCell align="right">Breed</TableCell>
        <TableCell align="right">Age</TableCell>
        <TableCell align="right">Location</TableCell>
        <TableCell align="right"></TableCell>
      </TableRow>
    </TableHead>
  );
};

export default DogsTableHead;
