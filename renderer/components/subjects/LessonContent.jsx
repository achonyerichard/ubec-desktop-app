import Image from "next/image";
import React from "react";
import Lesson from "./Lesson";

const LessonContent = () => {

  return (
    <section className="w-full ">
      <div className="w-full max-w-[1440px]  mx-auto mt-10 flex justify-center ">
        <Image
          className="w-auto h-auto rounded-[30px] object-cover"
          src="/subjects/content-hero.png"
          width={800}
          height={500}
        />
      </div>
   
      <main className="h-auto mb-20 bg-blue-100 bg-opacity-25 py-20 mt-10 lg:px-20 px-10 ">
       <Lesson/>
      </main>
    </section>
  );
};

export default LessonContent;
