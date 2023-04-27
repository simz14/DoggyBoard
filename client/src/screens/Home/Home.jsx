import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { Container } from "../../components/Container";
import ChartComponent from "../../components/ChartComponent";
import PawsBcg from "../../components/PawsBcg";
import useDogs from "../../hooks/useDogs";
import useAdoptions from "../../hooks/useAdoptions";
import BasicChartComponent from "../../components/BasicChartComponent";

const HomeWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBcgBlue};
  position: relative;
  min-height: 100vh;
  .screenWrapper {
    padding-top: 48px;
    width: 100%;
    .intro {
      margin: 1rem 0;
    }
  }
`;

const Home = () => {
  const { dogs } = useDogs();
  const { adoptions } = useAdoptions();

  const getDataForChart = (data) => {
    if (data) {
      let datesCopy = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      data.map((item) => (datesCopy[new Date(item.date).getMonth()] += 1));
      return datesCopy;
    }
  };
  return (
    <Layout>
      <HomeWrapper>
        <PawsBcg>
          <Container>
            <div className="screenWrapper">
              <div className="intro">
                <h1>Welcome to DoggyBoard</h1>
                <span>Here are overviews of how is the shelter doing</span>
              </div>
              <ChartComponent
                unit="Dogs"
                title="Dogs Overview"
                subTitle="Number of dogs"
                data={getDataForChart(dogs)}
                lineColor="#7a83f1"
                shadowColor="#3730a3"
              />
              <BasicChartComponent
                unit="Adoptions"
                title="Adoptions Overview"
                subTitle="Number of adoptions"
                data={getDataForChart(adoptions)}
                lineColor="#f67c73"
                shadowColor="#f44336"
              />
            </div>
          </Container>
        </PawsBcg>
      </HomeWrapper>
    </Layout>
  );
};

export default Home;
