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
            backgroundColor: "rgba(112, 110, 228, 0.5)", // #706ee4 with opacity
            borderColor: "rgba(112, 110, 228, 1)", 
            borderWidth: 2,
          },
          {
            label: "Issued",
            data: [60, 120, 250],
            backgroundColor: "rgba(56, 189, 248, 0.5)", // Light teal blue with opacity
            borderColor: "rgba(56, 189, 248, 1)",
            borderWidth: 2,
          },
          {
            label: "Remaining",
            data: [40, 80, 50],
            backgroundColor: "rgba(129, 140, 248, 0.8)", // New shade of blue with opacity
            borderColor: "rgba(129, 140, 248, 1)", 
            borderWidth: 2,
          },
          {
            label: "Returned",
            data: [40, 50, 150],
            backgroundColor: "rgba(49, 46, 129, 0.5)", // #312e81 with opacity
            borderColor: "rgba(49, 46, 129, 1)", 
            borderWidth: 2,
          }
        ],
      };
    
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
        elements: {
          bar: {
              borderWidth: 1,
          },
        },
        
      };

    return (
        <div className='w-full max-w-4xl'>
            <Bar data={data} options={options} />
        </div>
    )
}

export default CloakBarChart