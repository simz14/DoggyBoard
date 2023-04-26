import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { HiOutlineFolder } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const FolderBoxWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.padding.xl};
  margin: 8px;
  background-color: white;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => theme.border.radius.m};
  width: 5rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .icon {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    svg {
      color: ${({ theme }) => theme.colors.grey};
      width: 56px;
      height: 56px;
    }
  }
  p {
    font-size: ${({ theme }) => theme.typography.size.s};
  }
`;

const FolderBox = ({ folder }) => {
  const navigate = useNavigate();
  return (
    <FolderBoxWrapper onClick={() => navigate(`/media/${folder.id}`)}>
      <div className="icon">
        <HiOutlineFolder />
      </div>

      <p>{folder?.name}</p>
    </FolderBoxWrapper>
  );
};

FolderBox.propTypes = {
  folder: PropTypes.object,
};

export default FolderBox;
