import axiosInstance from "./axiosInstance";

export const getAllNotes = async (page: number) => {
  const response = await axiosInstance.get(`/notes`);

  return response.data.items;
};

export const createNote = async (data: { [k: string]: any }) => {
  const response = await axiosInstance.post(`/notes`, data);

  return response.data.items;
};
