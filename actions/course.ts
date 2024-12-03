import axios from 'axios';

// Define the API URL from environment variables
const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface CourseRequest {
    regNumber: string;
    year: string;
    semester: string;
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


export const getFilledCourses = async (courseRequest: CourseRequest) => {
    try {
      const response = await axios.post(`${API_URL}/course/FilledCourse`, courseRequest);
      return response.data;
    } catch (error) {
      // Throw a descriptive error if the request fails
      throw new Error('Failed to fetch courses: ' + (error as Error).message);
    }
  };

  export const getNotFilledCourses = async (courseRequest: CourseRequest) => {
    try {
      const response = await axios.post(`${API_URL}/course/notFilledCourse`, courseRequest);
      return response.data;
    } catch (error) {
      // Throw a descriptive error if the request fails
      throw new Error('Failed to fetch courses: ' + (error as Error).message);
    }
  };

  export const getStudentCourses = async (courseRequest: CourseRequest) => {
    try {
      const response = await axios.post(`${API_URL}/course/studentCourse`, courseRequest);
      return response.data;
    } catch (error) {
      // Throw a descriptive error if the request fails
      throw new Error('Failed to fetch courses: ' + (error as Error).message);
    }
  };

  export const getUserCourses = async (courseRequest: CourseRequest) => {
    try {
      const response = await axios.post(`${API_URL}/course/userCourses`, courseRequest);
      return response.data;
    } catch (error) {
      // Throw a descriptive error if the request fails
      throw new Error('Failed to fetch courses: ' + (error as Error).message);
    }
  };

  
