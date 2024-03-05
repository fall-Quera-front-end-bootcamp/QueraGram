import axios from "axios";
import api from "./api";
import { RefreshTokenResponse } from "../types/types";

export const authInstance = axios.create({
  baseURL: "/api",
  timeout: 3000,
});

export const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 3000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    const newConfig = { ...config };
    newConfig.headers.Authorization = `Bearer ${accessToken}`;
    return newConfig;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;

    if (error.response.status === 401) {
      try {
        const refreshResponse = await api.requestRefreshToken({
          refresh: localStorage.getItem("refreshToken")!,
        });

        const refreshResponseData = refreshResponse.data as RefreshTokenResponse;

        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.setItem("accessToken", refreshResponseData.access);
        localStorage.setItem("refreshToken", refreshResponseData.refresh);

        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${refreshResponseData.access}`,
        };

        return axiosInstance(config);

      } catch(e) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("username");

        window.location.replace("/login");
      }
    } 

    return Promise.reject(error);
  }
);
