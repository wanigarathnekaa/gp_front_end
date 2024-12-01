import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
console.log("API URL:", API_URL);

interface Role{
    roleName: string;
    roleDescription: string;
    selectedPrivileges: string[];
}

export const addRole = async(role: Role) => {
    try{
        const response = await axios.post(`${API_URL}/api/v1/userRole/addRole`, role);
        return response.data;
    }catch(error){
        throw new Error("Failed to add role");
    }
};