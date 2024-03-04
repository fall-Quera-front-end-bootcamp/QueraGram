import { redirect } from "react-router-dom";
import auth from "../../auth";

export default function homeLoader() {
  if (!auth.isAuthenticated()) {
    return redirect("/login");
  }

  return null;
}