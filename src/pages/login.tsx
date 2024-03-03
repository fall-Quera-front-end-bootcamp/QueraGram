import LoginForm from "../components/login/login-form";

export default function Login() {
  return (
    <div className="flex bg-white rounded p-2 w-3/4 border border-solid border-black">
      <div className="flex-1 flex justify-center items-center h-96 bg-blue-700 rounded">
        <h1 className="text-6xl text-white">کوئراگرام</h1>
      </div>

      <div className="flex-1 flex flex-col items-center pt-2">
        <h2 className="text-4xl text-blue-700 basis-1/5">
          ورود به حساب کاربری
        </h2>

        <LoginForm />

        <a href="#" className="text-blue-700 self-end">
          ایجاد حساب
        </a>
      </div>
    </div>
  );
}
