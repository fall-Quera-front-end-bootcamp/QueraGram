import { Link } from "react-router-dom";
import auth from "../../auth";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth-context";

export default function Navbar() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext); 

  function onLogout() {
    auth.logout();
    setIsAuthenticated(false);
  }

  return (
    <header className="fixed bg-white p-8 shadow-md w-full flex justify-between">
      <Link to="/">
        <h1 className="text-3xl text-blue-700">کوئراگرام</h1>
      </Link>

      <div className={isAuthenticated ? "flex items-center" : "hidden"}>
        <Link to="/profile">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none rounded text-sm px-5 py-2.5 w-48 text-center ml-4">
            مشاهده پروفایل
          </button>
        </Link>

        <button onClick={onLogout}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
