import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";

const AdoptionDogHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Id</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Breed</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Location</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default AdoptionDogHead;
