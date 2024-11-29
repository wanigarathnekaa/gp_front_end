"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  labels: string[]; // Labels for the X-axis
  data: number[]; // Data values for the Y-axis
}

const BarChart: React.FC<BarChartProps> = ({ labels, data }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Frequency",
        data,
        backgroundColor: "rgba(54, 162, 235, 0.7)", // Bar color
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions: ChartOptions<"bar"> =  {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend (optional)
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide X-axis grid lines (optional)
        },
        title: {
          display: true,
          text: "Categories", // Label for X-axis
          font: { weight: "bold" },
        },
      },
      y: {
        ticks: {
          stepSize: 1, // Ensures steps are integers
        },
        title: {
          display: true,
          text: "Frequency", // Label for Y-axis
          font: { weight: "bold" },
        },
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};

export default BarChart;
