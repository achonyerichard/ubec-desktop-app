"use client";
import { AuthContext } from "../../../context/auth.context";
import useAuth from "../../../hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { BsArrowUpRight } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EditProfile = () => {
  const options = [
    { value: "English", label: "English" },
    { value: "Agric", label: "Agric" },
    { value: "Mathematics", label: "Mathematics" },
  ];
  const { editProfile, loading } = useAuth();
  const user = useContext(AuthContext);
  console.log(user.user);

  function formatDate(dateString) {
    const date = new Date(dateString);
    // Set hours to 0 to remove time portion
    date.setHours(0, 0, 0, 0);
    return date.toISOString().slice(0, 10);
  }

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const formattedDate = new Date(user.user.dob).toLocaleDateString("en-CA");

  const handleSubmitForm = (data) => {
    // Save changed values (you can perform saving logic here)
    console.log("Changed Values:", data);
    editProfile(data);
  };

  console.log(formattedDate);
  const router = useRouter();
  return (
    <section className="w-full h-screen ">
      <ToastContainer />
      <div className="w-full  py-10">
        <header className="pb-5 px-16">
          <h2 className="font-semibold text-lmsBlack text-2xl text-left">
            Edit Profile
          </h2>
        </header>
        <div className="flex flex-col justify-center items-center gap-y-2 mb-5">
          <Image
            className="w-28 h-28 object-cover rounded-full"
            alt="Profile Photo "
            height={100}
            width={100}
            src={
              user?.user?.gender === "male"
                ? "/subjects/student-m.jpg"
                : "/subjects/student-f.jpg"
            }
          />
          <p className="text-xl font-semibold text-lmsBlack text-center">
            {`${user?.user?.firstName} ${user?.user?.lastName}`}
          </p>
          <div className="bg-gray-300 h-2 w-60 rounded-[30px]">
            <div
              className="bg-lmsBlue h-2 text-white"
              style={{ width: "80% " }}
            >
              {/* {progress}% */}
            </div>
            <p className="text-lmsBlack text-xs text-center font-semibold">
              80% Complete your profile
            </p>
          </div>
        </div>
        <main className="bg-blue-200 bg-opacity-25 py-10 mt-10">
          <div className="">
            <h2 className="font-semibold pb-5 text-lmsBlack text-2xl text-center">
              Edit Profile Information
            </h2>
            <form
              onSubmit={handleSubmit(handleSubmitForm)}
              className="space-y-5  w-[500px] mx-auto  flex flex-col items-center justify-center"
            >
              <div className="w-full">
                <label className="block mb-1 font-thin text-gray-500 uppercase text-sm">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  {...register("firstName")}
                  defaultValue={user.user.firstName}
                  className="w-72 lg:w-full border border-lmsBlack p-3 rounded-lg outline-none focus:border-purple-500"
                />
              </div>
              <div className="w-full">
                <label className="block mb-1 font-thin text-gray-500 uppercase text-sm">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  {...register("lastName")}
                  defaultValue={user.user.lastName}
                  className="w-72 lg:w-full border border-lmsBlack p-3 rounded-lg outline-none focus:border-purple-500"
                />
              </div>

              <div className="w-full">
                <label className="block mb-1 font-thin text-gray-500 uppercase text-sm">
                  Date of Birth
                </label>

                <div className="flex flex-col ">
                  <input
                    defaultValue={user?.user?.dob ? formattedDate : ""}
                    className="w-72 lg:w-full border border-lmsBlack p-3 rounded-lg outline-none focus:border-purple-500"
                    type="date"
                  />
                </div>
              </div>
              <div className="w-full">
                <label className="text-sm">Select Class</label>
                <select
                  className="w-72 lg:w-full border border-lmsBlack p-3 rounded-lg outline-none focus:border-purple-500"
                  name="grades"
                >
                  <option hidden value="">
                    Select a Class
                  </option>

                  <option>Basic 1</option>
                  <option>Basic 2</option>
                  <option>Basic 3</option>
                  <option>Basic 4</option>
                  <option>Basic 5</option>
                  <option>Basic 6</option>
                </select>
              </div>
              <div className="w-full">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Subjects:
                </label>

                <Select
                  //   defaultValue={[colourOptions[2], colourOptions[3]]}
                  isMulti
                  name="colors"
                  options={options}
                  className="lg:w-full w-72  border rounded-lg"
                />
                {/* <div className="mt-2">
                  <ul>
                    {selectedValues.map((value, index) => (
                      <li key={index}>{value}</li>
                    ))}
                  </ul>
                </div> */}
              </div>
              <div className="flex gap-x-4 bg-lmsBlue justify-center py-2">
                <div
                  onClick={() => router.push("/dashboard")}
                  href="/dashboard"
                  className="cursor-pointer flex w-40 justify-center items-center gap-2 border-2 border-r-2 border-lmsBlack   bg-lmsRed hover:bg-lmsGreen p-4 rounded text-lmsWhite hover:text-lmsWhite transition duration-300"
                >
                  Cancel
                  <MdCancel className="text-lmsWhite text-lg" />
                </div>
                <button
                  onClick={handleSubmit}
                  disabledloading
                  className="flex w-40 justify-center items-center gap-2   bg-lmsBlue border border-lmsWhite border-r-0 hover:bg-lmsGreen p-4 rounded text-lmsWhite hover:text-lmsWhite transition duration-300"
                >
                  {loading ? (
                    "Loading.."
                  ) : (
                    <>
                      Save
                      <BsArrowUpRight className="text-lmsWhite text-lg" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default EditProfile;
