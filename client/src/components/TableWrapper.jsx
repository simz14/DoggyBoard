import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  overflow-x: auto;
  width: 100%;
  min-width: 350px;
`;

const TableWrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default TableWrapper;
