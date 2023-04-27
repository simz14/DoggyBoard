import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { Container } from "../../components/Container";
import ChartComponent from "../../components/ChartComponent";
import PawsBcg from "../../components/PawsBcg";
import useAdoptions from "../../hooks/useAdoptions";
import useDogs from "../../hooks/useDogs";

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
  const { dogs } = useDogs();
  const [dogsDatesForChart, setDogsDatesForChart] = useState();

  useEffect(() => {
    if (dogs) {
      let datesCopy = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      dogs.map((dog) => (datesCopy[new Date(dog.arrived).getMonth() - 1] += 1));
      setDogsDatesForChart(datesCopy);
    }
  }, [dogs]);

  return (
    <Layout>
      <HomeWrapper>
        <PawsBcg>
          <Container>
            <div className="screenWrapper">
              <ChartComponent
                unit="Dogs"
                title="Dogs Overview"
                subTitle="Number of dogs"
                data={dogsDatesForChart}
                lineColor="#7a83f1"
                shadowColor="#3730a3"
              />
            </div>
          </Container>
        </PawsBcg>
      </HomeWrapper>
    </Layout>
  );
};

export default Home;
