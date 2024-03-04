import axios from "axios";

export const authInstance = axios.create({
  baseURL: "/api",
  timeout: 3000,
});

export const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 3000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.status === 401) {

//     }
//   }
// );

// request -> 401 -> refresh -> access -> replace -> retry request
// request -> 401 -> refresh -> error -> redirect login
