import { TableCell, TableSortLabel } from "@mui/material";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";

const HeadCell = ({ title, name, setSortBy, sortBy, setSort, sort }) => {
  const handleClickColumn = (sort) => {
    setSort(sort);
    setSortBy([sortBy.at(1), sortBy.at(2), sortBy.at(0)]);
  };

  return (
    <TableCell onClick={() => handleClickColumn(name)} align="right">
      {title ? title : name}
      <TableSortLabel
        active={sort === name}
        IconComponent={
          sortBy[0] === "desc"
            ? BsArrowUpShort
            : sortBy[0] === "asc"
            ? BsArrowDownShort
            : null
        }
      ></TableSortLabel>
    </TableCell>
  );
};

export default HeadCell;
