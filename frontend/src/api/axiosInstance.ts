import axios from "axios";
import { BASE_URL } from "const/values";

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

//TODO: interceptors
