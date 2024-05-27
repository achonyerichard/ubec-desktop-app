

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const router = useRouter()
  return (
    <>
      <main id="home" className="flex m flex-col   pt-20 lg:pt-0 lg:max-w-[1440px] mx-auto">
        <main className=" sm:px-6 h-screen md:mt-12 lg:mt-10  px-4  lg:px-20 md:px-12 flex md:flex-row flex-col items-center lg:items-start  ">
          <div className=" w-full md:w-1/2   mt-11 flex-1">
            <h2 className="   lg:text-7xl uppercase text-4xl  font-black text-center lg:text-left text-netBlue leading-none    ">
              <span className="text-lmsRed">Dive</span> into the greatness of{" "}
              <span className="text-lmsGreen">learning.</span>
            </h2>

            <p className="mt-3 text-lmsBlack font-thin sm:mt-5 text-md sm:max-w-xl text-center md:text-left md:mt-5 ">
              Online educational platform for learning where students aged
              between 4 -13 years makes their dreams come true by learning from
              the comfort of their home.
            </p>
            <div className=" mt-10">
              <div onClick={()=>router.push("/login")} className=" flex flex-col  md:justify-start md:items-start  rounded-md justify-center items-center">
                <button className="w-auto h-[40px] flex items-center gap-x-2 justify-center px-4 py-3    leading-6 font-regular  text-lmsWhite bg-lmsRed transition duration-150 ease-in-out md:py-4 md:px-10">
                  Get started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-lmsWhite"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-around mt-5 lg:w-4/5">
              <div className="border-gray-200 border-r lg:pr-10 ">
                <Image
                  alt="Hero Image"
                  src={"/hero/hero-group.png"}
                  width={500}
                  height={500}
                  className="object-contain w-20 lg:h-10 "
                />
              </div>
              <div className="lg:pl-10 flex flex-col lg:items-start items-center gap-2 pt-10 lg:pt-0">
                <h3 className="text-lms text-xl font-black">17,000 Learners</h3>
                <p className="text-gray-500 font-thin">
                  Yesterday’s kids tomorrow’s creators
                </p>
              </div>
            </div>
          </div>
          <div
            className={`md:w-1/2 lg:grid grid-cols-2 gap-4  h-auto  hidden `}
          >
            <Image
              alt="Hero Image"
              src={"/hero/hero-img-1.png"}
              width={500}
              height={500}
              className="object-cover lg:w-auto lg:h-auto "
            />
            <Image
              alt="Hero Image"
              src={"/hero/hero-img-2.png"}
              width={500}
              height={500}
              className="object-cover lg:w-auto lg:h-auto "
            />
            <Image
              alt="Hero Image"
              src={"/hero/hero-img-3.png"}
              width={500}
              height={500}
              className="object-cover lg:w-auto lg:h-auto "
            />
            <Image
              alt="Hero Image"
              src={"/hero/hero-img-4.png"}
              width={500}
              height={500}
              className="object-cover lg:w-auto lg:h-auto "
            />
          </div>
        </main>
      </main>
    </>
  );
};

export default Hero;
