import Image from "next/image";
import React, { useEffect } from "react";
import useCourses from "../../hooks/useCourses"
const OngoingClasses = () => {
  const subjects = [
    {
      subject: "Mathematics",
      class: "Basic 5",
      lessons: " 30",
      rate: 70,
      id: 1,
      color: "#08A5D3",
    },
    {
      subject: "English Language",
      class: "Basic 7",
      lessons: " 50",
      rate: 50,
      id: 2,
      color: "#A2BF00",
    },
    {
      subject: "Basic Science",
      class: "Basic 7",
      lessons: " 10",
      rate: 60,
      id: 3,
      color: "#EB420E",
    },
    {
      subject: "History",
      class: "Basic 7",
      lessons: " 15",
      rate: 90,
      id: 4,
      color: "#FDDF2F",
    },
  ];

  const {getAllSubjects,allSubjects,loading}=useCourses()
  useEffect(()=>{
getAllSubjects()
  },[])
  function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  
    if (red === 255 && green === 255 && blue === 255) {
      return getRandomColor(); // Retry if the color is white
    }
  
    return `rgb(${red},${green},${blue})`;
  }
  const randomColors = allSubjects?.map(() => getRandomColor());
  console.log(allSubjects)
  return (
    <>
      <h1 className="text-3xl text-lmsBlack font-semibold">
       Ongoing Courses
      </h1>
      <div className="flex gap-x-4 overflow-x-auto  text-clip no-scrollbar pt-10">
      {(allSubjects && !loading) && allSubjects.map((item,index) => (
          <div
            key={item.id}
            style={{ backgroundColor: randomColors[index] }}
            className=" min-w-[376px] p-4 bg-lmsWhite rounded-[30px]  shadow-lg"
          >
            <div className="">
              <div>
                <span className="flex justify-between pt-2 items-center">
                  <h2 className="font-semibold text-lg text-lmsWhite">
                    {item?.title}
                  </h2>
            
                </span>
                {/* <span className="flex justify-between pt-2 items-center">
                  <h2 className="font-thin text-lg text-lmsWhite">
                    {`${item.lessons} lessons`}
                  </h2>
                  <span className="font-thin text-lg text-lmsWhite">
                  {`${item.lessons} lessons`}
                  </span>
                </span> */}
                <p className="text-lmsBlack pt-3">{item.desc}</p>
                <div className="bg-lmsWhite h-2">
                  <div
                    className="bg-lmsBlack h-2 text-white"
                    style={{ width: `80%` }}
                  >
                    {/* {progress}% */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
         {loading && (
          <div className="flex  justify-center  w-full pt-5">
            <svg
              aria-hidden="true"
              className="w-10 h-10   text-gray-200 animate-spin  fill-lmsRed"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        )}
      </div>
    </>
  );
};

export default OngoingClasses;
