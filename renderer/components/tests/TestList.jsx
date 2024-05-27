"use client"
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  if (red === 255 && green === 255 && blue === 255) {
    return getRandomColor(); // Retry if the color is white
  }

  return `rgb(${red},${green},${blue})`;
}

const TestList = ({ data }) => {
  const router =useRouter()
  const randomColors = data?.map(() => getRandomColor());
  console.log("hey I am active", data);
  return (
    <section className="max-w-[1320px] mx-auto">
      {data.map((item, index) => (
        <div
      
          onClick={() =>{
            router.push( `tests/${item?.course}`)
            window?.localStorage.setItem("questions", JSON.stringify(item))
          }
          }
          key={item.index}
          className="flex items-center gap-10 pb-2 mb-6 cursor-pointer "
          style={{
            borderColor: randomColors[index],
            borderBottomWidth: "2px",
            // borderBottom:
            color: randomColors[index],
          }}
        >
          <span
            style={{
              borderColor: randomColors[index],
              borderWidth: "4px",
              color: randomColors[index],
            }}
            className="p-2 w-12 h-12 flex items-center justify-center rounded-full font-bold"
          >
            {index + 1}
          </span>
          <p className="text-xl text-lmsBlack font-semibold">{item.course}</p>
        </div>
      ))}
    </section>
  );
};

export default TestList;
