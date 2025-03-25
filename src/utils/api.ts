import { RequestParams } from '../lib/types';
import axios, { AxiosError } from 'axios';

class ApiService {
  baseUrl = import.meta.env.VITE_API_BASE_URL;
  api = axios.create();

  public async makeRequest<T>({ url, method, data }: RequestParams) {
    try {
      const token = localStorage.getItem('token');
      const response = await this.api.request({
        data,
        url: this.baseUrl + url,
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data as T;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message || 'An error occurred');
      } else if (error instanceof Error) {
        throw new Error('An error occurred');
      }
    }
  }
}

const api = new ApiService();
export default api;