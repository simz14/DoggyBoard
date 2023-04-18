import Reacts from "react";
import Header from "./Header/Header";
import SideBar from "./Header/components/SideBar";
import styled from "styled-components";

const LayoutWrap = styled.div`
  display: flex;
  .sideBar {
    display: block;
  }
  .page {
    width: 100%;
  }

  @media (max-width: 1200px) {
    .sideBar {
      display: none;
    }
  }
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrap>
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="page">
        <Header />
        {children}
      </div>
    </LayoutWrap>
  );
};

export default Layout;
