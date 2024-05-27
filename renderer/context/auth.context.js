"use client";
import { useEffect, useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import {  useRouter } from "next/router";
import { deleteCookie, setCookie } from "cookies-next";
import { toast, Flip } from "react-toastify";
export const AuthContext = createContext({
  user: {},
  logout: () => {},

  authLoading: () => {},
  setAuthLoading: () => {},
  error: {},
  success: {},
  setSuccess: () => {},
  setError: () => {},
  user: {},
  setUser: () => {},
  login: () => {},
});

export const AuthProvider = ({ children }) => {
  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const [user, setUser] = useState({});
  const [authLoading, setAuthLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  useEffect(() => {
    const storedUser =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("e-learning-user"))
        : null;
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = async (userData) => {
    // Implement your authentication logic here

    setAuthLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post(`${baseUrl}/api/user/login`, userData);
      console.log("log", response);
      if (response) {
        setAuthLoading(false);
        setSuccess(true);
        console.log("lol", response);

        window?.localStorage.setItem(
          "e-learning-user",
          JSON.stringify(response?.data)
        );
        toast.success("Login Successful", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Flip,
        });
        router.push("/dashboard");
        console.log("first", response);
        setCookie("e-learning-user", response.data.token);
        // setCookie("e-learning-admin", response?.data?.token);

        setLoading(false);
          setTimeout(() => {
            window.location.reload();        
          }, 1500);
     
      }

      return response;
    } catch (error) {
   console.log(error)
      toast.error(error?.response?.data?.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
      setAuthLoading(false);
      console.log("lmao", error);
      return error;
      setError("An error occurred while updating the data.");
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = () => {
    
    try {
      window?.localStorage.clear();
      deleteCookie("e-learning-user");
      setUser(null);
    
        router.push("/login");
    
    
      // Return any data if needed
      return { success: true };
    } catch (error) {
      // Handle errors if necessary
      console.error("Error during logout:", error);
      throw error;
    }
  };

  const value = {
    user,

    logout,

    error,
    authLoading,
    success,
    user,
    setUser,
    login,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
