"use client";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getAllStudents } from "@/actions/graduateStudents";
import { getCloakCount } from "@/actions/Cloak";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CloakBarChart = () => {
  const [chartData, setChartData] = useState({
    labels: ["Small", "Medium", "Large"],
    datasets: [
      {
        label: "Total",
        data: [0, 0, 0],
        backgroundColor: "rgba(112, 110, 228, 0.5)",
        borderColor: "rgba(112, 110, 228, 1)",
        borderWidth: 2,
      },
      {
        label: "Issued",
        data: [0, 0, 0],
        backgroundColor: "rgba(56, 189, 248, 0.5)",
        borderColor: "rgba(56, 189, 248, 1)",
        borderWidth: 2,
      },
      {
        label: "Remaining",
        data: [0, 0, 0],
        backgroundColor: "rgba(129, 140, 248, 0.8)",
        borderColor: "rgba(129, 140, 248, 1)",
        borderWidth: 2,
      },
      {
        label: "Returned",
        data: [0, 0, 0],
        backgroundColor: "rgba(49, 46, 129, 0.5)",
        borderColor: "rgba(49, 46, 129, 1)",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch cloak counts
        const cloakCounts = await getCloakCount();
        const totalSmall = cloakCounts.smallCount || 0;
        const totalMedium = cloakCounts.mediumCount || 0;
        const totalLarge = cloakCounts.largeCount || 0;

        // Fetch student cloak details
        const studentData = await getAllStudents();
        const issuedSmall = studentData.filter(
          (user: any) => user.size === "Small" && user.status === "Issued"
        ).length;
        const issuedMedium = studentData.filter(
          (user: any) => user.size === "Medium" && user.status === "Issued"
        ).length;
        const issuedLarge = studentData.filter(
          (user: any) => user.size === "Large" && user.status === "Issued"
        ).length;

        const returnedSmall = studentData.filter(
          (user: any) => user.size === "Small" && user.status === "Returned"
        ).length;
        const returnedMedium = studentData.filter(
          (user: any) => user.size === "Medium" && user.status === "Returned"
        ).length;
        const returnedLarge = studentData.filter(
          (user: any) => user.size === "Large" && user.status === "Returned"
        ).length;

        console.log("Issued:", issuedSmall, issuedMedium, issuedLarge);

        // Calculate remaining counts
        const remainingSmall = totalSmall - issuedSmall + returnedSmall;
        const remainingMedium = totalMedium - issuedMedium + returnedMedium;
        const remainingLarge = totalLarge - issuedLarge + returnedLarge;

        // Update chart data
        setChartData({
          labels: ["Small", "Medium", "Large"],
          datasets: [
            {
              label: "Total",
              data: [totalSmall, totalMedium, totalLarge],
              backgroundColor: "rgba(112, 110, 228, 0.5)",
              borderColor: "rgba(112, 110, 228, 1)",
              borderWidth: 2,
            },
            {
              label: "Issued",
              data: [issuedSmall, issuedMedium, issuedLarge],
              backgroundColor: "rgba(56, 189, 248, 0.5)",
              borderColor: "rgba(56, 189, 248, 1)",
              borderWidth: 2,
            },
            {
              label: "Remaining",
              data: [remainingSmall, remainingMedium, remainingLarge],
              backgroundColor: "rgba(129, 140, 248, 0.8)",
              borderColor: "rgba(129, 140, 248, 1)",
              borderWidth: 2,
            },
            {
              label: "Returned",
              data: [returnedSmall, returnedMedium, returnedLarge],
              backgroundColor: "rgba(49, 46, 129, 0.5)",
              borderColor: "rgba(49, 46, 129, 1)",
              borderWidth: 2,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching cloak data:", error);
      }
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Cloak Distribution",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-full max-w-4xl">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default CloakBarChart;
