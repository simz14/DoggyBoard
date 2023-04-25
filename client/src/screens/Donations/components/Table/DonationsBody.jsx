import React from "react";
import { TableBody } from "@mui/material";
import DonationsRow from "./DonationsRow";
import { PropTypes } from "prop-types";
import { sortObjects } from "../../../../utils/sortObjects";

const DonationsBody = ({ donations, sliceStart, sliceEnd, sortBy, sort }) => {
  return (
    <TableBody>
      {donations ? (
        sortBy[0] === "asc" ? (
          sortObjects(donations, sort, true)
            .slice(sliceStart, sliceEnd)
            .map((row) => {
              return <DonationsRow key={row.id} item={row} />;
            })
        ) : sortBy[0] === "desc" ? (
          sortObjects(donations, sort, false)
            .slice(sliceStart, sliceEnd)
            .map((row) => {
              return <DonationsRow key={row.id} item={row} />;
            })
        ) : (
          donations
            .sort((a, b) => a.id - b.id)
            .slice(sliceStart, sliceEnd)
            .map((row) => {
              return <DonationsRow key={row.id} item={row} />;
            })
        )
      ) : (
        <></>
      )}
    </TableBody>
  );
};
DonationsBody.propTypes = {
  donations: PropTypes.array,
  sliceStart: PropTypes.number,
  sliceEnd: PropTypes.number,
};

export default DonationsBody;
