import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="flex flex-col lg:gap-y-20 gap-y-10 lg:px-20 px-4 py-10 lg:py-20 lg:max-w-[1440px] mx-auto">
      <div className="flex justify-between flex-col lg:flex-row-reverse items-center lg:gap-x-20">
        <div className="lg:w-1/2">
          <p className="text-lg uppercase text-lmsRed">About Us</p>
          <h1 className="text-3xl lg:text-4xl font-semibold text-netBlue pb-5">
            E-Learning providing the best opportunities to the Pupils around the
            globe.
          </h1>
          {/* <div className="lg:w-1/2">
            <Image
              alt="Experience Image"
              src="/about/about-img-1.png"
              width={500}
              height={200}
              className="lg:hidden block w-full lg:w-[500px] h-auto object-cover"
            />
          </div> */}
          <p className="text-black font-thin pb-3">
            Lorem ipsum dolor sit amet consectetur. Maecenas ac elementum lacus
            vel vitae sed nisi aliquam aliquet. Vel adipiscing placerat tellus
            faucibus diam mauris ipsum vitae. Justo adipiscing integer dictum
            tortor viverra vel .
          </p>

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
        <div className="w-1/2">
          <Image
            alt="Experience Image"
            src="/about/about-img-1.png"
            width={500}
            height={500}
            className="hidden lg:block w-full lg:w-[500px] h-auto object-cover"
          />
        </div>
      </div>
      <div className="flex justify-between flex-col lg:flex-row items-center lg:gap-x-20">
        <div className="lg:w-1/2">
          <h1 className="text-3xl lg:text-4xl font-semibold text-netBlue pb-5">
            24/7 Students Support
          </h1>
          {/* <div className="">
          <Image
              alt="Experience Image"
              src="/about/about-img-2.png"
              width={500}
              height={200}
              className="lg:hidden block w-full lg:w-[500px] h-auto object-cover"
            />
          </div> */}
          <p className="text-black font-thin pb-3">
            Lorem ipsum dolor sit amet consectetur. Maecenas ac elementum lacus
            vel vitae sed nisi aliquam aliquet. Vel adipiscing placerat tellus
            faucibus diam mauris ipsum vitae. Justo adipiscing integer dictum
            tortor viverra vel .
          </p>

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
        <div className="lg:w-1/2">
        <Image
            alt="Experience Image"
            src="/about/about-img-2.png"
            width={500}
            height={500}
            className="hidden lg:block w-full lg:w-[500px] h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
