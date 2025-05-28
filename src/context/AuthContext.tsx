// context/AuthContext.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  permissions: string[];
  address: string;
}

interface LoginResponse {
  message: string;
  token: string;
  user: User;
}

interface AuthContextType {
  authData: LoginResponse | null;
  setAuthData: (data: LoginResponse | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authData, setAuthData] = useState<LoginResponse | null>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("authData");
      return stored ? JSON.parse(stored) : null;
    }
    return null;
  });

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
