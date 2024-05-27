"use client";
import CompletedTestModal from "../../../../components/modals/CompletedTestModal";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaCalendarTimes, FaRegClock, FaStopwatch } from "react-icons/fa";

function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  if (red === 255 && green === 255 && blue === 255) {
    return getRandomColor(); // Retry if the color is white
  }

  return `rgb(${red},${green},${blue})`;
}

const TestDetails = () => {
  const data =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("questions"))
      : null;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = data?.questions[currentQuestionIndex];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < data?.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  const handleForwardQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  const initialTime = 600; // 10 minutes in seconds
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleSelectAnswer = (option) => {
    console.log("opt", option);
    setSelectedAnswer(option);
  };

  const randomColors = data?.questions.map(() => getRandomColor());
console.log(data?.questions)
  const [openModal, setOpenModal] = useState(false);
  
  return (
    <section className="w-full ">
      <div className=" pt-10 ">
        <header className="flex justify-between items-center max-w-[1320px] mx-auto px-10">
          <span className="flex flex-col ">
            <h1 className="text-3xl text-lmsBlack font-semibold">
              {data?.course}
            </h1>
            <p className="text-lg text-gray-400 font-thin">Achonye Richard</p>
          </span>
          <div
            className={` p-2 rounded-lg text-lmsWhite px-10 ${
              time > 0 ? " bg-lmsBlack" : "bg-lmsRed"
            }`}
          >
            {" "}
            {time > 0 ? (
              <span className="flex items-center gap-2">
                <FaStopwatch className="ringing" />
                <p>{formatTime(time)}</p>{" "}
              </span>
            ) : (
              <p>Time's up!</p>
            )}
          </div>
        </header>
        <ul className="max-w-[1320px] mx-auto py-10 flex border-b  items-center flex-row lg:space-x-6 space-x-4   w-full overflow-y-hidden z-10 lg:overflow-x-hidden overflow-x-scroll no-scrollbar">
          {data?.questions.map((item, index) => (
            <li
              key={index}
              style={{
                borderColor: randomColors[index],
                borderWidth: "2px",
                color: randomColors[index],
              }}
              onClick={() => handleForwardQuestion(index)}
              className="p-2 w-12 h-12 flex items-center justify-center rounded-full font-bold text-xl cursor-pointer"
              // onClick={() => handleTabClick(tab)}
            >
              {index + 1}
            </li>
          ))}
        </ul>
        <main className="pt-10 bg-blue-200 bg-opacity-25 h-screen">
          <div className="max-w-[1320px] mx-auto lg:px-20 px-10">
            <h2 className="text-2xl font-semibold pb-2">
              Question {currentQuestionIndex + 1}:
            </h2>
            <p className="text-xl font-medium">{currentQuestion?.question}</p>
            <ul className="mt-10 flex flex-col gap-y-6 lg:max-w-[500px] mx-auto">
              {currentQuestion?.options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleSelectAnswer(option)}
                  className={`border border-gray-300 p-3 capitalize  cursor-pointer text-xl hover:bg-lmsBlue hover:text-lmsWhite ${
                    selectedAnswer === option
                      ? "bg-lmsBlue text-lmsWhite"
                      : "bg-lmsWhite text-lmsBlack"
                  }`}
                >
                  {`${String.fromCharCode(97 + index)}. ${option}`}
                </li>
              ))}
            </ul>
            <div className="flex justify-between pt-10 lg:pt-0">
              {currentQuestionIndex > 0 && (
                <button
                  className="w-auto bg-lmsYellow hover:bg-lmsBlue shadow-xl p-3 text-lmsWhite rounded-sm"
                  onClick={handlePrevQuestion}
                >
                  Previous Question
                </button>
              )}
              <div className="flex-grow" />
              {currentQuestionIndex < data?.questions.length - 1 && (
                <div className="flex justify-end">
                  <button
                    className="w-40 bg-lmsRed shadow-xl hover:bg-lmsBlack p-3 text-lmsWhite rounded-sm"
                    onClick={handleNextQuestion}
                  >
                    Next Question
                  </button>
                </div>
              )}
              {currentQuestionIndex === data?.questions.length - 1 && (
                <div className="flex justify-end">
                  <button
                    className="w-40 bg-lmsWhite shadow-xl  p-3 text-lmsBlack rounded-sm"
                    onClick={() => setOpenModal(true)}
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
      <CompletedTestModal openModal={openModal} setOpenModal={setOpenModal} />
    </section>
  );
};

export default TestDetails;
