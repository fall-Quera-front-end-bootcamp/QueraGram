import { BioFormData, LoginFormData, SignupFormData, RefreshTokenData } from "../types/types";
import { authInstance, axiosInstance } from "./axios";

const api = {
  requestLogin(payload: LoginFormData) {
    return authInstance.post("/login/", payload);
  },

  requestSignup(payload: SignupFormData) {
    return authInstance.post("/register/", payload);
  },

  requestRefreshToken(payload: RefreshTokenData) {
    return authInstance.post("/token/refresh/", payload);
  },

  requestChangeAvatar(avatar: Blob) {
    const formData = new FormData();
    formData.append("avatar", avatar);

    return axiosInstance.put("/profile/avatar/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  requestChangeBio(payload: BioFormData) {
    return axiosInstance.put("/profile/", payload);
  },

  requestFetchBio() {
    return axiosInstance.get("/profile/");
  },

  requestFetchAvatar() {
    return axiosInstance.get("/profile/avatar/");
  },

  requestFetchPosts() {
    return axiosInstance.get("/post/");
  }
};

export default api;
