import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";

import HeadCell from "../../../../components/Table/HeadCell";

const DogsTableHead = ({ sortBy, sort, setSortBy, setSort }) => {
  return (
    <TableHead>
      <TableRow>
        <HeadCell
          name="Id"
          setSortBy={setSortBy}
          sortBy={sortBy}
          setSort={setSort}
          sort={sort}
        />
        <HeadCell
          name="Name"
          setSortBy={setSortBy}
          sortBy={sortBy}
          setSort={setSort}
          sort={sort}
        />
        <HeadCell
          name="Breed"
          setSortBy={setSortBy}
          sortBy={sortBy}
          setSort={setSort}
          sort={sort}
        />
        <HeadCell
          name="Age"
          setSortBy={setSortBy}
          sortBy={sortBy}
          setSort={setSort}
          sort={sort}
        />
        <HeadCell
          name="Location"
          setSortBy={setSortBy}
          sortBy={sortBy}
          setSort={setSort}
          sort={sort}
        />
        <TableCell align="right"></TableCell>
      </TableRow>
    </TableHead>
  );
};

export default DogsTableHead;
