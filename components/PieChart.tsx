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
        backgroundColor: ["#E3BD1C", "#1C42E3"], // Colors for each slice
        hoverBackgroundColor: ["#E9CC4D", "#4D6BE9"], // Colors when hovered
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
