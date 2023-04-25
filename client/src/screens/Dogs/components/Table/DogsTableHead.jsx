import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";

import HeadCell from "../../../../components/Table/HeadCell";

const DogsTableHead = ({ sortBy, sort, setSortBy, setSort }) => {
  return (
    <TableHead>
      <TableRow>
        <HeadCell
          title="Id"
          name="id"
          setSortBy={setSortBy}
          sortBy={sortBy}
          setSort={setSort}
          sort={sort}
        />
        <HeadCell
          title="Name"
          name="name"
          setSortBy={setSortBy}
          sortBy={sortBy}
          setSort={setSort}
          sort={sort}
        />
        <HeadCell
          title="Breed"
          name="breed"
          setSortBy={setSortBy}
          sortBy={sortBy}
          setSort={setSort}
          sort={sort}
        />
        <HeadCell
          title="Age"
          name="age"
          setSortBy={setSortBy}
          sortBy={sortBy}
          setSort={setSort}
          sort={sort}
        />
        <HeadCell
          title="Location"
          name="location"
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
