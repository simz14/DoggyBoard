import React from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { IconButton, List, ListItem, ListItemButton } from "@mui/material";
import { MdOutlinePermMedia } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { FaDog } from "react-icons/fa";

const SideBarWrap = styled.div`
  min-height: 100vh;
  overflow-y: auto;
  width: 280px;
  height: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  z-index: 999;
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .cancelIcon {
    position: absolute;
    right: 0;
    top: 0;
    color: ${({ theme }) => theme.colors.grey};
    z-index: 9999;
    display: none;
  }

  @media (max-width: 1200px) {
    position: absolute;
    .cancelIcon {
      display: block;
    }
  }

  h2 {
    color: white;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.lightPurple};
  }
  p {
    color: white;
    font-size: 13px;
  }

  .MuiListItem-root {
    color: white;
    padding: 0;
  }
  .MuiListItemButton-root {
    gap: 1rem;
    padding: 0;
  }
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 5rem;
    height: 5rem;
    border-radius: 100px;
  }
  span {
    color: ${({ theme }) => theme.colors.grey};
    font-size: 13px;
  }
`;

const SideBar = ({ setShowSideBar }) => {
  return (
    <SideBarWrap>
      <IconButton onClick={() => setShowSideBar(false)} className="cancelIcon">
        <IoClose />
      </IconButton>
      <User>
        <img
          src="https://react-material.fusetheme.com/assets/images/avatars/brian-hughes.jpg"
          alt="user"
        />
        <p>Abbott Keitch</p>
        <span>admin@fusetheme.com</span>
      </User>
      <List
        sx={{
          width: "100%",
          maxWidth: 280,
          position: "relative",
          overflow: "auto",
          maxHeight: 600,
        }}
      >
        <h2>DASHBOARDS</h2>
        <ListItem>
          <ListItemButton>
            <FaDog />
            <p>Dogs</p>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <HiHome />
            <p>Adoptions</p>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <GiReceiveMoney />
            <p>Donations</p>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <MdOutlinePermMedia />
            <p>Media</p>
          </ListItemButton>
        </ListItem>
      </List>
    </SideBarWrap>
  );
};

export default SideBar;
