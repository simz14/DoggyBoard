import React, { useState } from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";
import styled from "styled-components";

const StyledRow = styled(TableRow)`
  .active {
    background-color: red;
  }
`;

const DogsTableHead = ({ sortBy, setSortBy, setSort }) => {
  const [ref, setRef] = useState(null);

  const handleClickColumn = (e, sort) => {
    if (!e.target.contains(ref)) {
      setRef(e.target);
      setSort(sort);
      console.log(ref);
      // ref.className = "active";
    }
    setSortBy([sortBy.at(1), sortBy.at(2), sortBy.at(0)]);
  };
  return (
    <TableHead>
      <StyledRow>
        <TableCell onClick={(e) => handleClickColumn(e, "id")} align="right">
          Id
        </TableCell>
        <TableCell onClick={(e) => handleClickColumn(e, "name")} align="right">
          Name
        </TableCell>
        <TableCell onClick={(e) => handleClickColumn(e, "breed")} align="right">
          Breed
        </TableCell>
        <TableCell onClick={(e) => handleClickColumn(e, "age")} align="right">
          Age
        </TableCell>
        <TableCell
          onClick={(e) => handleClickColumn(e, "location")}
          align="right"
        >
          Location
        </TableCell>
        <TableCell align="right"></TableCell>
      </StyledRow>
    </TableHead>
  );
};

export default DogsTableHead;
