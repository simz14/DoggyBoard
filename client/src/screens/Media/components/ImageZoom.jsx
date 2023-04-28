import { Modal } from "@mui/material";
import React from "react";
import styled from "styled-components";

const ImageWrap = styled.div`
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400;
    background-color: "background.paper";
    border: "2px solid #000";
    box-shadow: 24;
  }
`;

const ImageZoom = ({ setShowZoom, showZoom }) => {
  console.log(Boolean(showZoom));
  const handleClose = () => setShowZoom(null);
  return (
    <Modal
      open={Boolean(showZoom)}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ImageWrap>
        <img src={showZoom} alt="" />
      </ImageWrap>
    </Modal>
  );
};

export default ImageZoom;
