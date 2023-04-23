import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const StyledButton = styled.button`
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

const BasicButton = ({ icon, title, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {icon && icon}
      {title}
    </StyledButton>
  );
};
BasicButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};
export default BasicButton;
