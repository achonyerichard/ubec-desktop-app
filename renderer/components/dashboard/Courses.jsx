import Image from "next/image";
import React from "react";

const Courses = () => {
  const subjects = [
    {
      subject: "Mathematics",
      class: "Basic 5",
      author: "Salem D.",
      img: "/subjects/math.png",
      lessons: 30,
    },
    {
      subject: "English Language",
      class: "Basic 7",
      author: "Richard D.",
      img: "/subjects/english.png",
      lessons: 40,
    },
    {
      subject: "Basic Science",
      class: "Basic 7",
      author: "Dick D.",
      img: "/subjects/science.png",
      lessons: 10,
    },
    {
      subject: "History",
      class: "Basic 7",
      author: "Glory D.",
      img: "/subjects/history.png",
      lessons: 50,
    },
  ];
  return (
    <>
      <div className="flex gap-x-8 overflow-x-auto   text-clip no-scrollbar pt-20">
        {subjects.map((item) => (
          <div
            key={item.subject}
            className=" w-[300px] bg-transparent  shadow-lg"
          >
            <div className="">
              <Image
                src={item.img}
                alt=""
                width={500}
                height={500}
                className="rounded-t-lg  w-full h-40 object-cover"
              />
              <div className="p-5 bg-lmsBlue rounded-b-[30px] ">
                <span className="flex justify-between pt-5 items-center">
                  <h2 className="font-light text-lg text-lmsWhite">
                    {item.subject}
                  </h2>
                </span>

                <p className="text-lmsWhite pb-5 font-thin">{`By : ${item.author}`}</p>
                <div className="pt-3 flex items-center justify-between gap-x-4 border-t border-lmsWhite">
                  <span className="text-lmsWhite ">{`${item.lessons} lessons`}</span>
                  <span className="w p-3 border border-lmsRed flex items-center rounded-full ">
                    <svg
                      className="fill-lmsBlue"
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
