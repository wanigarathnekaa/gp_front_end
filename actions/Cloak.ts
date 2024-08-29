import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
console.log("API URL:", API_URL);

interface CloakCounts{
    smallCount: number;
    mediumCount: number;
    largeCount: number;
}

export const addCloak = async(cloakCounts: CloakCounts) => {
    try{
        const response = await axios.post(`${API_URL}/api/cloaks/addCloak`, cloakCounts);
        return response.data;
    }catch(error){
        throw new Error("Failed to add cloak counts");
    }
};