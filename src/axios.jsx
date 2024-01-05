import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://reactnd-books-api.udacity.com",
  headers: {
    Authorization: "whatever-you-want",
  },
});

