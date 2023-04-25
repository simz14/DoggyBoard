import { Popover, TableCell, TableSortLabel, Typography } from "@mui/material";
import { PropTypes } from "prop-types";
import { useRef, useState } from "react";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";

const HeadCell = ({ title, name, setSortBy, sortBy, setSort, sort }) => {
  const [showPopover, setShowPopover] = useState(false);
  const ref = useRef(null);

  const handleClickColumn = (sort) => {
    setSort(sort);
    setSortBy([sortBy.at(1), sortBy.at(2), sortBy.at(0)]);
  };

  return (
    <TableCell
      ref={ref}
      onMouseEnter={() => setShowPopover(true)}
      onMouseLeave={() => setShowPopover(false)}
      onClick={() => {
        handleClickColumn(name), setShowPopover(false);
      }}
      align="right"
    >
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
      <Popover
        sx={{
          pointerEvents: "none",
        }}
        open={showPopover}
        anchorEl={ref.current}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={() => setShowPopover(false)}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1, fontSize: "13px" }}>Sort items.</Typography>
      </Popover>
    </TableCell>
  );
};

HeadCell.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  setSortBy: PropTypes.func,
  sortBy: PropTypes.string,
  setSort: PropTypes.func,
  sort: PropTypes.string,
};

export default HeadCell;
