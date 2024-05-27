import Courses from "../../components/dashboard/Courses";
import OngoingClasses from "../..//components/dashboard/OngoingClasses";
import RecommendedCourses from "../..//components/dashboard/RecommendedCourses";
import Image from "next/image";
import React, { useEffect } from "react";
import useCourses from "../../hooks/useCourses";
import { useRouter } from "next/router";

const Dashboard = () => {
  const { getAllLessons, allLessons,loading } = useCourses();
  useEffect(()=>{
   getAllLessons() 
  },[])
  console.log("cgi",allLessons)
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
    <section className="w-full ">
      <div className='w-full lg:max-w-[1320px] px-10 lg:px-0  mx-auto mt-10 rounded-[30px] h-60 lg:h-72 bg-no-repeat bg-blend-multiply bg-center  bg-blue-100 bg-[url("/dashboard/dashboard-hero.png")] bg-contain lg:bg-cover' />
      <div className="mt-10    relative flex justify-center w-60 lg:max-w-md mx-auto">
        <span className="absolute left-0">
          {" "}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="w-7 h-7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="20" fill="tranparent" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.33317 13.5417C11.2097 13.5417 13.5415 11.2098 13.5415 8.33334C13.5415 5.45685 11.2097 3.125 8.33317 3.125C5.45669 3.125 3.12484 5.45685 3.12484 8.33334C3.12484 11.2098 5.45669 13.5417 8.33317 13.5417ZM14.7915 8.33334C14.7915 11.9002 11.9 14.7917 8.33317 14.7917C4.76633 14.7917 1.87484 11.9002 1.87484 8.33334C1.87484 4.7665 4.76633 1.875 8.33317 1.875C11.9 1.875 14.7915 4.7665 14.7915 8.33334Z"
              fill="#060302"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.7841 13.7839C14.0282 13.5399 14.4239 13.5399 14.668 13.7839L17.9421 17.058C18.1862 17.3021 18.1862 17.6978 17.9421 17.9419C17.698 18.186 17.3023 18.186 17.0582 17.9419L13.7841 14.6678C13.5401 14.4237 13.5401 14.028 13.7841 13.7839Z"
              fill="#060302"
            />
          </svg>
        </span>
        <input
          className="lg:w-full w-60 pl-7 font-thin placeholder:text-gray-400 placeholder:text-lg  text-lg lg:text-2xl text-lmsBlack outline-none focus:outline-none:focus border-b border-lmsBlack"
          type="search"
          autocomplete="off"
          spellcheck="false"
          aria-live="polite"
          placeholder="Search subject"
        />
      </div>
      <main className="h-auto mb-20 bg-blue-100 py-20 mt-10 lg:px-20 px-10 ">
        <div className="max-w-[1200px] mx-auto">
        <OngoingClasses />
          {/* <Courses /> */}
          <RecommendedCourses data={allLessons} loading={loading}/>
        </div>
      </main>
    </section>
  );
};

export default Dashboard;
