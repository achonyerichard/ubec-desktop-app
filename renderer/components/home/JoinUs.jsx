import Link from "next/link";
import React from "react";

const JoinUs = () => {
  return (
    <div className=' z-[1000] mx-4 lg:mx-20 bg-[url("/contact/join-us.png")] bg-center  h-96  py-10 flex flex-col items-center'>
      <h3 className="text-2xl text-lmsGreen font-semibold">Join Us</h3>

      <header className="section-head-parallax max-w-lg mx-auto">
        <h1 className="pt-10 text-lmsWhite text-3xl text-center">
          Join Us by Creating Account{" "}
        </h1>
        <p className="text-lmsWhite text-center font-thin pt-5">
          Lorem ipsum dolor sit amet consectetur. Maecenas ac elementum lacus
          vel vitae sed nisi aliquam aliquet. Vel adipiscing placerat tellus
          faucibus
        </p>

        <div className="flex justify-around items-center pt-3">
          <button className="w-auto h-[40px] rounded-[30px] flex items-center gap-x-2 justify-center px-4 py-3    leading-6 font-regular  text-lmsWhite bg-lmsRed transition duration-150 ease-in-out md:py-6 md:px-10">
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

          <span className="w-auto h-[40px] rounded-[30px] flex items-center gap-x-2 justify-center px-4 py-3    leading-6 font-regular  text-lmsWhite bg-transparent border-2 border-lmsWhite transition duration-150 ease-in-out md:py-6 md:px-10">
            <Link href="/contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-lmsWhite"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
              </svg>
            </Link>
          </span>
        </div>
      </header>
    </div>
  );
};

export default JoinUs;
