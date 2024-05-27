"use client";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { toast, Flip } from "react-toastify";
import { setCookie } from "cookies-next";
import { AuthContext } from "../context/auth.context";
const useAuth = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  // const BASE_URL = process.env.REACT_APP_BASE_URL;
  //   const access_token = localStorage.getItem("auth-token");
  const user = useContext(AuthContext);

  console.log("hahahaha",user)
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setUser } = useContext(AuthContext);

  const updateCode = async (data) => {
    setLoading(true);
    await axios
      .post(
        `${baseUrl}/api/activation/activate`,

        data,
        { headers: {} }
      )
      .then((response) => {
        console.log(response);
        // send user back to the task home page
        if (response.data) {
          toast.success("Activated Successfully", {
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
          router.push("/register");
          setLoading(false);
        
          
      
        }

        // console.log(response.json())
      })
      .catch((error) => {
        if (error.response) {
          setLoading(false);
          const { status, data } = error.response;
          toast.error(data.message, {
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
          if (status === 400 && data && data.message) {
            console.log("An error occured", data.message);
          } else if (status === 403 && data && data.message) {
            // navigate('/')
          } else {
            console.log("Axios error:", error);
          }
        } else {
          setLoading(false);
          console.log("Network error:", error.message);
        }
      });
  };
  const login = async (data) => {
    setLoading(true);
    await axios
      .post(
        `${baseUrl}/api/user/create`,

        data,
        { headers: {} }
      )
      .then((response) => {
        console.log(response);
        // send user back to the task home page
        if (response.data) {
          toast.success("Created Successfully", {
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
          //       window?.localStorage.setItem("user", JSON.stringify(response.data.data));

          //       window?.localStorage.setItem("userId", response.data.data.user.userId);

          //   console.log("first",response)
          //       setCookie("payslate-admin-token-1", response.data.data.token);

          setLoading(false);
          setTimeout(() => {
            router.push("/login");
          }, 1000);
        }

        // console.log(response.json())
      })
      .catch((error) => {
        if (error.response) {
          setLoading(false);
          const { status, data } = error.response;
          toast.error(data.message, {
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
          if (status === 400 && data && data.message) {
            console.log("An error occured", data.message);
          } else if (status === 403 && data && data.message) {
            // navigate('/')
          } else {
            console.log("Axios error:", error);
          }
        } else {
          setLoading(false);
          console.log("Network error:", error.message);
        }
      });
  };
  const loginFunc = async (userData) => {
    // Implement your authentication logic here

    setLoading(true);

    try {
      const response = await axios.post(`${baseUrl}/api/user/login`, userData);
      console.log("log", response);
      if (response) {
        setLoading(false);

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
        console.log("first", response);
        setCookie("e-learning-user", response.data.token);
        // setCookie("e-learning-admin", response?.data?.token);
        // window.location.reload();
        router.push("/dashboard");
      }

      return response;
    } catch (error) {
      if (error) {
        toast.error(error.response.data.message, {
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
        setLoading(false);
        console.log("lmao", error);
        return error;
      }
    } finally {
      setLoading(false);
    }
  };
  const editProfile = async (data) => {
    setLoading(true);
    await axios
      .put(
        `${baseUrl}/api/user/update/profile`,

        data,
        {   headers: { "x-auth-token": user?.user?.token }, }
      )
      .then((response) => {
        console.log(response);
        // send user back to the task home page
        if (response.data) {
          toast.success("Updated Successfully", {
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
          //       window?.localStorage.setItem("user", JSON.stringify(response.data.data));

          //       window?.localStorage.setItem("userId", response.data.data.user.userId);

          //   console.log("first",response)
          //       setCookie("payslate-admin-token-1", response.data.data.token);

          setLoading(false);
          // setTimeout(() => {
          //   router.push("/login");
          // }, 1000);
        }

        // console.log(response.json())
      })
      .catch((error) => {
        if (error.response) {
          setLoading(false);
          const { status, data } = error.response;
          toast.error(data.message, {
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
          if (status === 400 && data && data.message) {
            console.log("An error occured", data.message);
          } else if (status === 403 && data && data.message) {
            // navigate('/')
          } else {
            console.log("Axios error:", error);
          }
        } else {
          setLoading(false);
          console.log("Network error:", error.message);
        }
      });
  };
  return {
    updateCode,
    loading,
    login,
    loginFunc,
    editProfile
  };
};

export default useAuth;
