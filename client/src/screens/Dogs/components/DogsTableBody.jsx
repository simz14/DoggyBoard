import React from "react";
import { TableBody, TableCell, TableRow } from "@mui/material";
import useDogs from "../../../hooks/useDoga";

const DogsTableBody = () => {
  const { dogs } = useDogs();
  return (
    <TableBody>
      {dogs.map((row) => (
        <TableRow key={row.id} sx={{ td: { border: 0 } }}>
          <TableCell>{row.id}</TableCell>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.breed}</TableCell>
          <TableCell>{row.age}</TableCell>
          <TableCell>{row.location}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default DogsTableBody;
