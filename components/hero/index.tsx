"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <>
      <div className="relative flex items-center  h-screen overflow-hidden z-10 bg-secondary hero">
        {/* Overlay de background */}
        <div className="absolute inset-0 bg-primary opacity-50 z-20"></div>
        <div className="container flex flex-col items-center sm:items-start gap-4 z-30">
          <h3 className="text-4xl sm:text-[65px] font-extrabold font-Exo leading-[60px]">
            O seu sucesso é{" "}
            <span className="block">
              a nossa{" "}
              <span className="text-secondary">
                <Typewriter
                  words={["motivação!", "obseção!", "paixão!"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
              </span>
            </span>
          </h3>
          <div className="mt-10">
            <Link href="https://www.wa.me/5511999999999" target="_blank">
              <Button className="bg-transparent border-2 border-white text-white font-Exo hover:bg-secondary hover:border-secondary hover:text-white">
                Entre em contato
                <FaLongArrowAltRight />
              </Button>
            </Link>
          </div>
        </div>
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 object-cover z-0 w-full h-full"
          poster="https://res.cloudinary.com/dgdvt1tgv/image/upload/v1740445258/posterBg_tbwyat.jpg"
        >
          <source
            src="https://res.cloudinary.com/dgdvt1tgv/video/upload/v1740441478/Wildlife_Nature_Travel_Youtube_Video_Intro_vglysf.mp4"
            type="video/mp4"
          />
        </video>
        {/* Ondulação decorativa na parte inferior */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16 text-[#ededed] fill-current"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,143.53,111.94,221.49,87.21Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
