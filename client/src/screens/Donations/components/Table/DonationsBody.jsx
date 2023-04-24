import React from "react";
import { TableBody } from "@mui/material";
import DonationsRow from "./DonationsRow";
import { PropTypes } from "prop-types";

const DonationsBody = ({ donations, sliceStart, sliceEnd }) => {
  return (
    <TableBody>
      {donations ? (
        donations.slice(sliceStart, sliceEnd).map((row) => {
          return <DonationsRow key={row.id} item={row} />;
        })
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
