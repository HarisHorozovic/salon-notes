import axiosInstance from './axiosInstance';

export const login = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post('/auth/login', {
      email,
      password,
    });
    return response.data.token;
  } catch (err) {
    return null;
  }
};

export const signup = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post('/auth/signup', {
      email,
      password,
    });

    return response.data.token;
  } catch (err) {
    throw err;
  }
};
