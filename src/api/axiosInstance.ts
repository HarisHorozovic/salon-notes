import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from '@env';

const axiosInstance = axios.create({
  baseURL: API_URL,
});
axiosInstance.defaults.baseURL = API_URL;
axiosInstance.interceptors.request.use(
  async (config: any) => {
    const token = await AsyncStorage.getItem('authToken');

    if (token) {
      config.headers['Content-Type'] = 'application/json';
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
