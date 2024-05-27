import React from "react";
import Rating from "react-rating";

const Rate = () => {
  return (
    <section className="mt-16">
      <header className="flex flex-col gap-y-4 text-lmsBlack">
        <h2 className="text-2xl font-semibold">Rating and reviews</h2>
        <p className="text-lg font-thin">
          Reviews are public and includes your account info.
        </p>
      </header>
      <div className="pt-5">
        <Rating
          initialRating={2.5}
          emptySymbol={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-lmsWhite text-3xl"
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
              className="fill-lmsRed text-3xl"
            >
              <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
            </svg>
          }
        />
        <div className="group w-full pt-10">
          <div className="relative flex items-center">
            <input
              id="10"
              type="text"
              placeholder="Describe your experience (optional)"
              className="peer relative h-16 w-full rounded-md bg-lmsWhite text-lmsBlack font-medium pl-4 pr-20  outline-none shadow-lg transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg"
            />
            <button className="absolute right-2 h-7 w-16 rounded-md bg-lmsBlue text-xs font-semibold text-white transition-all duration-200 ease-in-out group-focus-within:bg-blue-400 group-focus-within:hover:bg-blue-600">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rate;
