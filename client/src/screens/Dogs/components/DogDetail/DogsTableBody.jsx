import React from "react";
import { TableBody } from "@mui/material";
import DogsTableRow from "./DogTableRow";
import { PropTypes } from "prop-types";

const DogsTableBody = ({ dogs, page, rowsPerPage }) => {
  console.log(rowsPerPage);
  return (
    <TableBody>
      {dogs ? (
        dogs
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => {
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
