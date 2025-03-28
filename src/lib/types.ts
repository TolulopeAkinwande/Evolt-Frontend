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

export interface Products {
  name: string;
  id: number;
  createdAt: string;
  updatedAt: string;
  price: number;
  quantity: number;
  weight: number;
  code: string;
  image: string;
}
export interface ProductsByid {
  name: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
  price: number;
  quantity: number;
  weight: number;
  code: string;
  image: string;
}
interface CartItem extends Products {
  cartQuantity: number;
}
interface Order {
  id: string;
  date: string; // You might convert this to a Date if needed
  total: number;
  items: { name: string; quantity: number }[];
}
