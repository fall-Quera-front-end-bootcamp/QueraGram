import { Outlet } from "react-router-dom";
import Navbar from "../components/global/navbar";

export default function MainLayout() {
  return (
    <div className="bg-gray-200 min-h-screen font-vazir">
      <Navbar />

      <div className="min-h-screen flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}
