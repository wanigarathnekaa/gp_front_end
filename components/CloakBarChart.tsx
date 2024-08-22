"use client"
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CloakBarChart = () => {

    const data = {
        labels: ["Small", "Medium", "Large"],
        datasets: [
          {
            label: "Total",
            data: [100, 200, 300],
            backgroundColor: "rgba(109, 253, 181, 0.5)",
            borderColor: "rgb(109, 253, 181)",
            borderWidth: 2,
          },
          {
            label: "Issued",
            data: [60, 120, 250],
            backgroundColor: "rgba(75, 192, 192, 0.5)",
            borderColor: "rgb(75, 192, 192)",
            borderWidth: 2,
          },
          {
            label: "Remaining",
            data: [40, 80, 50],
            backgroundColor: "rgba(255, 205, 86, 0.5)",
            borderColor: "rgb(255, 205, 86)",
            borderWidth: 2,
          },
          {
            label: "Returned",
            data: [40, 50, 150],
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 2,
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top" as const,
          },
          title: {
            display: true,
            text: "Cloak Distribution",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
    };

    return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-xl shadow-lg">
      <Bar data={data} options={options} />
    </div>
    )
}

export default CloakBarChart