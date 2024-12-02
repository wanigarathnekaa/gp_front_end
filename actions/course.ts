import axios from 'axios';

// Define the API URL from environment variables
const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface courseRequest {
    regNumber: string;
    nic: string;
  }


export const AllCourses = async () => {
    try {
        // Make a GET request to fetch all courses
        const response = await axios.get(`${API_URL}/course/allCourses`);
        // Return the response data
        return response.data;
    } catch (error) {
        // Throw a descriptive error if the request fails
        throw new Error('Failed to fetch courses: ' + (error as Error).message);
    }
  
};

export const getFilledCourses = async () => {
    try {
        // Make a GET request to fetch all courses
        const response = await axios.get(`${API_URL}/course/allCourses`);
        // Return the response data
        return response.data;
    } catch (error) {
        // Throw a descriptive error if the request fails
        throw new Error('Failed to fetch courses: ' + (error as Error).message);
    }
  
};
