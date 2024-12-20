import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const sendCourseFile = async (file: File) => {
    console.log("FILE: " + file);
    const formData = new FormData();
    formData.append("file", file);
    
    try {
        const response = await axios.post(`${API_URL}/course/import`, formData, {
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
}