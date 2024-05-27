"use client";

import LessonContent from "../../../../components/subjects/LessonContent";
import Reviews from "../../../../components/subjects/Reviews";
import SubjectDetails from "../../../..//components/subjects/SubjectDetails";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const IndividualSubject = () => {

  const router = useRouter();

  const data =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("singleSubject"))
    : null;

  const tabs = [
    {
      id: 0,
      name: "Subject Details",
      component: <SubjectDetails data={data} />,
    },
    // {
    //   id: 1,
    //   name: "Lesson Content (60)",
    //   component: <LessonContent data= {data}/>,
    // },
    {
      id: 2,
      name: " Reviews",
      component: <Reviews />,
    },

    // Add more tabs if needed
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  // useEffect(() => {
  //   subject ? setActiveTab(tabs[subject]) : tabs[0];
  // }, [subject]);

  // console.log("prms", subject);

  return (
    <section className=" h-[calc(100vh-64px)] flex flex-col gap-4 w-full    ">
      <ul className="lg:py-6 py-8 bg-lmsBlue h-auto  shadow-lg flex justify-center lg:pb-2 items-center flex-row   lg:space-x-6 space-x-2  sticky top-0 w-full overflow-y-hidden z-10 lg:overflow-x-hidden overflow-x-scroll no-scrollbar">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            onClick={() => handleTabClick(tab)}
            className={`mr-2 cursor-pointer my-4 px-2 rounded-full p-2 text-sm   ${
              activeTab?.id === tab.id
                ? "font-bold bg-lmsYellow rounded-lg  text-lmsBlack"
                : "text-lmsBlack bg-gray-200 rounded-lg font-normal"
            }`}
          >
          {tab.name}
          </li>
        ))}
      </ul>
      <div className=" overflow-y-scroll no-scrollbar text-clip ">
        {activeTab?.component}
      </div>
    </section>
  );
};

export default IndividualSubject;
