import api from "./api/api";
import router from "./router";
import { LoginFormData, LoginResponse, SignupFormData } from "./types/types";

const auth = {
  isAuthenticated() {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      return false;
    }

    return true;
  },

  async login(data: LoginFormData) {
    try {
      const response = await api.requestLogin(data);
      const responseData = response.data as LoginResponse;
      localStorage.setItem("accessToken", responseData.tokens.access);
      localStorage.setItem("refreshToken", responseData.tokens.refresh);
      localStorage.setItem("username", responseData.username);
    } catch (e) {
      throw e;
    }
  },

  async signup(data: SignupFormData) {
    try {
      const response = await api.requestSignup(data);
      const responseData = response.data as LoginResponse;
      localStorage.setItem("accessToken", responseData.tokens.access);
      localStorage.setItem("refreshToken", responseData.tokens.refresh);
      localStorage.setItem("username", responseData.username);
    } catch (e) {
      throw e;
    }
  },

  logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("username");
    router.navigate("/login");
  }
};

export default auth;
