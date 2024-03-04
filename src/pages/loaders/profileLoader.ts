import { redirect } from "react-router-dom";
import auth from "../../auth";
import api from "../../api/api";
import { AvatarResponse, BioResponse } from "../../types/types";

export default async function profileLoader() {
  if (!auth.isAuthenticated()) {
    return redirect("/login");
  }

  const bioResponse = await api.requestFetchBio();
  const bioResponseData = bioResponse.data as BioResponse;

  const avatarResponse = await api.requestFetchAvatar();
  const avatarResponseData = avatarResponse.data as AvatarResponse;

  return {
    bio: bioResponseData.bio,
    avatar: avatarResponseData.avatar,
  };
}
