/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import HeroImage from "../images/hero-image.png";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4  text-4xl  sm:text-5xl lg:text-6xl font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Ashley",
                1000,
                "Full Stack Engineer",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <div>
          <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink hover:bg-slate-200 text-white">
            Hire Me
          </button>
          <button className="px-6 py-3 w-full rounded-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink- hover:bg-slate-800 text-white mt-3">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-5">
              Download Resume
            </span>
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
