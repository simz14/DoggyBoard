import React from "react";
import { TableBody } from "@mui/material";
import DogsTableRow from "./TableRow";

const DogsTableBody = ({ dogs }) => {
  return (
    <TableBody>
      {dogs ? (
        dogs.map((row) => {
          return <DogsTableRow key={row.id} item={row} />;
        })
      ) : (
        <></>
      )}
    </TableBody>
  );
};

export default DogsTableBody;
