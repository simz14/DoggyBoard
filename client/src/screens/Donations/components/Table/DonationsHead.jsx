import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";
import HeadCell from "../../../../components/Table/HeadCell";

const DonationsHead = ({ setSortBy, sortBy, setSort, sort }) => {
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
          title="Phone"
          name="phone"
          setSortBy={setSortBy}
          sortBy={sortBy}
          setSort={setSort}
          sort={sort}
        />
        <HeadCell
          title="Amount"
          name="amount"
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
