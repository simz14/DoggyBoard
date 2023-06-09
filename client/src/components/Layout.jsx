import React, { useState } from "react";
import Header from "./Header/Header";
import SideBar from "./Header/components/SideBar";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const LayoutWrap = styled.div`
  display: flex;
  position: relative;

  .page {
    width: 100%;
  }
  .static {
    display: block;
    height: 100%;
  }
  .custom {
    display: none;
  }

  @media (max-width: 1000px) {
    .static {
      display: none;
    }
    .custom {
      display: block;
    }
  }
`;

const Layout = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleOpenMenu = () => {
    setShowSideBar(true);
  };
  const handleCloseMenu = () => {
    setShowSideBar(false);
  };

  return (
    <LayoutWrap>
      <div className="sideBar">
        <div className="static">
          <SideBar handleClickMenu={handleCloseMenu} />
        </div>

        {showSideBar && (
          <div className="custom">
            <SideBar handleClickMenu={handleCloseMenu} />
          </div>
        )}
      </div>

      <div className="page">
        <Header handleClickMenu={handleOpenMenu} />
        {children}
      </div>
    </LayoutWrap>
  );
};
Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
