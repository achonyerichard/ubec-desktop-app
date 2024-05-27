
import { useRouter } from "next/router";

import React from "react";
import Sidebar from "./Sidenav";
import DashboardHeader from "./DashboardHeader";
import Header from "./Header";
import Footer from './Footer'

const NavigationContainer = ({children}) => {
  const router = useRouter()
  console.log(router.pathname)
  return (
    <>
      {router.pathname.includes("dashboard") ? (
        <div className="flex flex-col  h-screen overflow-hidden ">
          <Sidebar />
          <div className="relative flex flex-col flex-1 overflow-y-auto ">
            <DashboardHeader />

            <div className="  w-full   flex flex-col lg:flex-row  overflow-auto no-scrollbar ">
              {children}
            </div>
          </div>
        </div>
      ) : (
        <>
          <Header />
          <div className="overflow-x-hidden lg:pt-[5rem] w-full">
            {children}
          </div>
          <Footer/>
        </>
      )}
    </>
  );
};

export default NavigationContainer;
