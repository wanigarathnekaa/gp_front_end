"use client";
import {
  getForms,
  getFormStats,
  getFormStatsForLineChart,
} from "@/actions/form";
import { useEffect, useState } from "react";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";
import Dropdown from "@/components/Dropdown";
import FormAnalysis from "@/components/formComponents/FormAnalysis";
import { Title } from "@/components/index";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Home() {
  const [forms, setForms] = useState<{ id: string; name: string }[]>([]);
  const [lineChartData, setLineChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState({
    submissionRate: 0,
    bounceRate: 0,
  });
  const [lineChartLoading, setLineChartLoading] = useState(true);
  const [pieChartLoading, setPieChartLoading] = useState(true);
  const [loading, setLoading] = useState(true);

  const [selectedForm, setSelectedForm] = useState<{
    id: string;
    name: string;
  } | null>(null);

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

    async function fetchForms() {
      try {
        const fetchedForms = await getForms();
        const formNames = fetchedForms.map(
          (form: { id: string; name: string }) => ({
            id: form.id,
            name: form.name,
          })
        );
        setForms(formNames);
      } catch (error) {
        console.error("Error fetching forms:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchForms();
    fetchLineChartData();
    fetchPieChartData();
  }, []);

  const handleSelect = (selectedName: string) => {
    const selected = forms.find((form) => form.name === selectedName);
    if (selected) {
      console.log("Selected Form ID:", selected.id);
      console.log("Selected Form Name:", selected.name);
      setSelectedForm(selected);
    }
  };

  return (
    <div className="ml-64 px-8 max-h-screen overflow-auto py-10">
      <Title text="Analysis"/>
      <Breadcrumbs/>
      
      {/* Dropdown and Analysis */}
      <div className="p-4">
        {loading ? (
          <p>Loading forms...</p>
        ) : (
          <Dropdown
            options={forms.map((form) => form.name)} // Pass only names to the Dropdown
            onSelect={handleSelect}
            title="Select a Form"
          />
        )}
        {selectedForm && (
          <>
            <p className="mt-4">
              You selected: {selectedForm.name} (ID: {selectedForm.id})
            </p>
            {/* Render Form Analysis */}
            <FormAnalysis formId={selectedForm.id} />
          </>
        )}
      </div>

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
