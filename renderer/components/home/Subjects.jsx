import Image from "next/image";
import React from "react";

const Subjects = () => {
  const subjects = [
    {
      subject: "Mathematics",
      class: "Basic 5",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur repudiandae deleniti cumque ad, incidunt ullam?",
      img: "/subjects/math.png",
    },
    {
        subject: "English Language",
        class: "Basic 7",
        desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur repudiandae deleniti cumque ad, incidunt ullam?",
        img: "/subjects/english.png",
      },
      {
        subject: "Basic Science",
        class: "Basic 7",
        desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur repudiandae deleniti cumque ad, incidunt ullam?",
        img: "/subjects/science.png",
      },
      {
        subject: "History",
        class: "Basic 7",
        desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur repudiandae deleniti cumque ad, incidunt ullam?",
        img: "/subjects/history.png",
      },
  ];
  return (
    <section
      id="subjects"
      className='min-w-full  flex flex-col  min-h-screen py-10 lg:py-20 mb-12  bg-lmsBlack bg-fixed bg-cover   bg-center  bg-[url("/home/hero-2.jpg")] bg-no-repeat'
    >
      <header className="section-head-parallax max-w-xl mx-auto">
        <h4 className="text-lmsWhite text-3xl text-center">
          Our Best Subjects Offered and Teach By Best of The Instructors
        </h4>
        <p className="text-gray-300 text-center font-thin pt-5">
          Install our E-Learning app to your Kids tablet and enjoy stress free
          education and tutoring from the best instructors.{" "}
        </p>
      </header>

      <div className="flex gap-x-4 overflow-x-auto lg:px-20 px-10  text-clip no-scrollbar pt-10">
       {subjects.map((item)=>(
        <div key={item.subject} className=" min-w-[376px] p-4 bg-lmsWhite rounded-lg shadow-lg">
          <div className="">
            <Image
              src={item.img}
              alt=""
              width={500}
              height={500}
              className="rounded-t-lg w-auto h-auto object-cover"
            />
            <div>
              <span className="flex justify-between pt-5 items-center">
                <h2 className="font-semibold text-xl text-lmsBlack">
                  {item.subject}
                </h2>
                <span className="bg-green-200 text-green-500 p-1.5 text-xs rounded-sm">
                  {item.class}
                </span>
              </span>

              <p className="text-lmsBlack pt-3">
               {item.desc}
              </p>
              <div className="pt-5 flex items-center gap-x-4 ">
                <button className="flex justify-center py-3 bg-lmsBlue text-lmsWhite w-4/5 rounded-[30px]">
                  View Subject
                </button>
                <span className="w p-3 border border-lmsBlue flex items-center rounded-full ">
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
       )) }
      </div>
    </section>
  );
};

export default Subjects;
