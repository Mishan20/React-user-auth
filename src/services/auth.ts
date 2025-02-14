import { LoginCredentials, RegisterCredentials, AuthResponse } from '../types/auth';
import api from './api';

export const authService = {
  async login(credentials: LoginCredentials) {
    const response = await api.post<AuthResponse>('/user/login', credentials);
    return response.data;
  },

  async register(credentials: RegisterCredentials) {
    const response = await api.post<AuthResponse>('/user/register', credentials);
    return response.data;
  },

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
};