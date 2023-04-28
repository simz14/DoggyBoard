import { Modal } from "@mui/material";
import React from "react";
import styled from "styled-components";

const ImageWrap = styled.div`
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    max-height: 40rem;
  }
`;

const ImageZoom = ({ setShowZoom, showZoom }) => {
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
