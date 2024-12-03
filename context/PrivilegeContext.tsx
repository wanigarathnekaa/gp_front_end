"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getPrivileges } from "@/actions/privilege";
import { useAuth } from "@/context/AuthProvider";

interface PrivilegesContextType {
  privileges: string[];
  refreshPrivileges: () => Promise<void>;
}

const PrivilegesContext = createContext<PrivilegesContextType | undefined>(undefined);

export const PrivilegesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [privileges, setPrivileges] = useState<string[]>([]);
  const { roleName } = useAuth();

  useEffect(() => {
    if (!roleName) return;

    const fetchPrivileges = async () => {
      try {
        const response = await getPrivileges(roleName);
        setPrivileges(response);
      } catch (error) {
        console.error("Error fetching privileges:", error);
      }
    };

    fetchPrivileges();
  }, [roleName]);

  const refreshPrivileges = async () => {
    if (!roleName) return;

    try {
      const response = await getPrivileges(roleName);
      setPrivileges(response);
    } catch (error) {
      console.error("Error refreshing privileges:", error);
    }
  };

  return (
    <PrivilegesContext.Provider value={{ privileges, refreshPrivileges }}>
      {children}
    </PrivilegesContext.Provider>
  );
};

export const usePrivileges = (): PrivilegesContextType => {
  const context = useContext(PrivilegesContext);
  if (!context) {
    throw new Error("usePrivileges must be used within a PrivilegesProvider");
  }
  return context;
};
