import Image from "next/image";
import React from "react";
import { FaClock, FaRegClock } from "react-icons/fa";
import Rate from "./Rate";
const courses = [
  {
    title: "Introduction to Web Development",
    instructor: "John Doe",
    duration: "8 weeks",
    image: "course1.jpg",
  },
  {
    title: "JavaScript Fundamentals",
    instructor: "Jane Smith",
    duration: "6 weeks",
    image: "course2.jpg",
  },
  {
    title: "React.js for Beginners",
    instructor: "David Brown",
    duration: "10 weeks",
    image: "course3.jpg",
  },
  {
    title: "Python Programming",
    instructor: "Alice Johnson",
    duration: "12 weeks",
    image: "course4.jpg",
  },
  {
    title: "Data Science with Python",
    instructor: "Michael White",
    duration: "14 weeks",
    image: "course5.jpg",
  },
];

// Accessing individual courses
console.log(courses[0].title); // "Introduction to Web Development"
console.log(courses[1].instructor); // "Jane Smith"

const Lesson = () => {
  return (
    <div className="max-w-[1000px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 overflow-x-auto   text-clip no-scrollbar pt-20">
        {courses.map((item) => (
          <div key={item.subject} className=" w-auto bg-transparent  shadow-lg">
            <div className="">
              <Image
                src="/subjects/math.png"
                alt=""
                width={500}
                height={500}
                className="rounded-t-lg  w-full h-40 object-cover"
              />
              <div className="p-5  ">
                <span className="flex  pt-5 items-center">
                  <h2 className="font-semibold text-lg text-lmsBlack">
                    {item.title}
                  </h2>
                </span>

               
                <div className="flex justify justify-between pt-4">
                  <div className="flex gap-2">
                    <div className="w-10 h-10 flex justify-center items-center text-center rounded-full bg-red-500">
                      J
                    </div>
                    <div className="flex flex-col justify-between text-lmsBlack font-thin">
                      <p className="font-semibold">{item.instructor}</p>
                      <p className="text-sm">{item.duration}</p>
                    </div>
                  </div>
                  <div className="flex p-1 text-xs items-center gap-2 text-red-600">
                    <FaRegClock/>
                  <p>5 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Rate/>
    </div>
  );
};

export default Lesson;
