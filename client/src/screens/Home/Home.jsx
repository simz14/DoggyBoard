import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { Container } from "../../components/Container";
import Chart from "react-apexcharts";

const HomeWrapper = styled.div``;

const series = [
  {
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
  },
];
const options = {
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  title: {
    text: "Product Trends by Month",
    align: "left",
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"],
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  },
};

const Home = () => {
  return (
    <Layout>
      <Container>
        <HomeWrapper>
          <Chart options={options} series={series} />
        </HomeWrapper>
      </Container>
    </Layout>
  );
};

export default Home;
