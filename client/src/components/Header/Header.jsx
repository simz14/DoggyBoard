import React from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import { HiMenu } from "react-icons/hi";
import { AiOutlineLogout } from "react-icons/ai";
import { PropTypes } from "prop-types";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HeaderWrap = styled.div`
  display: flex;
  min-width: 100%;
`;

const MenuWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 3rem;
  max-height: 3rem;
  display: flex;
  width: 100%;
  justify-content: end;
  z-index: 99;
  .show {
    display: none;
  }

  .userOptions {
    display: flex;
    justify-content: end;
    gap: 1rem;
    align-items: center;
    padding: 5px;
    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: ${({ theme }) => theme.colors.darkBlue};
    }
    .userData {
      display: flex;
      gap: 0.5rem;
    }
    .logout {
      cursor: pointer;
    }
  }
  @media (max-width: 1000px) {
    justify-content: space-between;
    .show {
      display: block;
    }
  }
`;

const Header = ({ handleClickMenu }) => {
  const navigate = useNavigate();
  return (
    <HeaderWrap>
      <MenuWrap>
        <IconButton className="show" onClick={handleClickMenu}>
          {<HiMenu />}
        </IconButton>

        <div className="userOptions">
          <FaUserAlt />
          <div className="userData">
            <span>James</span>
            <span>Smith</span>
          </div>
          <AiOutlineLogout
            className={"logout"}
            onClick={() => navigate("/login")}
          />
        </div>
      </MenuWrap>
    </HeaderWrap>
  );
};
Header.propTypes = {
  handleClickMenu: PropTypes.func,
};
export default Header;
