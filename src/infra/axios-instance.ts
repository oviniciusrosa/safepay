import axios from "axios";

export const BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL;

export const axiosInstance = axios.create({ baseURL: BASE_URL });
