import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/main-layout";
import Login from "./pages/login";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  }
])

export default router;