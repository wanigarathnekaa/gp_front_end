import axios from 'axios';
import { formSchema, formSchematype } from "@/schemas/form";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

class UserNotFoundErr extends Error {
  constructor() {
    super("User not found");
    this.name = "UserNotFoundError";
  }
}

export const getFormStats = async (userId: string) => {
  try {
    const response = await axios.get(`${API_URL}/forms/stats`, { params: { userId } });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch form stats");
  }
};

export const createForm = async (data: formSchematype) => {
  const validation = formSchema.safeParse(data);
  if (!validation.success) {
    throw new Error("Validation Error");
  }

  try {
    const response = await axios.post(`${API_URL}/forms`, data);
    return response.data.id;
  } catch (error) {
    throw new Error("Form creation failed");
  }
};

export const getForms = async (userId: string) => {
  try {
    const response = await axios.get(`${API_URL}/forms`, { params: { userId } });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch forms");
  }
};

export const getFormById = async (id: string, userId: string) => {
  try {
    const response = await axios.get(`${API_URL}/forms/${id}`, { params: { userId } });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch form by ID");
  }
};

export const updateFormContent = async (id: string, jsonContent: string) => {
  try {
    const response = await axios.put(`${API_URL}/forms/${id}/content`, { jsonContent });
    return response.data;
  } catch (error) {
    throw new Error("Failed to update form content");
  }
};

export const publishForm = async (id: string) => {
  try {
    const response = await axios.put(`${API_URL}/forms/${id}/publish`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to publish form");
  }
};

export const getFormContentByUrl = async (formUrl: string) => {
  try {
    const response = await axios.get(`${API_URL}/forms/content`, { params: { formUrl } });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch form content by URL");
  }
};

export const submitForm = async (formUrl: string, content: string) => {
  try {
    const response = await axios.post(`${API_URL}/forms/submit`, { formUrl, content });
    return response.data;
  } catch (error) {
    throw new Error("Failed to submit form");
  }
};

export const getFormWithSubmissions = async (id: string, userId: string) => {
  try {
    const response = await axios.get(`${API_URL}/forms/${id}/submissions`, { params: { userId } });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch form with submissions");
  }
};