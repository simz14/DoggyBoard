import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";
import HeadCell from "../../../../components/Table/HeadCell";

const DonationsHead = ({ setSortBy, sortBy, setSort, sort }) => {
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
          title="First Name"
          name="firstname"
          setSortBy={setSortBy}
          sortBy={sortBy}
          setSort={setSort}
          sort={sort}
        />
        <HeadCell
          title="Last Name"
          name="lastname"
          setSortBy={setSortBy}
          sortBy={sortBy}
          setSort={setSort}
          sort={sort}
        />
        <HeadCell
          name="Phone"
          setSortBy={setSortBy}
          sortBy={sortBy}
          setSort={setSort}
          sort={sort}
        />
        <HeadCell
          name="Amount"
          setSortBy={setSortBy}
          sortBy={sortBy}
          setSort={setSort}
          sort={sort}
        />
      </TableRow>
    </TableHead>
  );
};

export default DonationsHead;
