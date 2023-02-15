import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { API_URL } from '../constants/http';
import { IAuthResponse } from "../types/IAuthResponse";

const serverApi = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

serverApi.interceptors.request.use((config) => {
  if (!config.headers) return config;
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

serverApi.interceptors.response.use((config: AxiosResponse) => {
  return config;
}, async (error) => {
  const originalRequest = error.config;
  if (error.response.status == 401 && error.config && !error.config._isRetry) {
    originalRequest._isRetry = true;
    try {
      const response = await axios.get<IAuthResponse>(`${API_URL}refresh`, {withCredentials: true});
      localStorage.setItem('token', response.data.accessToken);
      return serverApi.request(originalRequest);
      
    } catch (error) {
      console.log('NOT AUTH')
    }
  }
  throw error;
})

export default serverApi;
