import {AuthContext} from "../../../context/auth.context"
import SubjectCards from "../../../components/subjects/Subjects";
import React, { useContext } from "react";

const Subjects = () => {
  const user =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("e-learning-user"))
        : null;
  console.log("first",user)
  return (
    <section className="w-full ">
      <div className='w-full max-w-[1320px] flex justify-start items-center p-10 lg:pl-20  mx-auto mt-10 rounded-[30px] h-60 lg:h-72 bg-no-repeat bg-blend-multiply bg-center object-cover  bg-[url("/dashboard/subject-hero.png")] bg-cover'>
        <div>
        <h2 className="text-3xl text-lmsWhite pb-5 capitalize">{`Hi, ${user?.firstName} ${user?.lastName}`}</h2>
         
          <p className="text-lg text-lmsWhite">
            What Would you like to learn Today? Search Below
          </p>
        </div>
      </div>
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
        <SubjectCards />
        {/* <Courses/>
      <RecommendedCourses/> */}
      </main>
    </section>
  );
};

export default Subjects;
