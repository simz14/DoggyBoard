import React from "react";
import styled from "styled-components";
import LoginForm from "./components/LoginFrom";
import bcgPaws from "../../assets/pawsBcg.jpg";

const LoginWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  height: 100vh;

  .paws {
    object-fit: cover;
    position: absolute;
    bottom: 0;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0.07;
  }
  .acivePaws {
    display: none;
  }

  .formSide {
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
  }

  .coloredSide {
    position: relative;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  .introText {
    z-index: 999;
    color: white;
    text-align: center;
  }

  @media (max-width: 1000px) {
    display: flex;
    background-color: ${({ theme }) => theme.colors.lightBcgBlue};
    .acivePaws {
      display: block;
    }
    .coloredSide {
      display: none;
    }
    .formSide {
      justify-content: center;
    }
  }
  @media (max-width: 600px) {
    background-color: white;
  }
`;

const Login = () => {
  return (
    <LoginWrapper>
      <div className="formSide">
        <img className="paws acivePaws" src={bcgPaws} alt="paws" />
        <LoginForm />
      </div>
      <div className="coloredSide">
        <img className="paws" src={bcgPaws} alt="paws" />
        <div className="introText">
          <h1>Welcome to Happytails dashboard</h1>
          <p>Please sign in to continue</p>
        </div>
      </div>
    </LoginWrapper>
  );
};

export default Login;
