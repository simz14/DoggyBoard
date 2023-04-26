import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const StyledLabelWrapper = styled.label`
  background-color: ${({ theme }) => theme.colors.mediumPurple};
  font-weight: ${({ theme }) => theme.typography.weight.s};
  font-size: ${({ theme }) => theme.typography.size.m};
  border-radius: ${({ theme }) => theme.border.radius.l};
  padding: ${({ theme }) => theme.spacing.padding.s};
  color: white;
  border: none;
  cursor: pointer;
  min-width: 5rem;
  transition: 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: ${({ theme }) => theme.colors.darkPurple};
    transition: 0.5s ease;
  }
`;

const StyledLabel = ({ icon, title, onClick, children }) => {
  return (
    <StyledLabelWrapper onClick={onClick}>
      {children}
      {icon && icon}
      {title}
    </StyledLabelWrapper>
  );
};
StyledLabel.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  onCchildrenlick: PropTypes.node,
};
export default StyledLabel;
