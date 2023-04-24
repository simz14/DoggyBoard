import React from "react";
import { useState } from "react";

const usePagination = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const sliceStart = page * rowsPerPage;
  const sliceEnd = page * rowsPerPage + rowsPerPage;
  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(e.target.value);
    setPage(0);
  };

  return {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    sliceStart,
    sliceEnd,
  };
};
export default usePagination;
