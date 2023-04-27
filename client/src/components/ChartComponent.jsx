import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

const ChartWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue};
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
      color: white;
    }
    p {
      color: ${({ theme }) => theme.colors.grey};
    }
  }
`;

const ChartComponent = ({
  title,
  subTitle,
  unit,
  data,
  lineColor,
  shadowColor,
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
      position: "back",
      borderColor: "#28364e",
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      floating: true,
      labels: {
        show: true,
        hideOverlappingLabels: true,
        maxHeight: 120,
        style: {
          colors: "white",
          fontSize: "12px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 400,
        },
        offsetY: -20,
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
      show: true,
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
        height="250px"
        series={series}
      />
    </ChartWrapper>
  );
};

export default ChartComponent;
