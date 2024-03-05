import { useState } from "react";

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      return false;
    }

    return true;
  });

  return {
    isAuthenticated,
    setIsAuthenticated,
  };
}
