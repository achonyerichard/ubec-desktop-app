import React from "react";

const Faq = () => {
  const faq = [
    {
      title: " What subjects are available?",
      questions:
        " Lorem ipsum dolor sit amet consectetur. Maecenas ac elementum lacus vel vitae sed nisi aliquam aliquet. Vel adipiscing placerat tellusfaucibus",
      id: 1,
    },
    {
        title: " What subjects are available?",
        questions:
          " Lorem ipsum dolor sit amet consectetur. Maecenas ac elementum lacus vel vitae sed nisi aliquam aliquet. Vel adipiscing placerat tellusfaucibus",
        id: 2,
      },
      {
        title: " What subjects are available?",
        questions:
          " Lorem ipsum dolor sit amet consectetur. Maecenas ac elementum lacus vel vitae sed nisi aliquam aliquet. Vel adipiscing placerat tellusfaucibus",
        id: 3,
      },
      {
        title: " What subjects are available?",
        questions:
          " Lorem ipsum dolor sit amet consectetur. Maecenas ac elementum lacus vel vitae sed nisi aliquam aliquet. Vel adipiscing placerat tellusfaucibus",
        id: 4,
      },
      {
        title: " What subjects are available?",
        questions:
          " Lorem ipsum dolor sit amet consectetur. Maecenas ac elementum lacus vel vitae sed nisi aliquam aliquet. Vel adipiscing placerat tellusfaucibus",
        id: 5,
      },
      {
        title: " What subjects are available?",
        questions:
          " Lorem ipsum dolor sit amet consectetur. Maecenas ac elementum lacus vel vitae sed nisi aliquam aliquet. Vel adipiscing placerat tellusfaucibus",
        id: 6,
      },
  ];
  return (
    <section className=" lg:px-20 px-4 py-10 lg:py-20 lg:max-w-[1440px] mx-auto">
      <header className="section-head-parallax max-w-xl mx-auto">
        <p className="text-center text-lmsGreen">FAQ</p>
        <h4 className="text-lmsBlack text-4xl text-center">
          Frequently Asked Questions
        </h4>
        <p className="text-lmsBlack text-center font-thin pt-5">
          Install our E-Learning app to your Kids tablet and enjoy stress free
          education and tutoring from the best instructors.{" "}
        </p>
      </header>
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-10">
      { faq.map((item)=>(
        <div key={item.id} className="shadow-md border border-gray-200 p-4 flex flex-col gap-y-4">
          <h1 className="text-xl font-smibold text-lmsBlack">
          {item.title}
          </h1>
          <p>
           {item.questions}
          </p>
        </div>
      )) }
      </main>
    </section>
  );
};

export default Faq;
