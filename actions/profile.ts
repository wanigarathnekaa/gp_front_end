import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface ProfileRequest {
    regNumber: string;
    indexNumber: string;
    nic: string;
    name: string;
    email: string;
}

export const getProfile = async (profileRequest: ProfileRequest) => {
    try {
        const response = await axios.post(`${API_URL}/api/v1/student/{id}`, profileRequest);
        return response.data;
    } catch (error) {
        throw new Error("Failed to get profile: " + (error as Error).message);
    }
};

