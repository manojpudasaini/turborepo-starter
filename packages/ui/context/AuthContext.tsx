"use client";
import { type AuthUser, fetchAuthSession } from "aws-amplify/auth";
import React, { useEffect, useState, createContext, useContext } from "react";
import { getCurrentUserDetails, userSignOutHandler } from "@repo/services";
import { useRouter } from "next/navigation";
interface AuthContextProps {
  loading: boolean;
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  handleSignOut: () => void;
  getUserData: () => void;
}

export const AuthContext = createContext<Partial<AuthContextProps>>({
  loading: false,
  user: null,
  setUser: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  handleSignOut: () => {},
  getUserData: () => {},
});

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  const handleSignOut = () => {
    router.push("/login");
    setUser(null);
    userSignOutHandler();
  };
  const getUserData = async () => {
    console.log(" I am running...");
    try {
      setLoading(true);
      const user = await getCurrentUserDetails();
      const token = await fetchAuthSession();
      console.log("user in context:", user);
      setUser(user);
      setIsAuthenticated(!!user.userId);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e, "error");
    }
  };
  console.log(loading, "loading");

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        handleSignOut,
        loading,
        getUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
