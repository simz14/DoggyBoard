import React from "react";
import { TableBody } from "@mui/material";
import AdoptionsTableRow from "./AdoptionsTableRow";
import { PropTypes } from "prop-types";
import { sortObjects } from "../../../../utils/sortObjects";

const AdoptionsTableBody = ({
  adoptions,
  sliceStart,
  sliceEnd,
  sort,
  sortBy,
}) => {
  return (
    <TableBody>
      {adoptions ? (
        sortBy[0] === "asc" ? (
          sortObjects(adoptions, sort, true)
            .slice(sliceStart, sliceEnd)
            .map((row) => {
              return <AdoptionsTableRow key={row.id} item={row} />;
            })
        ) : sortBy[0] === "desc" ? (
          sortObjects(adoptions, sort, false)
            .slice(sliceStart, sliceEnd)
            .map((row) => {
              return <AdoptionsTableRow key={row.id} item={row} />;
            })
        ) : (
          adoptions
            .sort((a, b) => a.id - b.id)
            .slice(sliceStart, sliceEnd)
            .map((row) => {
              return <AdoptionsTableRow key={row.id} item={row} />;
            })
        )
      ) : (
        <></>
      )}
    </TableBody>
  );
};
AdoptionsTableBody.propTypes = {
  adoptions: PropTypes.array,
};

export default AdoptionsTableBody;
