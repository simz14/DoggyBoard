import React from "react";
import { TableBody } from "@mui/material";
import DogsTableRow from "../Table/DogTableRow";
import { PropTypes } from "prop-types";
import { sortObjects } from "../../../../utils/sortObjects";

const DogsTableBody = ({ dogs, sliceStart, sliceEnd, sort, sortBy }) => {
  return (
    <TableBody>
      {dogs ? (
        sortBy[0] === "asc" ? (
          sortObjects(dogs, sort, true)
            .slice(sliceStart, sliceEnd)
            .map((row) => {
              return <DogsTableRow key={row.id} item={row} />;
            })
        ) : sortBy[0] === "desc" ? (
          sortObjects(dogs, sort, false)
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
