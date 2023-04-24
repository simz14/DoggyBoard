import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";

const DetailHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="right">Id</TableCell>
        <TableCell align="right">First name</TableCell>
        <TableCell align="right">Last name</TableCell>
        <TableCell align="right">Phone</TableCell>
        <TableCell align="right">Amount</TableCell>
        <TableCell align="right">Date</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default DetailHead;
