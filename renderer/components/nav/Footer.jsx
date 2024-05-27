
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import {
  FaFacebookF,
  FaInstagram,
  FaInstagramSquare,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const links = [
  { href: "home", label: "Home", id: 1 },
  { href: "Subjects", label: "Subjects", id: 4 },
  { href: "about", label: "About Us", id: 2 },

  { href: "contact", label: "Contact Us ", id: 5 },
];
const socials = [
  { sm: <FaInstagramSquare className="text-lg " />, url: "Services" },
  { sm: <FaPinterestP className="text-lg " />, url: "About Us" },
  { sm: <FaTwitter className="text-lg " />, url: "Services" },

  { sm: <FaFacebookF className="text-lg " />, url: "Home" },
];
const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  const router = useRouter()

  return (
    <>
      <footer
        id="footer"
        className={`md:px-20  pt-4  z-0  shadow-xl  bg-lmsBlack text-lmsBlack`}
      >
        <div className="flex flex-col  px-4 py-10">
          <div className="py-12  flex  flex-col gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between justify-center lg:border-b border-gray-200">
            <Image
              className="w-auto h-auto object-cover"
              src={"/nav/logo-white.png"}
              width={250}
              height={50}
              alt="E-learning logo"
            />
            <ul className="text-lmsWhite cursor-pointer flex justify-center items-center">
              {links.map((link) => (
                <li
                  key={link.id}
                  className="lg:text-base lg:mr-6 font-semibold"
                >
                  <Link
                    href={link.href}
                  
                 
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex justify-around  items-center  px-0 l py-2 gap-x-4">
              {socials.map((social) => (
                <span
                  key={social.url}
                  className="bg-gray-700 rounded-full  p-2 text-lg flex justify-center items-center "
                >
                  <Link href={social.url} className="text-lmsWhite">
                    {social.sm}
                  </Link>
                </span>
              ))}
            </div>
          </div>
         
          <div className="flex  lg:flex-row py-5 justify-center items-center ">
            <h1 className="text-lmsWhite text-lg  text-center">
              © {year} All rights reserved. E-learning.com
            </h1>
           
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
