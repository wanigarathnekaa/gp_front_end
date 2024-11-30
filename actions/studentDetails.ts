import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
console.log("API URL:", API_URL);

interface StudentProfile {
    id: string;
    regNumber: string;
    name: string;
    indexNumber: string;
    email: string;
    nic: string;
    password: string | null;
    role: string | null;
    semester: number;
    year: number;
    enabled: boolean;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;
    accountNonExpired: boolean;
    username: string;
    authorities: any[];
  }
  
  export const getStudentDetails = async (id: string): Promise<StudentProfile> => {
    try {
      console.log("Fetching student details from:", `${API_URL}/api/v1/student/${id}`);
      const response = await axios.get(`${API_URL}/api/v1/student/${id}`);
      console.log("Student Details Fetched:", response.data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("API Error:", error.response?.data || error.message);
      } else {
        console.error("Unexpected Error:", error);
      }
      throw new Error("Failed to fetch student details.");
    }
  };
  
