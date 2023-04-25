import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";

import HeadCell from "../../../../components/Table/HeadCell";

const AdoptionsTableHead = ({ sortBy, sort, setSortBy, setSort }) => {
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
          title="First name"
          name="firstName"
          setSortBy={setSortBy}
          sortBy={sortBy}
          setSort={setSort}
          sort={sort}
        />
        <HeadCell
          title="Last name"
          name="lastName"
          setSortBy={setSortBy}
          sortBy={sortBy}
          setSort={setSort}
          sort={sort}
        />
        <HeadCell
          title="Email"
          name="email"
          setSortBy={setSortBy}
          sortBy={sortBy}
          setSort={setSort}
          sort={sort}
        />
        <HeadCell
          title="Pet Id"
          name="petId"
          setSortBy={setSortBy}
          sortBy={sortBy}
          setSort={setSort}
          sort={sort}
        />
        <HeadCell
          title="Status"
          name="status"
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

export default AdoptionsTableHead;
