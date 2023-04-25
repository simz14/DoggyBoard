import { TableCell, TableSortLabel } from "@mui/material";
import { useState } from "react";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";

const HeadCell = ({ name, setSortBy, sortBy, setSort, sort }) => {
  const [ref, setRef] = useState(null);

  const handleClickColumn = (e, sort) => {
    if (!e.target.contains(ref)) {
      setRef(e.target);
      setSort(sort);
    }
    setSortBy([sortBy.at(1), sortBy.at(2), sortBy.at(0)]);
  };

  return (
    <TableCell
      onClick={(e) => handleClickColumn(e, name.toLowerCase())}
      align="right"
    >
      <TableSortLabel
        active={sort === name.toLowerCase()}
        IconComponent={
          sortBy[0] === "desc"
            ? BsArrowUpShort
            : sortBy[0] === "asc"
            ? BsArrowDownShort
            : null
        }
      >
        {name}
      </TableSortLabel>
    </TableCell>
  );
};

export default HeadCell;
