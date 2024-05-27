
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Rating from "react-rating";

const CompletedTestModal = ({ openModal, setOpenModal }) => {
  return (
    <>
      {openModal && (
        <div
          className="fixed z-[1000] overflow-y-auto top-20 w-full left-0 "
          id="modal"
        >
          <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-lmsBlack opacity-75" />
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-auto">
              &#8203;
            </span>
            <div
              className="inline-block align-center  bg-white rounded-[30px] text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-md "
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className=" top-20">
                <div>
                  <div className="bg-white z-50 overflow-hidden shadow-xl transform transition-all max-w-md ">
                    {/* <div className="relative">
            <div className="absolute top-3 right-5">
              <FaWindowClose className="text-xl text-black cursor-pointer " />
            </div>
          </div> */}
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="flex justify-center">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 items-center flex flex-col justify-center gap-y-4">
                          <Image
                            className="w-60 h-52 "
                            src="/modal-img.png"
                            width={500}
                            height={500}
                            alt="modal image"
                          />
                          <h3 className="text-2xl text-center leading-6  text-lmsBlack font-semibold">
                            Test Completed
                          </h3>
                          <p className="text-lmsBlack font-thin text-lg">
                            You have completed your Test. Please Write a Review
                          </p>
                          <Rating
                            initialRating={2.5}
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
                                className="fill-yellow-500 text-xl"
                              >
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                              </svg>
                            }
                          />

                          <div className="mt-2">
                            <Link
                              href="/dashboard"
                              className="flex items-center gap-x-2 rounded-[30px] h-16 px-4 text-lmsWhite text-xl font-thin bg-lmsRed w-full"
                            >
                              Go back to Home{" "}
                              <span className="bg-lmsWhite flex justify-center items-center rounded-full p-2 w-10 h-10">
                                {" "}
                                <svg
                                  width="43"
                                  height="35"
                                  viewBox="0 0 43 35"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M2.49119 19.9599H33.6308L23.0535 30.4197C22.1197 31.3723 22.1394 32.8951 23.0831 33.8356C24.0341 34.7688 25.574 34.7883 26.5374 33.8648L41.3204 19.246C41.7836 18.7904 42.0423 18.1716 42.0423 17.5332V17.5235C42.0423 17.2092 41.9758 16.8851 41.8501 16.5903C41.7245 16.2955 41.5422 16.0299 41.3204 15.8009L26.5374 1.18209C25.5642 0.258667 24.0341 0.278159 23.0831 1.21132C22.1296 2.1518 22.1197 3.67459 23.0535 4.62725L33.6308 15.087H2.49119C1.13361 15.087 0.0273438 16.181 0.0273438 17.5235C0.0273438 18.866 1.13361 19.9599 2.49119 19.9599Z"
                                    fill="#EB420E"
                                  />
                                </svg>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
            <button
              type="button"
              onClick={closeModal}
              className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            >
              Decline
            </button>
          </span>
          <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
            <button
              disabled={loading}
              onClick={handleApproveBusiness}
              className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-green-600 text-white leading-6 font-medium shadow-sm hover:text-slate-300 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            >
              {loading ? <Spinner /> : "Approve"}
            </button>
          </span>
        </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        // <div className="fixed  md:w-3/4 mx-auto lg:w-1/2 bg-white rounded shadow-lg z-50 ">
        //   <div className="  p-8">
        //     <button
        //       onClick={(e) => closeModal(e)}
        //       className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
        //     >
        //       <svg
        //         className="w-6 h-6"
        //         fill="none"
        //         stroke="currentColor"
        //         viewBox="0 0 24 24"
        //       >
        //         <path
        //           strokeLinecap="round"
        //           strokeLinejoin="round"
        //           strokeWidth="2"
        //           d="M6 18L18 6M6 6l12 12"
        //         />
        //       </svg>
        //     </button>
        //     {children}
        //   </div>
        // </div>
      )}
    </>
  );
};

export default CompletedTestModal;
