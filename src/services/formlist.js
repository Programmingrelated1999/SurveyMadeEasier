import axios from "axios";

const baseUrl = "http://localhost:3001/api/forms/";

export const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const postForm = async (content) => {
  const response = await axios.post(baseUrl, content);
  return response.data;
};
