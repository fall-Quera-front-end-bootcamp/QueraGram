import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/main-layout";
import Login from "./pages/login";
import Home from "./pages/home";
import homeLoader from "./pages/loaders/homeLoader";
import Signup from "./pages/signup";
import authLoader from "./pages/loaders/loginLoader";
import Profile from "./pages/profile";
import profileLoader from "./pages/loaders/profileLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader
      },
      {
        path: "login",
        element: <Login />,
        loader: authLoader, 
      },
      {
        path: "signup",
        element: <Signup />,
        loader: authLoader,
      },
      {
        path: "profile",
        element: <Profile />,
        loader: profileLoader,
      }
    ]
  }
])

export default router;