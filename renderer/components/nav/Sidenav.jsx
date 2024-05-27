/* eslint-disable no-unused-vars */

import { useRef, useState, useEffect, useContext } from "react";
import Link from "next/link";
// import { userouter.pathname } from "next/navigation";
import Image from "next/image";
import { SidebarContext } from "../../context/sidebar.context";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/auth.context";

function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
  const [storedSidebarExpanded, setStoredSidebarExpanded] = useState(true);
const {logout}= useContext(AuthContext)
  //   useEffect(() => {
  //     setIsClient(true);
  //   }, []);

  // const router.pathname = userouter.pathname();
  const router = useRouter();
  const trigger = useRef(null);
  const sidebar = useRef(null);

  useEffect(() => {
    let value;
    // Get the value from local storage if it exists
    value = localStorage.getItem("sidebar-expanded");
    setStoredSidebarExpanded(value);
  }, []);

  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };

    typeof document !== "undefined" &&
      document.addEventListener("click", clickHandler);
    return () =>
      typeof document !== "undefined" &&
      document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      typeof document !== "undefined" &&
        document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      typeof document !== "undefined" &&
        document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  //   useEffect(() => {
  //     setIsClient(true);
  //   }, []);
  // if (!router.pathname.includes("dashboard")) return null;
  // console.log(router.pathname);
  if (!router.pathname.includes("dashboard") === "/") return null;
  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed  bg-opacity-30 z-50  transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={` flex flex-col absolute z-[1000] left-0 top-0  no-scrollbar  h-screen overflow-y-scroll  w-60 lg:w-20 lg:sidebar-expanded:!w-60  shrink-0  bg-lmsWhite shadow-lg bg-center bg-no-repeat object-cover transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-end items-center mt-5  ">
          {/* Close button */}
          <button
         
            className=" text-black 0"
            onClick={(e) => {
              e.preventDefault()
              console.log("first")
              setSidebarOpen(false)}}
        
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-10 h-6 fill-lmsRed"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
        </div>

        {/* Links */}
        <div className="space-y-8 p-4 lg:mt-10">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block text-gray-400 font-thin text-md ">
                Manage
              </span>
            </h3>
            <ul className="space-y-2">
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer ${
                  router.pathname === "/dashboard" && "bg-lmsRed "
                }`}
              >
                <div
                  onClick={() => router.push("/dashboard")}
                  className={`block text-lmsBlack truncate transition duration-150 cursor-pointer ${
                    router.pathname === "/dashboard"
                      ? "hover:text-blueMain"
                      : "hover:text-white "
                  }`}
                >
                  <div
                    className="flex items-center"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 h-6 w-6"
                      height="1em"
                      viewBox="0 0 576 512"
                    >
                      <path
                        className={`fill-current ${
                          router.pathname === "/dashboard"
                            ? "text-lmsWhite"
                            : "text-lmsBlack"
                        }`}
                        d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                      />
                    </svg>

                    <span
                      className={`   font-semibold ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100  duration-200  ${
                        router.pathname === "/dashboard"
                          ? "text-lmsWhite"
                          : "text-lmsBlack"
                      } `}
                    >
                      <p className="text-sm">Home</p>
                    </span>
                  </div>
                </div>
              </li>

              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer ${
                  router.pathname.includes("subjects") && "bg-lmsRed "
                }`}
              >
                <div
                  onClick={() => router.push("/dashboard/subjects")}
                  className={`block text-lmsBlack truncate transition duration-150 cursor-pointer ${
                    router.pathname.includes("subjects")
                      ? "hover:text-lmsBlack"
                      : "hover:text-white"
                  }`}
                >
                  <div
                    className="flex items-center"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <svg
                      className="shrink-0 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 640 512"
                    >
                      <path
                        className={`fill-current ${
                          router.pathname.includes("subjects")
                            ? "text-lmsWhite"
                            : "text-lmsBlack"
                        }`}
                        d="M128 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm-24-80h192v48h48v-48h192v48h48v-57.59c0-21.17-17.23-38.41-38.41-38.41H344v-64h40c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H256c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h40v64H94.41C73.23 224 56 241.23 56 262.41V320h48v-48zm264 80h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm240 0h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z"
                      />
                    </svg>

                    <span
                      className={`text-sm   font-semibold ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100  duration-200  ${
                        router.pathname.includes("subjects")
                          ? "text-lmsWhite"
                          : "text-lmsBlack"
                      } `}
                    >
                      <p className="text-sm">Subjects</p>
                    </span>
                  </div>
                </div>
              </li>

              {
                <li
                  className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer ${
                    router.pathname.includes("profile") && "bg-lmsRed "
                  }`}
                >
                  <div
                    onClick={() => router.push("/dashboard/profile")}
                
                    className={`block text-lmsBlack truncate transition duration-150 cursor-pointer ${
                      router.pathname.includes("profile")
                        ? "hover:text-lmsBlack"
                        : "hover:text-white"
                    }`}
                  >
                    <div
                      className="flex items-center"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0 h-6 w-6"
                        height="1em"
                        viewBox="0 0 448 512"
                      >
                        <path
                          className={`fill-current ${
                            router.pathname.includes("profile")
                              ? "text-lmsWhite"
                              : "text-lmsBlack"
                          }`}
                          d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                        />
                      </svg>

                      <span
                        className={`text-sm   font-semibold ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100  duration-200  ${
                          router.pathname.includes("profile")
                            ? "text-lmsWhite"
                            : "text-lmsBlack"
                        } `}
                      >
                        <p className="text-sm">Profile</p>
                      </span>
                    </div>
                  </div>
                </li>
              }
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer ${
                  router.pathname.includes("tests") && "bg-lmsRed "
                }`}
              >
                <div
                  onClick={() => router.push("/dashboard/tests")}
                 
                  className={`block text-lmsBlack truncate transition duration-150 cursor-pointer ${
                    router.pathname.includes("test")
                      ? "hover:text-lmsBlack"
                      : "hover:text-white"
                  }`}
                >
                  <div
                    className="flex items-center"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <svg
                      className="shrink-0 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path
                        className={`fill-current ${
                          router.pathname.includes("test")
                            ? "text-lmsWhite"
                            : "text-lmsBlack"
                        }`}
                        d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
                      />
                    </svg>

                    <span
                      className={`text-sm   font-semibold ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100  duration-200  ${
                        router.pathname.includes("test")
                          ? "text-lmsWhite"
                          : "text-lmsBlack"
                      } `}
                    >
                      <p className="text-sm">Test</p>
                    </span>
                  </div>
                </div>
              </li>

              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer ${
                  router.pathname.includes("notifications") && "bg-lmsRed "
                }`}
              >
                <div
                  onClick={() => router.push("/dashboard/notifications")}
              
                  className={`block text-lmsBlack truncate transition duration-150 cursor-pointer ${
                    router.pathname.includes("notifications")
                      ? "hover:text-lmsBlack"
                      : "hover:text-white"
                  }`}
                >
                  <div
                    className="flex items-center"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <svg
                      className="shrink-0 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path
                        className={`fill-current ${
                          router.pathname.includes("notifications")
                            ? "text-lmsWhite"
                            : "text-lmsBlack"
                        }`}
                        d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                      />
                    </svg>
                    <span
                      className={`text-sm   font-semibold ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100  duration-200  ${
                        router.pathname.includes("notifications")
                          ? "text-lmsWhite"
                          : "text-lmsBlack"
                      } `}
                    >
                      <p className="text-sm">Notifications</p>
                    </span>
                  </div>
                </div>
              </li>
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer ${
                  router.pathname.includes("contact") && "bg-lmsRed "
                }`}
              >
                <div
                  onClick={() => router.push("/contact")}
                
                  className={`block text-lmsBlack truncate transition duration-150 cursor-pointer ${
                    router.pathname.includes("contact")
                      ? "hover:text-lmsBlack"
                      : "hover:text-white"
                  }`}
                >
                  <div
                    className="flex items-center"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <svg
                      className="shrink-0 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512"
                    >
                      <path
                        className={`fill-current ${
                          router.pathname.includes("contact")
                            ? "text-lmsWhite"
                            : "text-lmsBlack"
                        }`}
                        d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"
                      />
                    </svg>

                    <span
                      className={`text-sm   font-semibold ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100  duration-200  ${
                        router.pathname.includes("contact")
                          ? "text-lmsWhite"
                          : "text-lmsBlack"
                      } `}
                    >
                      <p className="text-sm">Contact Us</p>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="  p-4 mt-auto ">
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden  text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block text-gray-400 font-thin text-md ">
                PREFERENCE
              </span>
            </h3>
            <ul className="mt-3 space-y-2">
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer ${
                  router.pathname.includes("logout") && "bg-lmsRed "
                }`}
              >
                <div
                  onClick={() => logout()}
             
                  className={`block text-lmsBlack truncate transition duration-150 cursor-pointer ${
                    router.pathname.includes("logout")
                      ? "hover:text-lmsBlack"
                      : "hover:text-white"
                  }`}
                >
                  <div
                    className="flex items-center"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <svg
                      className="shrink-0 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path
                        className={`fill-current ${
                          router.pathname.includes("logout")
                            ? "text-lmsWhite"
                            : "text-lmsBlack"
                        }`}
                        d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"
                      />
                    </svg>

                    <span
                      className={`text-sm   font-semibold ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100  duration-200  ${
                        router.pathname.includes("logout")
                          ? "text-lmsWhite"
                          : "text-lmsBlack"
                      } `}
                    >
                      <p className="text-sm">Logout</p>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
