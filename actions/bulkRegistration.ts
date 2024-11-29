import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const sendFile = async (file: File) => {
  console.log("FILE: " + file);
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(`${API_URL}/registration/import/students`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
    return response.data;
  } catch (error: any) {
    console.error("Error uploading file:", error);
    alert(`Failed to import data: ${error.response?.data || error.message}`);
    throw error;
  }
};

export const sendFileWithContent = async (file: File, content: string) => {
  console.log("FILE: " + file);
  const formData = new FormData();
  formData.append("file", file);
  formData.append("content", content);

  try {
    const response = await axios.post(`${API_URL}/forms/bulkForms`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
    return response.data;
  } catch (error: any) {
    console.error("Error uploading file:", error);
    alert(`Failed to import data: ${error.response?.data || error.message}`);
    throw error;
  }
};