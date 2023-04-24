import React from "react";
import { TableBody } from "@mui/material";
import DogsTableRow from "../Table/DogTableRow";
import { PropTypes } from "prop-types";

const DogsTableBody = ({ dogs, sliceStart, sliceEnd, sort, sortBy }) => {
  return (
    <TableBody>
      {dogs ? (
        sortBy[0] === "asc" ? (
          dogs
            .sort((a, b) => a[sort] - b[sort])
            .slice(sliceStart, sliceEnd)
            .map((row) => {
              return <DogsTableRow key={row.id} item={row} />;
            })
        ) : sortBy[0] === "desc" ? (
          dogs
            .sort((a, b) => b[sort] - a[sort])
            .slice(sliceStart, sliceEnd)
            .map((row) => {
              return <DogsTableRow key={row.id} item={row} />;
            })
        ) : (
          dogs
            .sort((a, b) => a.id - b.id)
            .slice(sliceStart, sliceEnd)
            .map((row) => {
              return <DogsTableRow key={row.id} item={row} />;
            })
        )
      ) : (
        <></>
      )}
    </TableBody>
  );
};
DogsTableBody.propTypes = {
  dogs: PropTypes.array,
};

export default DogsTableBody;
