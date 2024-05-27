import Image from "next/image";
import React from "react";

const Notifications = () => {
  const notifications = [
    {
      message: "Congratulations, on creating an account with Us",
      date: "5 minutes ago",
      id: 1,
    },
    {
      message: "Congratulations, you just logged in successfully",
      date: "Just Now",
      id: 2,
    },
    {
      message: "Your Mathematics Lesson is ready",
      date: "Just Now",
      id: 3,
    },
    {
      message: "You have new classes to attend to .Please check the dashboard",
      date: "Just Now",
      id: 4,
    },
  ];
  return (
    <section className="w-full h-fit bg-blue-200 bg-opacity-25">
      <div className="w-full p-16">
        <header className="pb-10">
          <h2 className="font-medium text-lmsBlack text-2xl text-left">
            Notifications
          </h2>
        </header>

        {notifications.length > 0 ? (
          <div className="flex flex-col gap-y-4 w-full">
            {notifications.map((item) => (
              <div
                key={item.id}
                className="bg-lmsBlue px-5 py-4 flex items-start gap-x-20 w-full rounded-xl"
              >
                <span className="p-2 bg-lmsWhite flex items-center justify-center rounded-lg">
                  <Image
                    className="w-auto h-auto"
                    alt="Notification Icon "
                    height={50}
                    width={50}
                    src="/notification-message.png"
                  />
                </span>
                <span className="flex flex-col gap-y-2 ">
                  <p className="text-lmsWhite font-bold ">{item.message}</p>
                  <div className="flex items-center gap-x-2 ">
                    <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                    <p className="text-gray-300 font-thin ">{item.date}</p>
                  </div>
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <Image
              className="w-auto h-auto"
              alt="Notification Icon "
              height={500}
              width={500}
              src="/notification-empty.png"
            />
            <div className="text-lmsBlack">
                <h1 className="text-center text-2xl font-medium">
                No Notifications yet!
                </h1>
                <p className="text-center text-lg font-thin">We’ll notify you once we have something for you </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Notifications;
