import React from "react";
import { TableBody, TableCell, TableRow } from "@mui/material";
import useDogs from "../../../hooks/useDoga";

const DogsTableBody = () => {
  const { dogs } = useDogs();
  return (
    <TableBody>
      {dogs.map((row) => (
        <TableRow key={row.id} sx={{ td: { border: 0 } }}>
          <TableCell align="right">{row.id}</TableCell>
          <TableCell align="right">{row.name}</TableCell>
          <TableCell align="right">{row.breed}</TableCell>
          <TableCell align="right">{row.age}</TableCell>
          <TableCell align="right">{row.location}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default DogsTableBody;
