import axios from 'axios';
import { BACKEND_BASE_URL } from 'src/config/api';

export const instance = axios.create({
  baseURL: BACKEND_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});
