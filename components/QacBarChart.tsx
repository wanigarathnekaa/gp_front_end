"use client";

import { Bar } from 'react-chartjs-2';
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

const QacBarChart = () => {
    const data = {
        labels: ["Ongoing Peer Reviews", "Open Forms", "Schedule Forms"],
        datasets: [
            {
                label: "Reviews and Forms",
                data: [100, 60, 40],
                backgroundColor: [
                    "rgba(112, 110, 228, 0.5)", // Color for Ongoing Peer Reviews
                    "rgba(56, 189, 248, 0.5)",  // Color for Open Forms
                    "rgba(129, 140, 248, 0.8)", // Color for Schedule Forms
                ],
                borderColor: [
                    "rgba(112, 110, 228, 1)", // Border color for Ongoing Peer Reviews
                    "rgba(56, 189, 248, 1)",  // Border color for Open Forms
                    "rgba(129, 140, 248, 1)", // Border color for Schedule Forms
                ],
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Hide legend since each bar has a unique label
            },
            title: {
                display: false,
                text: "Qac Distribution",
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
                    display: true,
                },
            },
        },
    };

    return (
        <div className="w-full max-w-4xl">
            <Bar data={data} options={options} />
        </div>
    );
};

export default QacBarChart;
