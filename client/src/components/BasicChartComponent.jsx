import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
import PropTypes from "prop-types";
import GetBack from "./GetBack";

const ChartWrapper = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.border.radius.m};
  display: flex;
  flex-direction: column;

  .loading {
    display: flex;
    align-self: center;
  }

  .description {
    display: flex;
    justify-content: space-between;
    padding: ${({ theme }) => theme.spacing.padding.m};
    h2 {
      color: black;
    }
    p {
      color: ${({ theme }) => theme.colors.grey};
    }
  }
`;

const BasicChartComponent = ({
  title,
  subTitle,
  unit,
  data,
  lineColor,
  shadowColor,
  navigateTo,
}) => {
  const [total, setTotal] = useState(0);

  const series = [
    {
      name: unit,
      data: data ? data : [],
    },
  ];
  const options = {
    chart: {
      toolbar: { show: false },
      zoom: {
        enabled: false,
      },
    },
    colors: [lineColor],
    fill: {
      colors: [shadowColor],
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Now",
        "Dec",
      ],
    },
    yaxis: {
      show: false,
    },
  };

  useEffect(() => {
    let total = 0;
    if (data) {
      data.map((item) => (total += item));
    }
    setTotal(total);
  }, [data]);

  return (
    <>
      <ChartWrapper>
        <div className="description">
          <div>
            <h2>{title}</h2>
            <p>{subTitle}</p>
          </div>
          <h2>{total}</h2>
        </div>
        <div className="loading">{!data && <CircularProgress />}</div>

        <Chart
          options={options}
          type="area"
          width="100%"
          height="100px"
          series={series}
        />
      </ChartWrapper>
      <GetBack naviageTo={navigateTo} backPage={unit} toArrow={true} />
    </>
  );
};

BasicChartComponent.porpTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  unit: PropTypes.string,
  data: PropTypes.array,
  lineColor: PropTypes.string,
  shadowColor: PropTypes.string,
};

export default BasicChartComponent;
