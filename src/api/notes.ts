import axiosInstance from './axiosInstance';

export const getAllNotes = async (page: number, search?: string) => {
  let query = `?page=${page}`;
  if (search) {
    query += `&search=${search}`;
  }
  const response = await axiosInstance.get(`/notes${query}`);

  return response.data.items;
};

export const createNote = async (data: {[k: string]: any}) => {
  const response = await axiosInstance.post(`/notes`, data);

  return response.data;
};
