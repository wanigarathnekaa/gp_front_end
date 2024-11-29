"use client";

import { useState, useEffect } from "react";
import BarChart from "@/components/BarChart";
import { getFormWithSubmissions } from "@/actions/form";
import PieChartCommon from "../PieChartCommon";

interface FormAnalysisProps {
  formId: string;
}

const FormAnalysis: React.FC<FormAnalysisProps> = ({ formId }) => {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [analysisData, setAnalysisData] = useState({
    totalSubmissions: 0,
    averageNumericResponse: 0,
    questionFrequency: {},
  });

  useEffect(() => {
    if (!formId) return;

    const fetchSubmissions = async () => {
      setLoading(true);
      try {
        const fetchedSubmissions = await getFormWithSubmissions(formId);
        const parsedSubmissions = fetchedSubmissions.map((submission: any) => ({
          ...submission,
          content: JSON.parse(submission.content),
        }));
        setSubmissions(parsedSubmissions);
        performAnalysis(parsedSubmissions);
      } catch (error) {
        console.error("Error fetching submissions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, [formId]);

  const performAnalysis = (submissions: any[]) => {
    const totalSubmissions = submissions.length;

    // Example: Calculate averages for a specific field (e.g., "1065")
    const numericResponses = submissions
      .map((submission) => parseInt(submission.content["1065"], 10))
      .filter((value) => !isNaN(value));

    const averageNumericResponse =
      numericResponses.reduce((sum, value) => sum + value, 0) /
      (numericResponses.length || 1);

    // Example: Count frequencies of responses for "9018" (categorical question)
    const questionFrequency: Record<string, number> = {};
    submissions.forEach((submission) => {
      const answer = submission.content["9018"];
      if (answer) {
        questionFrequency[answer] = (questionFrequency[answer] || 0) + 1;
      }
    });

    setAnalysisData({
      totalSubmissions,
      averageNumericResponse,
      questionFrequency,
    });
  };

  const { totalSubmissions, averageNumericResponse, questionFrequency } =
    analysisData;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Form Analysis</h1>

      {loading ? (
        <p>Loading submissions...</p>
      ) : submissions.length > 0 ? (
        <div className="grid grid-cols-2 gap-6">
          {/* Total Submissions */}
          <div className="bg-white shadow p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Total Submissions</h2>
            <p className="text-2xl font-bold">{totalSubmissions}</p>
          </div>

          {/* Average Numeric Response */}
          <div className="bg-white shadow p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Average Numeric Response</h2>
            <p className="text-2xl font-bold">{averageNumericResponse.toFixed(2)}</p>
          </div>

          {/* Pie Chart */}
          <div className="bg-white shadow p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Question Frequency</h2>
            <PieChartCommon
              data={Object.entries(questionFrequency).map(([label, value]) => ({
                label,
                value: Number(value), // Ensure value is a number as required by Chart.js
              }))}
            />
          </div>

          {/* Bar Chart */}
          <div className="bg-white shadow p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Response Distribution</h2>
            <BarChart
              labels={Object.keys(questionFrequency)}
              data={Object.values(questionFrequency)}
            />
          </div>
        </div>
      ) : (
        <p>No submissions found for this form.</p>
      )}
    </div>
  );
};

export default FormAnalysis;
