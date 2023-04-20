import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const StyledWrapper = styled.div`
  overflow-x: auto;
  width: 100%;
  min-width: 350px;
`;

const TableWrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
TableWrapper.propTypes = {
  children: PropTypes.node,
};

export default TableWrapper;
