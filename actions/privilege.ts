import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
console.log("API URL:", API_URL);

export const getPrivileges = async (roleName: string) => {
    try {
        const response = await axios.get(`${API_URL}/api/v1/userRole/getprivileges/${roleName}`);
        return response.data;
    } catch (error: any) {
        console.error("Error fetching privileges:", error.response?.data || error.message);
        throw new Error("Failed to get privileges");
    }
}