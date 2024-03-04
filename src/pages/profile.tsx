import { useLoaderData } from "react-router-dom";
import AvatarSelector from "../components/profile/avatar-selector";
import BioForm from "../components/profile/bio-form";
import { ProfileLoaderData } from "../types/types";

export default function Profile() {
  const data = useLoaderData();

  return (
    <div className="bg-white w-3/4 border border-solid border-black p-4 shadow-md rounded">
      <h1 className="text-3xl text-blue-700">اطلاعات کاربری</h1>

      <div className="flex pt-8 h-64">
        <AvatarSelector defaultAvatar={(data as ProfileLoaderData).avatar.replace("5173", "8000")} />

        <BioForm defaultBio={(data as ProfileLoaderData).bio} />
      </div>
    </div>
  );
}
