"use client";
import { getFormStats, getFormStatsForLineChart } from "@/actions/form";
import { useEffect, useState } from "react";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";

export default function Home() {
  const [lineChartData, setLineChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState({
    submissionRate: 0,
    bounceRate: 0,
  });
  const [lineChartLoading, setLineChartLoading] = useState(true);
  const [pieChartLoading, setPieChartLoading] = useState(true);

  useEffect(() => {
    // Fetch data for the Line chart
    async function fetchLineChartData() {
      try {
        const data = await getFormStatsForLineChart();
        setLineChartData(data);
      } catch (error) {
        console.error("Error fetching line chart data:", error);
      } finally {
        setLineChartLoading(false);
      }
    }

    // Fetch data for the Pie chart
    async function fetchPieChartData() {
      try {
        const data = await getFormStats();
        setPieChartData({
          submissionRate: data.submissionRate || 0,
          bounceRate: data.bounceRate || 0,
        });
      } catch (error) {
        console.error("Error fetching pie chart data:", error);
      } finally {
        setPieChartLoading(false);
      }
    }

    fetchLineChartData();
    fetchPieChartData();
  }, []);

  return (
    <div className="ml-64 px-8 max-h-screen overflow-auto py-10">
      <div className="my-20"></div>

      {/* Charts Section */}
      <div className="flex items-center justify-between space-x-4">
        {/* Line Chart */}
        <div className="flex-1">
          {lineChartLoading ? (
            <p>Loading line chart...</p>
          ) : (
            <LineChart data={lineChartData} />
          )}
        </div>

        {/* Pie Chart */}
        <div className="flex-1">
          {pieChartLoading ? (
            <p>Loading pie chart...</p>
          ) : (
            <PieChart
              submissionRate={pieChartData.submissionRate}
              bounceRate={pieChartData.bounceRate}
            />
          )}
        </div>
      </div>
    </div>
  );
}
