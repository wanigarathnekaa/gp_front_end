"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  decodedToken: any;
  roleName: string | null;
  setToken: (token: string, roleName: string) => void;
}

function parseJwt(token: string) {
  if (!token) return;
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(window.atob(base64));
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [decodedToken, setDecodedToken] = useState(null);
  const [roleName, setRoleName] = useState<string | null>(null);

  // Load token and role from sessionStorage on app initialization
  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        setDecodedToken(parsedUser.token);
        setRoleName(parsedUser.roleName);
      } catch (error) {
        console.error("Error decoding stored user data:", error);
      }
    }
  }, []);

  const setToken = (token: string, role: string) => {
    const obj = parseJwt(token);
    sessionStorage.setItem("user", JSON.stringify({ token: obj, roleName: role }));
    setDecodedToken(obj);
    setRoleName(role);
  };

  return (
    <AuthContext.Provider value={{ decodedToken, roleName, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
