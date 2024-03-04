import { Link } from "react-router-dom";
import SignupForm from "../components/signup/signup-form";
import AuthLayout from "../layouts/auth-layout";

export default function Signup() {
  return (
    <AuthLayout>
      <h2 className="text-4xl text-blue-700 basis-1/5">
        ساخت حساب کاربری
      </h2>

      <SignupForm />

      <Link to="/login" className="text-blue-700 self-end">
        ورود
      </Link>
    </AuthLayout>
  )
}