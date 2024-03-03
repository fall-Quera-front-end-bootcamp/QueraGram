import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormData>();
  const navigate = useNavigate();

  async function onSubmit(data: LoginFormData) {
    try {
      const response = await axios.post("/api/login/", data);
      console.log(response.data);
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
