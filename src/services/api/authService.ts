import apiClient from './apiClient';

export interface User {
  _id?: string;
  email: string;
  name: string;
  role?: string;
  walletAddress?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export const register = async (userData: {
  name: string;
  email: string;
  password: string;
  walletAddress?: string;
}): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>('/auth/register', userData);
  return response;
};

export const login = async (credentials: {
  email: string;
  password: string;
}): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>('/auth/login', credentials);
  return response;
};

export const getCurrentUser = async (): Promise<User> => {
  const response = await apiClient.get<User>('/auth/me');
  return response;
};

export const logout = (): void => {
  // Remove token from local storage
  localStorage.removeItem('token');
  // Clear axios authorization header
  delete apiClient.defaults.headers.common['Authorization'];
};

// Set the auth token for future requests
export const setAuthToken = (token: string): void => {
  if (token) {
    localStorage.setItem('token', token);
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common['Authorization'];
  }
};

// Initialize auth token if it exists in local storage
const token = localStorage.getItem('token');
if (token) {
  setAuthToken(token);
}
