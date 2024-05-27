
import React, { useState, useEffect, useContext } from "react";
import { useReducer } from "react";

import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import styles from "../../utils/styles/Navigation.module.css";
import { AiFillMail, AiOutlineClose, AiOutlineLogout } from "react-icons/ai";

import {
  FaBlog,
  FaClock,
  FaDiscord,
  FaFacebook,
  FaFacebookF,
  FaFacebookMessenger,
  FaHome,
  FaInstagram,
  FaPhoneAlt,
  FaTelegram,
  FaTelegramPlane,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { BiDonateHeart, BiUserVoice } from "react-icons/bi";
import { BsFillDoorClosedFill, BsFillQuestionCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";

const links = [
  { href: "home", label: "Home", id: 1 },
  { href: "subjects", label: "Subjects", id: 4 },
  { href: "about", label: "About Us", id: 2 },

  { href: "contact", label: "Contact Us ", id: 5 },
];

const socials = [
  { sm: <FaFacebookF className="text-lg " />, url: "Home" },
  { sm: <FaTwitter className="text-lg " />, url: "Services" },
  { sm: <FaInstagram className="text-lg " />, url: "About Us" },
  { sm: <FaDiscord className="text-lg " />, url: "Services" },
  { sm: <FaTelegramPlane className="text-lg " />, url: "Contact Us" },
];
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [nav, setNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  useEffect(() => {
    setNav(true); // Set nav to true initially to make the navbar white
  }, []);

  const handleHamburger = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      //access to window
      const changeBackground = () => {
        if (window.scrollY >= 20) {
          setNav(true);
        } else {
          setNav(false);
        }
      };

      window.addEventListener("scroll", changeBackground);
    }
  }, []);

  // const pathname = usePathname();
  const router = useRouter();

  // if (pathname.includes("dashboard")) return null;

  return (
    <nav
      className={
        nav
          ? `${styles.nav} ${styles.active} ${styles.fixedTop} top-0 lg:bg-white z-[1000] shadow-md `
          : `${styles.nav} ${styles.fixedTop} top-0 lg:bg-white z-[1000] shadow-md `
      }
    >
      <div className="lg:max-w-[1440px] w-full px-4 mx-auto lg:px-20">
        <div className="flex justify-between">
          <div className="flex lg:justify-between lg:items-center lg:w-full">
            <div className="cursor-pointer">
              <Link href={"/home"}>
                <Image
                  className="w-20 h-auto "
                  src="/nav/logo.png"
                  width={200}
                  height={50}
                  alt="Dreamcare Logo"
                />
              </Link>
            </div>

            <div className="hidden lg:flex justify-end  ">
              {" "}
              {/* lg:px-48 */}
              <ul className="text-black cursor-pointer lg:flex lg:justify-center items-center">
                {/* {links.map((link) => (
                  <li
                    key={link.id}
                    onClick={() => {}}
                    className="lg:text-base lg:mr-6 font-semibold"
                  >
                    {link.href === "contact" ? (
                      <Link
                        href={link.href}
                        className="block text-sm w- px-2   duration-300"
                      >
                        {" "}
                        {link.label}
                      </Link>
                    ) : (
                      <ScrollLink
                        to={link.href}
                        smooth={true}
                        duration={500}
                        className="block text-sm w- px-2   duration-300"
                        onClick={() => {
                          setIsActive(false);
                        }}
                      >
                        {link.label}
                      </ScrollLink>
                    )}
                  </li>
                ))} */}
                <li
                
                  className="lg:text-base lg:mr-6 font-semibold"
                >
                  <span
                  onClick={()=>router.push('/login')}
                    className="bg-lmsRed text-white px-6 py-2 border border-lmsBlack"
                  >
                    Login
                  </span>
                </li>
                <li
                
                className="lg:text-base lg:mr-6 font-semibold"
              >
                <span
                  onClick={()=>router.push('/register/act-code')}
                
                  className="bg-lmsGreen text-white px-6 py-2 border border-lmsBlack"
                >
                  Sign Up
                </span>
              </li>
                <div className="grow"></div>
              </ul>
            </div>
          </div>

          {/* mobile */}
          <div className="flex items-center pr-3  ">
            <div
              className="flex gap-x-2 items-center justify-end flex-end"

              // }}
            >
              {/*Toggle locations */}

              <span onClick={handleHamburger} className="lg:hidden ">
                <svg
                  className="w-10 fill-lmsRed"
                  width="55"
                  height="34"
                  viewBox="0 0 55 34"
                  fill="#111624"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.93457"
                    y="0.115662"
                    width="53.7037"
                    height="7.76871"
                    rx="3.88435"
                    fill="#EB420E"
                  />
                  <rect
                    x="0.93457"
                    y="25.338"
                    width="53.7037"
                    height="7.76871"
                    rx="3.88435"
                    fill="#EB420E"
                  />
                  <rect
                    x="0.93457"
                    y="12.7268"
                    width="35.4283"
                    height="7.76871"
                    rx="3.88435"
                    fill="#EB420E"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- mobile menu --> */}
      {isActive && (
        <aside
          id="sidebar"
          className={`bg-lmsWhite  text-red md:w-64 w-4/5 bg-dreamWhite space-y-6 h-screen pt-6 px-0 flex-col absolute inset-y-0 left-0 transform lg:relative lg:translate-x-0 transition   flex lg:flex-col lg:justify-between overflow-y-auto" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation z-[2000]  ease-in-out duration-300 lg:hidden ${
            isActive ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          <div
            className="flex flex-col"
            data-dev-hint="optional div for having an extra footer navigation"
          >
            <div className="flex justify-between items-center pb-10 px-2">
              <Link href="/">
                <Image
                  className="w-30 h-auto object-cover mt-6 "
                  src="/nav/logo.png"
                  width={100}
                  height={50}
                  alt="Dreamcare Logo"
                />
              </Link>
              <span
                onClick={() => {
                  setIsActive(false);
                }}
              >
                <AiOutlineClose className="text-[#EB420E]  text-xl" />
              </span>
            </div>

            <nav className="flex flex-col ">
              {links.map((link) => (
                <ScrollLink
                  to={link.href}
                  smooth={true}
                  duration={500}
                  className=" transition border-t border-gray-300 py-6 block text-sm w-20 px-2   duration-300"
                  onClick={() => {
                    setIsActive(false);
                  }}
                >
                  <p className="text-xl text-black font-medium">{link.label}</p>
                </ScrollLink>
              ))}
              {/* {user ? (
                <button
                  onClick={logout()}
                  className="px-5 py-1 flex justify-center rounded-lg bg-netBlue text-netWhite border-netBlue border-[2px] hover:text-white hover:bg-netBlue duration-150"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/login"
                  className="px-5 py-1 flex justify-center rounded-lg bg-netBlue text-netWhite border-[2px] hover:text-white hover:bg-netBlue duration-150"
                >
                  Login
                </Link>
              )} */}
            </nav>
          </div>

          <div className="flex  items-center  px-0 l py-2 gap-x-4">
            {socials.map((social) => (
              <span
                key={social.url}
                onClick={() => {
                  setIsActive(false);
                  // openModal();
                }}
                className="border-gray-400 border p-2 text-lg flex justify-center items-center "
              >
                <Link href={social.url} className="text-dreamBlue">
                  {social.sm}
                </Link>
              </span>
            ))}
          </div>
        </aside>
      )}
    </nav>
  );
};

export default Header;
