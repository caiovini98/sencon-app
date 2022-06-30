import axios, { AxiosInstance } from "axios";

const API: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers":
      "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json,multipart/form-data",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
    "Access-Control-Allow-Origin": "*",
  },
});

export default API;
