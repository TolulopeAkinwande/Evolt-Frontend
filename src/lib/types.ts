import { Method } from 'axios';

export interface RequestParams {
  url: string;
  method: Method;
  data?: any;
  headers?: any;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface SignupResponse {
  error: boolean;
  message: string;
  user: {
    id: string;
    email: string;
    username: string;
    // Add other relevant user fields as needed
  };
}
export interface Medication {
  id: number;
  name: string;
  price: number;
  image?: string;
}