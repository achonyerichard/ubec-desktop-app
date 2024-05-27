

import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Contact = () => {
  const shuffleArray = (array) => {
    if (array.length < 2) return array; // No need to shift for arrays with 0 or 1 elements

    const lastElement = array.pop(); // Remove the last element
    array.unshift(lastElement);
  };

  const array = ["apple", "orange", "pear"];

  const shuffler = (e) => {
    e.preventDefault();
    shuffleArray(array);
    console.log(array);
  };
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
  return (
    <>
      <main className="mb-10  h-auto px-4  lg:px-20 md:px-12 mt-10 flex md:flex-row flex-col items-center justify-between lg:max-w-[1440px] mx-auto ">
        <div className=" w-full md:w-1/2    ">
          <Image
            alt="Experience Image"
            src="/about/about-img-1.png"
            width={500}
            height={500}
            className=" block w-auto  h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 h-[550px] flex      bg-no-repeat bg-contain bg-center">
          {/* <Image
            alt="Hero Image"
            src={"/hero/hero-img-4.png"}
            width={500}
            height={500}
            className="object-cover lg:w-auto lg:h-auto "
          /> */}
          <form className='w-[500px] h-auto bg-[url("/contact/contact-bg.png")] relative'>
            <div className="max-w-[500px] mx-auto pl-5">
              <div className="w-auto pt-20 px-10">
                <div className="flex flex-wrap mb-6 ">
                  <div className="w-[400px] px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      First Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-transparent text-gray-700 border border-lmsBlack rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Email Address
                    </label>
                    <input
                      className="appearance-none block w-full bg-transparent text-gray-700 border border-lmsBlack rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-email"
                      type="email"
                      placeholder="********@*****.**"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap  mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Your Message
                    </label>
                    <textarea
                      rows="5"
                      className="appearance-none block w-full bg-transparent text-gray-700 border border-lmsBlack rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-full absolute bottom-0 left-8 ">
              <button
                onClick={(e) => shuffler(e)}
                className=" bg-lmsRed w-[470px] text-lmsWhite border border-lmsBlack h-12 items-center flex justify-center gap-x-2"
              >
                Let's talk
                <BsArrowUpRight className="text-lmsWhite text-lg" />
              </button>
            </div>
          </form>
        </div>
      </main>
     
    </>
  );
};

export default Contact;
