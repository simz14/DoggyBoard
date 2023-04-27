import Chart from "react-apexcharts";
import styled from "styled-components";

const ChartWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border-radius: ${({ theme }) => theme.border.radius.m};

  .description {
    padding: ${({ theme }) => theme.spacing.padding.m};
    h2 {
      color: white;
    }
    p {
      color: ${({ theme }) => theme.colors.grey};
    }
  }
`;

const ChartComponent = ({ lineColor, shadowColor }) => {
  const series = [
    {
      name: "Adoptions",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
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
      ],
    },
    yaxis: {
      show: false,
    },
  };
  return (
    <ChartWrapper>
      <div className="description">
        <h2>Adoptions Overview </h2>
        <p>Number of adoptions</p>
      </div>
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
