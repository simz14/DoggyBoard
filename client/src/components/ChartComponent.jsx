import Chart from "react-apexcharts";

const ChartComponent = ({ lineColor, shadowColor }) => {
  const series = [
    {
      name: "Adoptions",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ];
  const options = {
    chart: {
      height: 350,
      width: "100%",
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
      row: {
        colors: ["#1e293b"],
        opacity: 1,
      },
    },
    xaxis: {
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
  return <Chart options={options} type="area" series={series} />;
};

export default ChartComponent;
