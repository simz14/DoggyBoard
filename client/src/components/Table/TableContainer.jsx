import React from "react";
import styled from "styled-components";

const StyledTable = styled.div``;

const TableContainer = ({ children }) => {
  return <StyledTable>{children}</StyledTable>;
};

export default TableContainer;
