import React from "react";
import { TableBody } from "@mui/material";
import DogsTableRow from "./DogTableRow";
import { PropTypes } from "prop-types";

const DogsTableBody = ({ dogs, sliceStart, sliceEnd }) => {
  return (
    <TableBody>
      {dogs ? (
        dogs.slice(sliceStart, sliceEnd).map((row) => {
          return <DogsTableRow key={row.id} item={row} />;
        })
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
