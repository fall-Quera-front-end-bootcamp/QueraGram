import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SignupFormData } from "../../types/types";
import auth from "../../auth";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth-context";

export default function SignupForm() {
  const { register, handleSubmit } = useForm<SignupFormData>();
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext); 

  async function onSubmit(data: SignupFormData) {
    try {
      await auth.signup(data);
      setIsAuthenticated(true);
      navigate("/profile");
    } catch (e) {
      console.log("Error Occured!");
      console.log(e);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full items-center gap-y-8 basis-4/5"
    >
      <input
        id="username"
        className="border text-md rounded py-2 px-4 w-3/4"
        placeholder="نام کاربری"
        {...register("username", { required: true })}
      />

      <input
        type="email"
        id="email"
        className="border text-md rounded py-2 px-4 w-3/4"
        placeholder="ایمیل"
        {...register("email", { required: true })}
      />

      <input
        type="password"
        id="password"
        className="border text-md rounded py-2 px-4 w-3/4"
        placeholder="گذرواژه"
        {...register("password", { required: true })}
      />

      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none rounded px-5 py-2.5 w-1/3 text-center"
        type="submit"
      >
        ثبت‌نام
      </button>
    </form>
  );
}
