/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import HeroImage from "../images/hero-image.png";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4  text-4xl lg:text-6xl font-extrabold ">
            Hello, I'm Ashley Rajpaul
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <div>
          <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
            Hire Me
          </button>
          <button className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
            Download Resume
          </button>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818 w-[250px] h-[250px] lg:w-[400px] lg: relative">
            <Image
              src={HeroImage}
              alt="hero image"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
