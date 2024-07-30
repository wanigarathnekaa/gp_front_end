import axios from 'axios';

// Define the API URL from environment variables
const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface LoginRequest {
  regNumber: string;
  nic: string;
}

export const login = async (loginRequest: LoginRequest) => {
  try {
    // Make a POST request with registration number and NIC in the request body
    const response = await axios.post(`${API_URL}/api/v1/auth/login`, loginRequest);
    // Return the response data
    return response.data;
  } catch (error) {
    // Throw a descriptive error if the request fails
    throw new Error("Failed to login: " + (error as Error).message);
  }
};
