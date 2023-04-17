import React from "react";
import styled from "styled-components";

const LoginWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  height: 100vh;

  .coloredSide {
    position: relative;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .circle {
    position: absolute;

    width: 30rem;
    height: 30rem;
    border-radius: 100%;
    border: 8rem solid white;
    opacity: 0.1;
  }
  .top {
    top: -20rem;
    left: -20rem;
  }
  .bottom {
    bottom: -20rem;
    right: -20rem;
  }
  .introText {
    z-index: 999;
    color: white;
    text-align: center;
  }
  @media (max-width: 1000px) {
    display: flex;
    .coloredSide {
      display: none;
    }
  }
`;

const Login = () => {
  return (
    <LoginWrapper>
      <div></div>
      <div className="coloredSide">
        <div className="circle top"></div>
        <div className="circle bottom"></div>
        <div className="introText">
          <h1>Welcome to Happytails dashboard</h1>
          <p>Please sign in to continue</p>
        </div>
      </div>
    </LoginWrapper>
  );
};

export default Login;
