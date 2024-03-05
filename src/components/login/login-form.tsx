import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginFormData } from "../../types/types";
import auth from "../../auth";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth-context";

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormData>();
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext); 

  async function onSubmit(data: LoginFormData) {
    try {
      await auth.login(data);
      setIsAuthenticated(true);
      navigate("/");
    } catch(e) {
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
        ورود
      </button>
    </form>
  );
}
