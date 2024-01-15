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
  let response: any = {};

  if (data._id) {
    response = await axiosInstance.patch(`/notes/${data._id}`, data);
  } else {
    response = await axiosInstance.post(`/notes`, data);
  }

  return response.data;
};

export const deleteNote = async (id: string) => {
  try {
    await axiosInstance.delete(`/notes/${id}`);

    return true;
  } catch (error) {
    return false;
  }
};
