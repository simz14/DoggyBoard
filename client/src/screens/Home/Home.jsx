import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { Container } from "../../components/Container";
import ChartComponent from "../../components/ChartComponent";
import PawsBcg from "../../components/PawsBcg";

const HomeWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBcgBlue};
  position: relative;
  min-height: 100vh;
  .screenWrapper {
    padding-top: 48px;
    width: 100%;
  }
`;

const Home = () => {
  return (
    <Layout>
      <HomeWrapper>
        <PawsBcg>
          <Container>
            <div className="screenWrapper">
              <ChartComponent lineColor="#7a83f1" shadowColor="#3730a3" />
            </div>
          </Container>
        </PawsBcg>
      </HomeWrapper>
    </Layout>
  );
};

export default Home;
