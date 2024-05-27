import { useRouter } from "next/router";
import About from "../components/home/About"
import Faq from "../components/home/Faq";
import Hero from "../components/home/Hero";
import JoinUs from "../components/home/JoinUs";
import Partners from "../components/home/Partners";
import Subjects from "../components/home/Subjects";
import { useEffect } from "react";
// import Footer from "@/components/nav/Footer";

export default function Home() {
  const router = useRouter();
  console.log("page", router.pathname);
  const user =  typeof window !== "undefined"
  ? JSON.parse(localStorage.getItem("e-learning-user"))
  : null;

  const isLoggedIn = user ? true : false
  console.log("logo",isLoggedIn)
  useEffect(() => {
    if (router.pathname.includes("dashboard") && isLoggedIn) {
      router.push("/dashboard");
    }else if (router.pathname.includes("dashboard") && !isLoggedIn) {
      router.push("/");
    }else if (!router.pathname.includes("dashboard") && isLoggedIn) {
      router.push("/dashboard");
    }
  }, []);
  return (
    <>
    
      <Hero />
      <Partners />
      <About />
      <Subjects />
      <Faq />

      <div className="">
        <JoinUs />
      </div>

      {/* <Footer /> */}
    </>
  );
}
