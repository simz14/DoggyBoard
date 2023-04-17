import React, { useState } from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import { HiMenu } from "react-icons/hi";
import SideBar from "./components/SideBar";

const HeaderWrap = styled.div`
  display: flex;
  min-width: 100vw;
`;

const MenuWrap = styled.div`
  background-color: white;
  box-shadow: 0px 1px 4px -2px #888888;
  position: sticky;
  top: 0;
  min-height: 3rem;
  display: flex;
  width: 100%;
`;

const Header = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <HeaderWrap>
      {showSideBar && <SideBar showNavBar={setShowSideBar} />}

      <MenuWrap>
        <IconButton onClick={() => setShowSideBar((prev) => !prev)}>
          {<HiMenu />}
        </IconButton>
      </MenuWrap>
    </HeaderWrap>
  );
};

export default Header;
