import Image from "next/image";
import React from "react";
import Pagination from "../Pagination";
import Rating from "react-rating";
import Rate from "./Rate";

const Reviews = () => {
  return (
    <div className="bg-blue-200 bg-opacity-25 my-10">
      <section className="mx-auto max-w-[1020px] py-10">
      <Rate/>
        <h1 className="font-bold pb-5 text-2xl text-center mt-5">
          <span className="text-lmsRed ">Here</span> is what learners are saying
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 pb-5 px-6 lg:px-0">
          <div className="flex flex-col gap-4 bg-lmsBlue p-6 rounded-[30px]">
             <Rating
              initialRating={2.5}
              readonly
              emptySymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-lmsWhite text-xl"
                  height="1em"
                  viewBox="0 0 576 512"
                  stroke="white"
                >
                  <path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z" />
                </svg>
              }
              fullSymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  className="fill-lmsWhite text-xl"
                >
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                </svg>
              }
            />
            <h1 className="text-lmsWhite font-medium text-xl pt-5 ">
              Best Course and beneficial
            </h1>
            <div className="flex justify justify-between pt-10">
              <div className="flex gap-2">
                <div className="w-10 h-10 flex justify-center items-center text-center rounded-full bg-red-500">
                  J
                </div>
                <div className="flex flex-col justify-between text-lmsWhite font-thin">
                  <p>Jess Hopkins</p>
                  <p>2 hours ago</p>
                </div>
              </div>
              <div className="flex p-1 gap-1 text-orange-300">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-half"></ion-icon>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 bg-lmsBlue p-6 rounded-[30px]">
            <Rating
              initialRating={2.5}
              readonly
              emptySymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-lmsWhite text-xl"
                  height="1em"
                  viewBox="0 0 576 512"
                  stroke="white"
                >
                  <path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z" />
                </svg>
              }
              fullSymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  className="fill-lmsWhite text-xl"
                >
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                </svg>
              }
            />
            <h1 className="text-lmsWhite font-medium text-xl pt-5 ">
              Best Course and beneficial
            </h1>
            <div className="flex justify justify-between pt-10">
              <div className="flex gap-2">
                <div className="w-10 h-10 flex justify-center items-center text-center rounded-full bg-red-500">
                  J
                </div>
                <div className="flex flex-col justify-between text-lmsWhite font-thin">
                  <p>Jess Hopkins</p>
                  <p>2 hours ago</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-lmsBlue p-6 rounded-[30px]">
             <Rating
              initialRating={2.5}
              readonly
              emptySymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-lmsWhite text-xl"
                  height="1em"
                  viewBox="0 0 576 512"
                  stroke="white"
                >
                  <path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z" />
                </svg>
              }
              fullSymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  className="fill-lmsWhite text-xl"
                >
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                </svg>
              }
            />
            <h1 className="text-lmsWhite font-medium text-xl pt-5 ">
              Best Course and beneficial
            </h1>
            <div className="flex justify justify-between pt-10">
              <div className="flex gap-2">
                <div className="w-10 h-10 flex justify-center items-center text-center rounded-full bg-red-500">
                  J
                </div>
                <div className="flex flex-col justify-between text-lmsWhite font-thin">
                  <p>Jess Hopkins</p>
                  <p>2 hours ago</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-lmsBlue p-6 rounded-[30px]">
             <Rating
              initialRating={2.5}
              readonly
              emptySymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-lmsWhite text-xl"
                  height="1em"
                  viewBox="0 0 576 512"
                  stroke="white"
                >
                  <path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z" />
                </svg>
              }
              fullSymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  className="fill-lmsWhite text-xl"
                >
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                </svg>
              }
            />
            <h1 className="text-lmsWhite font-medium text-xl pt-5 ">
              Best Course and beneficial
            </h1>
            <div className="flex justify justify-between pt-10">
              <div className="flex gap-2">
                <div className="w-10 h-10 flex justify-center items-center text-center rounded-full bg-red-500">
                  J
                </div>
                <div className="flex flex-col justify-between text-lmsWhite font-thin">
                  <p>Jess Hopkins</p>
                  <p>2 hours ago</p>
                </div>
              </div>
              <div className="flex p-1 gap-1 text-orange-300">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-half"></ion-icon>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-lmsBlue p-6 rounded-[30px]">
             <Rating
              initialRating={2.5}
              readonly
              emptySymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-lmsWhite text-xl"
                  height="1em"
                  viewBox="0 0 576 512"
                  stroke="white"
                >
                  <path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z" />
                </svg>
              }
              fullSymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  className="fill-lmsWhite text-xl"
                >
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                </svg>
              }
            />
            <h1 className="text-lmsWhite font-medium text-xl pt-5 ">
              Best Course and beneficial
            </h1>
            <div className="flex justify justify-between pt-10">
              <div className="flex gap-2">
                <div className="w-10 h-10 flex justify-center items-center text-center rounded-full bg-red-500">
                  J
                </div>
                <div className="flex flex-col justify-between text-lmsWhite font-thin">
                  <p>Jess Hopkins</p>
                  <p>2 hours ago</p>
                </div>
              </div>
              <div className="flex p-1 gap-1 text-orange-300">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-half"></ion-icon>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-lmsBlue p-6 rounded-[30px]">
             <Rating
              initialRating={2.5}
              readonly
              emptySymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-lmsWhite text-xl"
                  height="1em"
                  viewBox="0 0 576 512"
                  stroke="white"
                >
                  <path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z" />
                </svg>
              }
              fullSymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  className="fill-lmsWhite text-xl"
                >
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                </svg>
              }
            />
            <h1 className="text-lmsWhite font-medium text-xl pt-5 ">
              Best Course and beneficial
            </h1>
            <div className="flex justify justify-between pt-10">
              <div className="flex gap-2">
                <div className="w-10 h-10 flex justify-center items-center text-center rounded-full bg-red-500">
                  J
                </div>
                <div className="flex flex-col justify-between text-lmsWhite font-thin">
                  <p>Jess Hopkins</p>
                  <p>2 hours ago</p>
                </div>
              </div>
              <div className="flex p-1 gap-1 text-orange-300">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-half"></ion-icon>
              </div>
            </div>
          </div>
        </div>
        <Pagination />
      </section>
    </div>
  );
};

export default Reviews;
