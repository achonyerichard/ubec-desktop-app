"use client";
import { AuthContext } from "../../../context/auth.context";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const Profile = () => {
  const user = useContext(AuthContext);
  console.log(user.user);
  const userDeets = user?.user;

  const formattedDate = new Date(userDeets.dob).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="w-full h-screen bg-blue-200 bg-opacity-25 ">
      <div className="w-full px-5 lg:px-16 py-10">
        <header className="pb-5 ">
          <h2 className="font-medium text-lmsBlack text-2xl text-left">
            Profile
          </h2>
        </header>
        <div className="flex flex-col justify-center items-center gap-y-2 mb-5">
          <Image
            className="w-28 h-28 object-cover rounded-full"
            alt="Profile Photo "
            height={100}
            width={100}
            src={userDeets?.gender === "male" ? "/subjects/student-m.jpg":"/subjects/student-f.jpg"}
          />
          <p className="text-xl font-semibold text-lmsBlack text-center">
            {`${userDeets.firstName} ${userDeets.lastName}`}
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
        <main className="mt-10 max-w-xl mx-auto">
          <div className="flex flex-col gap-4 bg-lmsBlue py-6 rounded-[30px]">
            <div className="flex justify-between items-center px-6">
              <h1 className="text-xl text-lmsWhite">Profile Information</h1>
              <Link href="/dashboard/edit-profile">
                <svg
                  width="76"
                  height="75"
                  className="w-10 h-10"
                  viewBox="0 0 76 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M53.2581 14.6444C56.5948 11.3076 62.0048 11.3076 65.3415 14.6443C68.6782 17.9811 68.6782 23.391 65.3415 26.7277L45.642 46.4272C44.4251 47.6441 42.8691 48.4652 41.1777 48.7829L32.2453 50.4608C31.4891 50.6029 30.7115 50.3625 30.1674 49.8184C29.6233 49.2743 29.3829 48.4967 29.5249 47.7404L31.2029 38.8081C31.5207 37.1167 32.3417 35.5608 33.5586 34.3439L53.2581 14.6444ZM62.046 17.9398C60.5293 16.4231 58.0703 16.4231 56.5536 17.9398L36.8541 37.6393C36.3009 38.1925 35.9277 38.8997 35.7833 39.6685L34.7345 45.2512L40.3173 44.2025C41.0861 44.0581 41.7934 43.6849 42.3465 43.1318L62.046 23.4323C63.5627 21.9156 63.5627 19.4565 62.046 17.9398Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28.065 34.4239H21.9421C18.7058 34.4239 15.7472 36.2523 14.2999 39.147L8.08591 51.575C5.24538 57.2561 9.37648 63.9403 15.7281 63.9403H57.7591C64.1108 63.9403 68.2419 57.2561 65.4013 51.575L59.1873 39.147C59.0936 38.9595 58.9935 38.7766 58.8875 38.5983L55.4307 42.055L61.2329 53.6592C62.524 56.2415 60.6462 59.2798 57.7591 59.2798H15.7281C12.841 59.2798 10.9632 56.2415 12.2544 53.6592L18.4684 41.2312C19.1263 39.9155 20.4711 39.0844 21.9421 39.0844H24.8875C25.1178 37.9174 25.6851 36.8037 26.5894 35.8995L28.065 34.4239Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
            <span className="mt-3 py-3 bg-lmsBlack px-6">
              <h1 className="text-lmsWhite font-medium text-xl ">
                {`${userDeets.firstName} ${userDeets.lastName}`}
              </h1>
            </span>
            <span className="mt-3 py-3 bg-lmsRed px-6">
              <h1 className="text-lmsWhite font-medium text-xl ">
              {formattedDate}
              </h1>
            </span>
            <span className="mt-3 py-3 bg-lmsGreen px-6">
              <h1 className="text-lmsWhite font-medium text-xl ">Basic 5</h1>
            </span>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Profile;
