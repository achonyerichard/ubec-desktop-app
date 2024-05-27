
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const Partners = () => {
  return (
    <div>
      <div className=' my-5 h-52 bg-[url("/partners-bg.png")] bg-cover flex items-center justify-between px-40'>
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold text-[#fff] capitalize leading-snug">
            start your journey<br/> with us now
          </h2>
        </div>
        <div className="flex gap-x-6">
          <Image
            src="/coa.png"
            alt="Binance"
            width={200}
            height={150}
            className="lg:object-cover object-contain w-auto h-auto"
          />
            <Image
            src="/ubec.png"
            alt="Binance"
            width={200}
            height={150}
            className="lg:object-cover object-contain w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
}
export default Partners;
