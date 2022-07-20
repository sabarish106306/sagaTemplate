import axios from "axios";
import { requestHandler, successHandler, errorHandler } from "../interceptors";

const BASE_URL = "http://localhost:5000/"
//add your BASE_URL to Constants file
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

// Handle request process
axiosInstance.interceptors.request.use(request => requestHandler(request));
// Handle response process
axiosInstance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
);
