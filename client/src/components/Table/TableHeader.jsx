import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div``;

const TableHeader = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default TableHeader;
