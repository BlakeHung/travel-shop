import axios from 'axios';
import { useAuthStore } from '../stores/useAuthStore';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// 請求攔截器
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 響應攔截器
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
    }
    return Promise.reject(error);
  }
);

export default api; 