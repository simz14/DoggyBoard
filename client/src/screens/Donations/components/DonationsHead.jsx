import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";

const DonationsHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="right">Id</TableCell>
        <TableCell align="right">First name</TableCell>
        <TableCell align="right">Last name</TableCell>
        <TableCell align="right">Phone</TableCell>
        <TableCell align="right">Amount</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default DonationsHead;
