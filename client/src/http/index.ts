import axios from 'axios';


export const http = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const authHttp = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});


authHttp.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  }

  return config;
});
