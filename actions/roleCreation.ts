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

export const getRoles = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/v1/userRole/getAllRoles`);
        console.log("Fetched Roles:", response.data);
        return response.data;
    } catch (error: any) {
        console.error("Error fetching roles:", error.response?.data || error.message);
        throw new Error("Failed to get roles");
    }
};

export const addPrivilegedUser = async (user: any) => {
    try {
        const response = await axios.post(`${API_URL}/api/v1/privilegedUsers/add`, user);
        return response.data;
    } catch (error: any) {
        console.error("Error adding privileged user:", error.response?.data || error.message);
        throw new Error("Failed to add privileged user");
    }
}
