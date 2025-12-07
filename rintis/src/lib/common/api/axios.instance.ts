import axios from 'axios';
import { API_BASE_URL } from '@/core/config/api.config';
import { getAuthToken } from '@/lib/auth';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  const token =
    typeof globalThis.window === 'undefined' ? null : await getAuthToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
