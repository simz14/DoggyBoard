import React from "react";
import Layout from "../../components/Layout";
import PawsBcg from "../../components/PawsBcg";
import { Container } from "../../components/Container";
import styled from "styled-components";
import useFolders from "../../hooks/useFolders";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBcgBlue};
  position: relative;
  min-height: 100vh;
  .contentWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 48px;
  }
  .introWrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 600px) {
    .introWrap {
      display: flex;
      flex-direction: column;
    }
  }
  .mediaWrapper {
    background-color: white;
  }
  .folders {
    border-color: ${({ theme }) => theme.colors.lightBcgBlue};
  }
`;

const MeidaScreen = () => {
  const { folders } = useFolders();
  console.log(folders);
  return (
    <Layout>
      <Wrapper>
        <PawsBcg>
          <Container>
            <div className="contentWrapper">
              <div className="introWrap">
                <h2>Media</h2>
              </div>
              <div className="mediaWrapper">
                <div className="folders"></div>
              </div>
            </div>
          </Container>
        </PawsBcg>
      </Wrapper>
    </Layout>
  );
};

export default MeidaScreen;
