import React from "react";
import { TableBody } from "@mui/material";
import DogsTableRow from "./DogTableRow";
import { PropTypes } from "prop-types";

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
DogsTableBody.propTypes = {
  dogs: PropTypes.array,
};

export default DogsTableBody;
