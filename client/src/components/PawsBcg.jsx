import React from "react";
import styled from "styled-components";
import pawsBcg from "../assets/pawsBcg.jpg";

const PawsWrapper = styled.div`
  .paws {
    object-fit: cover;
    position: absolute;
    bottom: 0;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0.07;
  }
`;

const PawsBcg = ({ children }) => {
  return (
    <PawsWrapper>
      <img className="paws" src={pawsBcg} alt="paws" />
      {children}
    </PawsWrapper>
  );
};

export default PawsBcg;
