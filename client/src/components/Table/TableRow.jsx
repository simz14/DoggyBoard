import React from "react";
import styled from "styled-components";

const StyledRow = styled.div``;

const TableRow = ({ children }) => {
  return <StyledRow>{children}</StyledRow>;
};

export default TableRow;
