"use client";

import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  ChartOptions,
} from "chart.js";
import { Pie } from "react-chartjs-2";

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

type PieChartProps = {
  submissionRate: number;
  bounceRate: number;    
};

const PieChart = ({ submissionRate, bounceRate }: PieChartProps) => {
  const chartData = {
    labels: ["Submission Rate", "Bounce Rate"],
    datasets: [
      {
        data: [submissionRate, bounceRate],
        backgroundColor: ["#4CAF50", "#FF5722"], // Colors for each slice
        hoverBackgroundColor: ["#45A049", "#FF3D00"], // Colors when hovered
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Submission Rate vs Bounce Rate",
      },
    },
  };

  return <Pie data={chartData} options={options} />;
};

export default PieChart;
