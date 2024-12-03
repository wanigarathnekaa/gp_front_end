import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
console.log("API URL:", API_URL);

export const getAllStudents = async() =>{
    try{
        const response = await axios.get(`${API_URL}/students/all`);
        return response.data;
    }catch(error){
        throw new Error("Failed to fetch student details");
    }
};