"use client";
import React, { useState } from "react";

import Otp from "../Otp";
import Image from "next/image";

const LoginForm = () => {
  const [otp, setOtp] = useState("");
  return (
    <div className="relative">
      <div className="flex h-screen bg-lmsWhite flex-col justify-center items-center gap-y-6  w-full">
        <header className="text-center flex flex-col gap-y-4">
          <h1 className="text-4xl font-bold">
            <span className="text-lmsRed">Enter</span> Activation Code
          </h1>
          <p className="font-thin text-lg">
            Don't miss your next opportunity. Sign in to stay updated on your
            learning process
          </p>
        </header>
        <Otp />
        <div className="bottom-10 left-0 absolute">
          <Image
            width={500}
            height={500}
            alt="Flower"
            src="/login/flower.png"
            className="w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
