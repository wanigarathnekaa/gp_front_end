import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
console.log("API URL:", API_URL);

interface CloakCounts{
    name: string;
    smallCount: number;
    mediumCount: number;
    largeCount: number;
}

export const getCloakCount = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/cloaks/current`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch cloak counts");
    }
  };

export const addOrUpdateCloak = async(cloakCounts: CloakCounts) => {
    try{
        const response = await axios.post(`${API_URL}/api/cloaks/save`, cloakCounts);
        return response.data;
    }catch(error){
        throw new Error("Failed to add cloak counts");
    }
};

export const removeCloak = async() => {
    try{
        const response = await axios.delete(`${API_URL}/api/cloaks/remove`);
        return response.data;
    }catch(error){
        throw new Error("Failed to remove cloak counts");
    }
};