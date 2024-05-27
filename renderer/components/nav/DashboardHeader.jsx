
import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebar.context";

function DashboardHeader() {
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
  const router = useRouter()

  if (!router.pathname.includes("dashboard") === "/") return null;
  return (
    <header className="sticky top-0 bg-white  border-b border-slate-200 shadow-md z-50 py-4">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px  max-w-[1320px] mx-auto">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 "
              aria-controls="sidebar"
              onClick={() => {
                console.log("sef")
                setSidebarOpen(!sidebarOpen)}}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                width="67"
                height="67"
                viewBox="0 0 67 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.75 22.3333C16.75 20.7915 17.9999 19.5417 19.5417 19.5417H47.4583C49.0001 19.5417 50.25 20.7915 50.25 22.3333C50.25 23.8751 49.0001 25.125 47.4583 25.125H19.5417C17.9999 25.125 16.75 23.8751 16.75 22.3333Z"
                  fill="#060302"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.75 33.5C16.75 31.9582 17.9999 30.7083 19.5417 30.7083H33.5C35.0418 30.7083 36.2917 31.9582 36.2917 33.5C36.2917 35.0418 35.0418 36.2917 33.5 36.2917H19.5417C17.9999 36.2917 16.75 35.0418 16.75 33.5Z"
                  fill="#060302"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.75 44.6667C16.75 43.1249 17.9999 41.875 19.5417 41.875H47.4583C49.0001 41.875 50.25 43.1249 50.25 44.6667C50.25 46.2085 49.0001 47.4583 47.4583 47.4583H19.5417C17.9999 47.4583 16.75 46.2085 16.75 44.6667Z"
                  fill="#060302"
                />
              </svg>
            </button>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center justify-end space-x-3 w-full flex-grow">
            {/* <div className="lg:flex hidden items-center gap-x-2">
              <h3 className="text-blueMain text-lg font-semibold ">
                Admin Dashboard
              </h3>
              <span className="h-2 w-2 bg-green-500 rounded-full"></span>
              <p className="text-xs text-textGray">Online</p>
            </div> */}

            <div className="relative flex justify-end gap-x-2 items-center">
              {/* <div className="relative">
              <BiSearch
                size={12}
                className="absolute top-2 left-2 md:w-4 md:h-4 text-black"
              />
              <input
                type="text"
                placeholder="Search"
                className="lg:w-60 pl-5 bg-[#E7F5FA] text-black text-xs md:text-sm py-1 md:py-1.5 px-2 md:px-8 rounded-xl outline-none"
              />
           
            </div> */}
              {/* <span className="w-7 h-7 rounded-full bg-blue-100 flex items-center">
                <Link href={"/dashboard/profile"}>
                  <Image
                    src="/nav/profile.png"
                    width={100}
                    height={50}
                    className="object-cover w-auto h-auto"
                  />
                </Link>
              </span>
              <Link href={"/dashboard/notifications"}>
                <button
                  className={` flex items-center justify-center    rounded-md`}
                >
                  <span className="sr-only">Notifications</span>
                  <svg
                    width="45"
                    height="45"
                    className="w-7 h-7"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.7571 5.18023C29.0027 4.44343 29.7991 4.04524 30.5359 4.29084L30.8246 4.38706C34.6038 5.6468 37.5693 8.61235 38.8291 12.3916L38.9253 12.6802C39.1709 13.417 38.7727 14.2134 38.0359 14.459C37.2991 14.7046 36.5027 14.3064 36.2571 13.5696L36.1609 13.281C35.1811 10.3416 32.8746 8.03503 29.9352 7.05523L29.6465 6.95901C28.9097 6.71341 28.5115 5.91702 28.7571 5.18023Z"
                      fill="#060302"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.4255 5.18023C16.1799 4.44343 15.3835 4.04524 14.6467 4.29084L14.3581 4.38706C10.5788 5.6468 7.61329 8.61235 6.35355 12.3916L6.25733 12.6802C6.01173 13.417 6.40992 14.2134 7.14672 14.459C7.88351 14.7046 8.6799 14.3064 8.9255 13.5696L9.02172 13.281C10.0015 10.3416 12.3081 8.03503 15.2475 7.05523L15.5361 6.95901C16.2729 6.71341 16.6711 5.91702 16.4255 5.18023Z"
                      fill="#060302"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.4343 8.53067C17.8262 6.08626 19.9449 4.21875 22.4997 4.21875C25.0546 4.21875 27.1733 6.08626 27.5652 8.53067C31.0675 10.0396 33.7024 13.1091 34.1338 16.9101L34.8674 23.3743C34.9664 24.2466 35.336 25.0977 35.9609 25.8318C37.2672 27.3664 37.3084 29.2955 36.4569 30.7961C35.6192 32.2722 33.9637 33.2812 31.9779 33.2812H13.0215C11.0358 33.2812 9.3803 32.2722 8.54261 30.7961C7.69105 29.2955 7.73223 27.3664 9.03856 25.8318C9.66348 25.0977 10.033 24.2466 10.1321 23.3743L10.8657 16.9101C11.2971 13.1092 13.932 10.0396 17.4343 8.53067ZM22.4997 7.03125C21.2196 7.03125 20.1819 8.069 20.1819 9.34913V9.51929C20.1819 10.1204 19.7998 10.655 19.2311 10.8497C16.1386 11.9085 13.9844 14.3713 13.6603 17.2273L12.9266 23.6914C12.7613 25.1476 12.1489 26.5169 11.1802 27.6548C10.6867 28.2346 10.6841 28.8713 10.9887 29.408C11.3071 29.9691 12.0076 30.4688 13.0215 30.4688H31.9779C32.9919 30.4688 33.6924 29.9691 34.0108 29.408C34.3153 28.8713 34.3127 28.2346 33.8193 27.6548C32.8506 26.5169 32.2381 25.1476 32.0729 23.6914L31.3392 17.2273C31.015 14.3713 28.8608 11.9085 25.7683 10.8497C25.1997 10.655 24.8176 10.1204 24.8176 9.51929V9.34913C24.8176 8.069 23.7799 7.03125 22.4997 7.03125Z"
                      fill="#060302"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.3384 35.625C20.3384 36.9194 21.3877 37.9688 22.6821 37.9688C23.9765 37.9688 25.0259 36.9194 25.0259 35.625H27.8384C27.8384 38.4727 25.5298 40.7812 22.6821 40.7812C19.8344 40.7812 17.5259 38.4727 17.5259 35.625H20.3384Z"
                      fill="#060302"
                    />
                  </svg>
                </button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
