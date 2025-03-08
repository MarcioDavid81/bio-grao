"use client"

import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {
  return (
    <>
      <div className="relative flex items-center  h-screen overflow-hidden z-10 bg-secondary hero">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 to-transparent z-20"></div>
        <div className="container flex flex-col items-center sm:items-start gap-4 z-30">
          <h3 className="text-4xl sm:text-[65px] font-extrabold font-Exo leading-[60px]">
            O seu sucesso é{" "}
            <span className="block">
            a nossa{" "}
              <span className="text-primary">
                <Typewriter
                  words={[
                    "motivação!",
                    "obseção!",
                    "paixão!",
                  ]}
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
          <source src="https://res.cloudinary.com/dgdvt1tgv/video/upload/v1740441478/Wildlife_Nature_Travel_Youtube_Video_Intro_vglysf.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  )
}
