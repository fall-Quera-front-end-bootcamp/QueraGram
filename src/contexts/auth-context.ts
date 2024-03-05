import { createContext } from "react";

interface AuthContextType {
  isAuthenticated: boolean,
  setIsAuthenticated: (newAuth: boolean) => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
})