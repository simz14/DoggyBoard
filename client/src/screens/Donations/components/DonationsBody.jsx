import React from "react";
import { TableBody } from "@mui/material";
import DonationsRow from "./DonationsRow";
import { PropTypes } from "prop-types";

const DonationsBody = ({ donations }) => {
  return (
    <TableBody>
      {donations ? (
        donations.map((row) => {
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
};

export default DonationsBody;
