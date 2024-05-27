"use client";
import useCourses from "../../hooks/useCourses";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const SubjectDetails = ({ data }) => {
  const [play, setPlay] = useState(false);
  const [read, setRead] = useState(false);
 
  const router = useRouter();
  const { getSingleLessons, singleLessons, loading } = useCourses();
  const subject =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("singleSubject"))
        : null;
  useEffect(() => {
    getSingleLessons(subject.id);
  }, []);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  console.log(router);
  return (
    <main className="pt-16 lg:pt-24 relative">
      <div className="mx-auto max-w-[1000px] px-6 lg:px-0">
        <header className="flex flex-col gap-y-4">
          <h1 className="text-3xl font-black text-lmsBlack">{data?.subject}</h1>
          <p className="font-thin text-lg text-lmsBlack max-w-3xl">
            {data?.description !== "null"
              ? data?.description
              : "Play Video or View Pdf to Learn more"}
            {/* <span className="font-bold cursor-pointer">Read more</span> */}
          </p>
        </header>
        {play && data?.video && (
          <div
            className="fixed z-[1000] overflow-y-auto top-10 w-full left-0 "
            id="modal"
          >
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div
                  className="absolute inset-0 bg-gray-500 opacity-75 z-[1000]"
                  onClick={() => setPlay(false)}
                />
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-auto">
                &#8203;
              </span>
              <div
                className="inline-block align-center  bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <ReactPlayer url={`${baseUrl}/${data?.video}`} controls />
              </div>
            </div>
          </div>
        )}
        {read && data?.doc && (
          <div
            className="fixed z-[1000] overflow-y-auto top-10 w-full left-0 "
            id="modal"
          >
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div
                  className="absolute inset-0 bg-gray-500 opacity-75 z-[1000]"
                  onClick={() => setRead(false)}
                />
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-auto">
                &#8203;
              </span>
              <div
                className="inline-block align-center  bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <iframe
                  width={500}
                  height={500}
                  src={`${baseUrl}/${data?.doc}`}
                  className="lg:w-[800px] w-full h-[600px] lg:h-[700px]"
                  title="Sample Document"
                />
              </div>
            </div>
          </div>
        )}

        <div className="max-w-lg grid grid-cols-2 gap-4 pt-5">
          <span className=" flex gap-2 items-center">
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.8135 18.4438C33.8135 26.9279 26.9278 33.8136 18.4436 33.8136C9.95943 33.8136 3.07373 26.9279 3.07373 18.4438C3.07373 9.95959 9.95943 3.07388 18.4436 3.07388C26.9278 3.07388 33.8135 9.95959 33.8135 18.4438Z"
                stroke="#EB420E"
                strokeWidth="2.71233"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24.1459 23.3315L19.3812 20.488C18.5513 19.9962 17.875 18.8127 17.875 17.8444V11.5428"
                stroke="#EB420E"
                strokeWidth="2.71233"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-lmsRed text-lg">{`${data?.duration} hours`}</p>
          </span>
          <span className=" flex gap-2 items-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6125 15.6124C19.2052 15.6124 22.1176 12.7 22.1176 9.10729C22.1176 5.51462 19.2052 2.60219 15.6125 2.60219C12.0199 2.60219 9.10742 5.51462 9.10742 9.10729C9.10742 12.7 12.0199 15.6124 15.6125 15.6124Z"
                stroke="#111624"
                strokeWidth="2.7551"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.788 28.6224C26.788 23.5875 21.7791 19.5153 15.6123 19.5153C9.44545 19.5153 4.43652 23.5875 4.43652 28.6224"
                stroke="#111624"
                strokeWidth="2.7551"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-[#111624] text-lg">2000 + Students</p>
          </span>
          <span className=" flex gap-2 items-center">
            <svg
              width="36"
              height="37"
              viewBox="0 0 36 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_18_9137)">
                <mask id="path-1-inside-1_18_9137" fill="white">
                  <path d="M35.043 9.72826C34.7572 9.53481 34.3942 9.49571 34.0737 9.62384L24.36 13.5093V10.5895C24.36 8.78751 22.894 7.32147 21.092 7.32147H3.26808C1.46611 7.32147 0 8.78751 0 10.5895V26.1855C0 27.9875 1.46611 29.4535 3.26808 29.4535H21.092C22.894 29.4535 24.36 27.9875 24.36 26.1855V23.2657L34.0737 27.1511C34.1984 27.201 34.3294 27.2255 34.4599 27.2255C34.6648 27.2255 34.8684 27.1649 35.043 27.0467C35.3288 26.8532 35.5 26.5306 35.5 26.1855V10.5895C35.5 10.2444 35.3288 9.92178 35.043 9.72826ZM22.2799 26.1855C22.2799 26.8405 21.747 27.3734 21.092 27.3734H3.26808C2.61306 27.3734 2.08008 26.8405 2.08008 26.1855V10.5895C2.08008 9.93447 2.61306 9.40155 3.26808 9.40155H21.092C21.747 9.40155 22.2799 9.93447 22.2799 10.5895V26.1855ZM33.4199 24.6494L24.36 21.0254V15.7496L33.4199 12.1256V24.6494Z" />
                </mask>
                <path
                  d="M35.043 9.72826C34.7572 9.53481 34.3942 9.49571 34.0737 9.62384L24.36 13.5093V10.5895C24.36 8.78751 22.894 7.32147 21.092 7.32147H3.26808C1.46611 7.32147 0 8.78751 0 10.5895V26.1855C0 27.9875 1.46611 29.4535 3.26808 29.4535H21.092C22.894 29.4535 24.36 27.9875 24.36 26.1855V23.2657L34.0737 27.1511C34.1984 27.201 34.3294 27.2255 34.4599 27.2255C34.6648 27.2255 34.8684 27.1649 35.043 27.0467C35.3288 26.8532 35.5 26.5306 35.5 26.1855V10.5895C35.5 10.2444 35.3288 9.92178 35.043 9.72826ZM22.2799 26.1855C22.2799 26.8405 21.747 27.3734 21.092 27.3734H3.26808C2.61306 27.3734 2.08008 26.8405 2.08008 26.1855V10.5895C2.08008 9.93447 2.61306 9.40155 3.26808 9.40155H21.092C21.747 9.40155 22.2799 9.93447 22.2799 10.5895V26.1855ZM33.4199 24.6494L24.36 21.0254V15.7496L33.4199 12.1256V24.6494Z"
                  fill="#060302"
                />
                <path
                  d="M35.043 9.72826L36.2138 7.99911L36.2135 7.99892L35.043 9.72826ZM34.0737 9.62384L33.2984 7.68485L33.2981 7.68496L34.0737 9.62384ZM24.36 13.5093H22.2718V16.5937L25.1355 15.4482L24.36 13.5093ZM24.36 23.2657L25.1355 21.3268L22.2718 20.1813V23.2657H24.36ZM34.0737 27.1511L33.2981 29.09L33.2983 29.0901L34.0737 27.1511ZM35.043 27.0467L33.8722 25.3176L33.8722 25.3176L35.043 27.0467ZM33.4199 24.6494L32.6444 26.5882L35.5082 27.7338V24.6494H33.4199ZM24.36 21.0254H22.2718V22.4392L23.5844 22.9642L24.36 21.0254ZM24.36 15.7496L23.5844 13.8107L22.2718 14.3358V15.7496H24.36ZM33.4199 12.1256H35.5082V9.04122L32.6444 10.1867L33.4199 12.1256ZM36.2135 7.99892C35.354 7.41714 34.262 7.29957 33.2984 7.68485L34.8489 11.5628C34.5263 11.6918 34.1604 11.6525 33.8725 11.4576L36.2135 7.99892ZM33.2981 7.68496L23.5845 11.5704L25.1355 15.4482L34.8492 11.5627L33.2981 7.68496ZM26.4482 13.5093V10.5895H22.2718V13.5093H26.4482ZM26.4482 10.5895C26.4482 7.63421 24.0473 5.23324 21.092 5.23324V9.40971C21.7407 9.40971 22.2718 9.94081 22.2718 10.5895H26.4482ZM21.092 5.23324H3.26808V9.40971H21.092V5.23324ZM3.26808 5.23324C0.312865 5.23324 -2.08824 7.63415 -2.08824 10.5895H2.08824C2.08824 9.94087 2.61935 9.40971 3.26808 9.40971V5.23324ZM-2.08824 10.5895V26.1855H2.08824V10.5895H-2.08824ZM-2.08824 26.1855C-2.08824 29.1408 0.312866 31.5417 3.26808 31.5417V27.3653C2.61935 27.3653 2.08824 26.8341 2.08824 26.1855H-2.08824ZM3.26808 31.5417H21.092V27.3653H3.26808V31.5417ZM21.092 31.5417C24.0473 31.5417 26.4482 29.1408 26.4482 26.1855H22.2718C22.2718 26.8342 21.7407 27.3653 21.092 27.3653V31.5417ZM26.4482 26.1855V23.2657H22.2718V26.1855H26.4482ZM23.5845 25.2046L33.2981 29.09L34.8492 25.2123L25.1355 21.3268L23.5845 25.2046ZM33.2983 29.0901C33.6728 29.2398 34.0672 29.3138 34.4599 29.3138V25.1373C34.5916 25.1373 34.7239 25.1622 34.8491 25.2122L33.2983 29.0901ZM34.4599 29.3138C35.0759 29.3138 35.6884 29.1316 36.2138 28.7758L33.8722 25.3176C34.0484 25.1982 34.2538 25.1373 34.4599 25.1373V29.3138ZM36.2138 28.7759C37.0732 28.194 37.5882 27.2238 37.5882 26.1855H33.4118C33.4118 25.8375 33.5844 25.5124 33.8722 25.3176L36.2138 28.7759ZM37.5882 26.1855V10.5895H33.4118V26.1855H37.5882ZM37.5882 10.5895C37.5882 9.55135 37.0732 8.58103 36.2138 7.99911L33.8722 11.4574C33.5844 11.2625 33.4118 10.9374 33.4118 10.5895H37.5882ZM20.1917 26.1855C20.1917 25.6872 20.5937 25.2852 21.092 25.2852V29.4617C22.9003 29.4617 24.3682 27.9938 24.3682 26.1855H20.1917ZM21.092 25.2852H3.26808V29.4617H21.092V25.2852ZM3.26808 25.2852C3.7662 25.2852 4.16831 25.687 4.16831 26.1855H-0.00815724C-0.00815724 27.994 1.45992 29.4617 3.26808 29.4617V25.2852ZM4.16831 26.1855V10.5895H-0.00815724V26.1855H4.16831ZM4.16831 10.5895C4.16831 11.0879 3.76621 11.4898 3.26808 11.4898V7.31331C1.45992 7.31331 -0.00815724 8.78101 -0.00815724 10.5895H4.16831ZM3.26808 11.4898H21.092V7.31331H3.26808V11.4898ZM21.092 11.4898C20.5937 11.4898 20.1917 11.0878 20.1917 10.5895H24.3682C24.3682 8.78117 22.9003 7.31331 21.092 7.31331V11.4898ZM20.1917 10.5895V26.1855H24.3682V10.5895H20.1917ZM34.1955 22.7105L25.1356 19.0865L23.5844 22.9642L32.6444 26.5882L34.1955 22.7105ZM26.4482 21.0254V15.7496H22.2718V21.0254H26.4482ZM25.1356 17.6885L34.1955 14.0645L32.6444 10.1867L23.5844 13.8107L25.1356 17.6885ZM31.3317 12.1256V24.6494H35.5082V12.1256H31.3317Z"
                  fill="#A2BF00"
                  mask="url(#path-1-inside-1_18_9137)"
                />
              </g>
              <defs>
                <clipPath id="clip0_18_9137">
                  <rect
                    width="35.5"
                    height="35.5"
                    fill="white"
                    transform="translate(0 0.637695)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p className="text-lmsGreen text-lg">
              {data?.video ? `1 Lessons` : "N/A"}
            </p>
          </span>
          <span className=" flex gap-2 items-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_18_9127)">
                <path
                  d="M6.43297 20.4198L6.76026 20.4759L0.111163 11.9171C-0.153939 12.7343 0.0630195 13.6134 0.677631 14.2124L6.14786 19.5444C6.38107 19.772 6.48799 20.0997 6.43297 20.4198ZM6.43297 20.4198L5.14184 27.9495C4.99679 28.7955 5.33754 29.6339 6.03219 30.1391C6.7262 30.645 7.62968 30.7106 8.39059 30.3098L8.23655 30.0166L8.23645 30.0167L8.23624 30.0168L8.2323 30.0189C7.58463 30.3551 6.82371 30.3032 6.22847 29.8717L6.22758 29.871L6.22749 29.871C6.22743 29.8709 6.22737 29.8709 6.22731 29.8708C5.63232 29.4382 5.34633 28.7288 5.46877 28.0072L5.46904 28.0057L6.76013 20.4767C6.76014 20.4767 6.76015 20.4766 6.76016 20.4765C6.76019 20.4764 6.76022 20.4762 6.76024 20.476L6.43297 20.4198Z"
                  fill="#060302"
                  stroke="#3787FF"
                  strokeWidth="1.83673"
                />
              </g>
              <defs>
                <clipPath id="clip0_18_9127">
                  <rect width="31.2245" height="31.2245" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="text-lmsBlue text-lg">4.7 </p>
          </span>
        </div>
        <div className="flex gap-2 pt-10 items-center gap-x-4">
          <span>
            {" "}
            <Image
              className="w-12 h-12 rounded-full object-cover"
              src="/subject/avatar.jpg"
              width={50}
              height={50}
              alt="Subject Image"
            />
          </span>
          <span className="flex flex-col justify-between items-start">
            <p className="text-lmsBlack text-lg font-semibold">
              {data?.instructorName}
            </p>
            <span className="flex flex-row items-center gap-8">
              <p className="text-lmsBlack text-sm font-thin">Instructor</p>
              <p className="text-lmsBlack text-sm font-thin">Reviews</p>
            </span>
          </span>
        </div>
      </div>
      <div className="h-screen relative bg-blue-200 bg-opacity-25 mt-10 flex flex-col justify-center items-center">
        <span className="absolute top-0 right-0">
          <Image
            className="w-auto h-auto rounded-full object-cover"
            src="/subjects/penguin.png"
            width={200}
            height={200}
            alt="Subject Image"
          />
        </span>
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <div className="flex flex-row gap-x-8 justify-center items-center cursor-pointer">
            <span onClick={() => setPlay(true)}>
              <Image
                className="w-40 h-auto rounded-full object-cover"
                src="/subjects/play.png"
                width={200}
                height={200}
                alt="Subject Image"
              />
            </span>
            <span onClick={() => setRead(true)}>
              <Image
                className="w-40 h-auto rounded-full object-cover"
                src="/subject/pdf.jpg"
                width={200}
                height={200}
                alt="Subject Image"
              />
            </span>
          </div>

          <Image
            className="w-auto h-auto rounded-full object-cover pt-5"
            src="/subjects/button.png"
            width={200}
            height={200}
            alt="Subject Image"
          />
        </div>
        <div className="absolute bottom-0 left-0">
          <span className="flex relative">
            <Image
              className="w-60 h-60 rounded-full object-cover absolute bottom-0 left-0"
              src="/subjects/animals.png"
              width={100}
              height={100}
              alt="Subject Image"
            />
            <Image
              className="w-auto h-auto rounded-full object-cover z-20"
              src="/subjects/stars.png"
              width={500}
              height={500}
              alt="Subject Image"
            />
          </span>
        </div>
      </div>
    </main>
  );
};

export default SubjectDetails;
