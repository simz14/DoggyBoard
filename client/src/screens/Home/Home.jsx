import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { Container } from "../../components/Container";
import ChartComponent from "../../components/ChartComponent";
import PawsBcg from "../../components/PawsBcg";
import useDogs from "../../hooks/useDogs";
import useAdoptions from "../../hooks/useAdoptions";
import useDonations from "../../hooks/useDonations";
import useMedia from "../../hooks/useMedia";
import BasicChartComponent from "../../components/BasicChartComponent";
import Masonry from "@mui/lab/Masonry/Masonry";
import GetBack from "../../components/GetBack";

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

    .chartsWrapper {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .image {
      max-height: 10rem;
      object-fit: cover;
    }
  }
  @media (max-width: 600px) {
    .screenWrapper {
      .image {
        width: 100%;
      }
    }
  }
`;

const Home = () => {
  const { dogs } = useDogs();
  const { adoptions } = useAdoptions();
  const { donations } = useDonations();
  const { media } = useMedia();

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
              <div className="chartsWrapper">
                <ChartComponent
                  unit="Dogs"
                  title="Dogs Overview"
                  subTitle="Number of dogs"
                  data={getDataForChart(dogs)}
                  lineColor="#7a83f1"
                  shadowColor="#3730a3"
                  navigateTo="/dogs"
                />
                <BasicChartComponent
                  unit="Adoptions"
                  title="Adoptions Overview"
                  subTitle="Number of adoptions"
                  data={getDataForChart(adoptions)}
                  lineColor="#f67c73"
                  shadowColor="#f44336"
                  navigateTo="/adoptions"
                />
                <BasicChartComponent
                  unit="Donations"
                  title="Donations Overview"
                  subTitle="Number of donations"
                  data={getDataForChart(donations)}
                  lineColor="#488e4b"
                  shadowColor="#2e7d32"
                  navigateTo="/donations"
                />
                <div className="galery">
                  <Masonry
                    sx={{ justifyContent: "center" }}
                    columns={{ sx: 1, sm: 2 }}
                    spacing={2}
                  >
                    {media.slice(0, 6).map((item) => {
                      return (
                        <img
                          className="image"
                          key={item.id}
                          src={item.src}
                          alt="photo"
                        />
                      );
                    })}
                  </Masonry>
                  <GetBack naviageTo="/media" backPage="Media" toArrow={true} />
                </div>
              </div>
            </div>
          </Container>
        </PawsBcg>
      </HomeWrapper>
    </Layout>
  );
};

export default Home;
