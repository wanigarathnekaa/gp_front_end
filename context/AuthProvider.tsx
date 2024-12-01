"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface AuthContextType {
  decodedToken: any;
  setToken: (token: string) => void;
}

function parseJwt(token:string) {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [decodedToken, setDecodedToken] = useState(null);

  // Load token from sessionStorage on app initialization
  useEffect(() => {
    const token = sessionStorage.getItem("user");
    if (token) {
      try {
        const decoded = JSON.parse(token);
        setDecodedToken(decoded);
      } catch (error) {
        console.error("Error decoding stored token:", error);
      }
    }
  }, []);


  const setToken = (token: string) => {
    let obj=parseJwt(token);

    sessionStorage.setItem("user", JSON.stringify(obj));
    const decoded = obj;
    setDecodedToken(obj);
    console.log("decoded",decoded);
  };

  return (
    <AuthContext.Provider value={{ decodedToken, setToken }}>
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
