import axios from 'axios';
import { formSchema, formSchematype, templateFormSchema, templateFormSchemaType } from "@/schemas/form";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

class UserNotFoundErr extends Error {
  constructor() {
    super("User not found");
    this.name = "UserNotFoundError";
  }
}

export const getFormStats = async () => {
  try {
    const response = await axios.get(`${API_URL}/forms/stats`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch form stats");
  }
};

export const getFormStatsForLineChart = async () => {
  try {
    const response = await axios.get(`${API_URL}/forms/stats/LineChart`);
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
    const response = await axios.post(`${API_URL}/forms/create`, data);
    return response.data.id;
  } catch (error) {
    throw new Error("Form creation failed");
  }
};

export const createFormTemplate = async (data: templateFormSchemaType) => {
  const validation = templateFormSchema.safeParse(data);
  if (!validation.success) {
    throw new Error(validation.error.message);
  }

  try {
    const response = await axios.post(`${API_URL}/forms/createFormTemplate`, data);
    return response.data.id;
  } catch (error) {
    throw new Error("Form creation failed");
  }
};

export const getForms = async () => {
  try {
    const response = await axios.get(`${API_URL}/forms/all`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch forms");
  }
};

export const getTemplates = async () => {
  try {
    const response = await axios.get(`${API_URL}/forms/templates`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch forms");
  }
};

export const getFormById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/forms/${id}`);
    console.log(response.data);
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
    const response = await axios.get(`${API_URL}/forms/view/${formUrl}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch form content by URL");
  }
};

export const submitForm = async (formUrl: string, content: string, regNumber: string) => {
  try {
    const response = await axios.post(`${API_URL}/forms/submit`, { formURL: formUrl, content, regNumber });
    return response.data;
  } catch (error) {
    throw new Error("Failed to submit form");
  }
};

export const getFormWithSubmissions = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/forms/${id}/submissions`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch form with submissions");
  }
};

export const getFormContent = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/forms/${id}/template_content`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch form content");
  }
}
