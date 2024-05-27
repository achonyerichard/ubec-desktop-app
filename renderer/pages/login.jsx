"use client";

import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { BsArrowUpRight } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../context/auth.context";
import { useRouter } from "next/router";
const Login = () => {
  const router = useRouter();
  console.log("page", router.pathname);
  const user =  typeof window !== "undefined"
  ? JSON.parse(localStorage.getItem("e-learning-user"))
  : null;

  const isLoggedIn = user ? true : false
  console.log("logo",isLoggedIn)
  useEffect(() => {
    if (router.pathname.includes("dashboard") && isLoggedIn) {
      router.push("/dashboard");
    }else if (router.pathname.includes("dashboard") && !isLoggedIn) {
      router.push("/");
    }else if (!router.pathname.includes("dashboard") && isLoggedIn) {
      router.push("/dashboard");
    }
  }, []);
  const [passwordtoggle, setPasswordToggle] = useState(true);
  const { login, authLoading } = useContext(AuthContext);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const handleRegsiter = async (data) => {
    login(data);
    // login(data).then((res) => {
    //   console.log("login data",res);
    //   if (res?.response?.data?.response?.status != 200) {
    //     console.log("kkkk",res);
    //     toast.error(res?.response?.data?.message, {
    //       position: "top-center",
    //       autoClose: 5000,
    //       hideProgressBar: true,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "colored",
    //     });
    //   }
    //   if (res?.status == 200) {
    //     toast.success("Login Successful !!!", {
    //       position: "top-center",
    //       autoClose: 5000,
    //       hideProgressBar: true,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "colored",
    //     });

    //   }
    // });
  };
  return (
    <>
      <main className="mb-10  h-auto px-4 mt-20 lg:mt-0  flex md:flex-row flex-col lg:items-center justify-center lg:max-w-[800px] mx-auto">
        <div className="bg-white p-5 w-full  mx-auto mt-5">
          {/* <h2 className="text-3xl text-lmsGreen font-bold mb-5">Register</h2> */}
          <ToastContainer />
          <form className="space-y-5" onSubmit={handleSubmit(handleRegsiter)}>
            <div>
              <label className="block mb-1 font-semibold text-gray-500 uppercase text-sm">
                User Id
              </label>
              <input
                type="text"
                className="w-full border border-lmsBlack p-3 rounded-lg outline-none focus:border-purple-500"
                {...register("userId", { required: "User Id is required" })}
              />
              {errors && errors?.userId?.type === "required" && (
                <span className="text-xs text-red-500 ease-out duration-1500 transition-all">
                  {errors?.userId.message}
                </span>
              )}
            </div>
            <div className={`text-black flex flex-col items-start mb-5`}>
              <label
                className={`ml-1 mb-2 text-md text-black `}
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative w-full">
                <input
                  id="password"
                  type={passwordtoggle ? "password" : "text"}
                  placeholder="*******"
                  className=" border border-lmsBlack p-3 rounded-lg outline-none focus:border-purple-500 w-full  text-base md:text-lg  outline-none focus:border-slate-400 "
                  {...register("password", {
                    required: "Password is required",
                  })}
                  name="password"
                />

                <div className="absolute inset-y-0 right-0 top-0 pr-3 flex items-center text-sm leading-5">
                  <span
                    onClick={() => setPasswordToggle(!passwordtoggle)}
                    className="cursor-pointer"
                  >
                    {!passwordtoggle ? (
                      <svg
                        className="h-6  fill-black"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="EyeOutlineIcon"
                      >
                        <path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path>
                      </svg>
                    ) : (
                      <svg
                        className="h-6  fill-black"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="EyeOffOutlineIcon"
                      >
                        <path d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"></path>
                      </svg>
                    )}
                  </span>
                </div>
              </div>
              {errors && errors?.password && (
                <span className="text-xs text-red-500 ease-out duration-1500 transition-all">
                  {errors?.password?.message}
                </span>
              )}
            </div>

            <button
              disabled={authLoading}
              className="flex  justify-center items-center gap-2  w-full bg-lmsRed hover:bg-lmsGreen p-4 rounded text-lmsWhite hover:text-yellow-800 transition duration-300"
            >
              {authLoading ? "Loading..." : " Login"}
            </button>
          </form>
          {/* <span className="flex justify-center text-lmsBlack pt-3">
            Already have an account ?
            <Link href="/login" className="text-lmsRed pl-2 underline">
              Login
            </Link>
          </span> */}
        </div>
      </main>
    </>
  );
};

export default Login;