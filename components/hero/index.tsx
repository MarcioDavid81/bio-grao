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
        <div className="container flex flex-col items-center sm:items-start gap-4 z-10">
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
        {/* <img src="/photo1.jpg" alt="herophoto" className='absolute object-cover z-0 w-full h-full opacity-80' /> */}
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 object-cover z-0 w-full h-full opacity-80"
          poster="https://lirp.cdn-website.com/bc3b92af/dms3rep/multi/opt/ymVNfZf9Rga1a1YnNZrO_Video+Home.v2.0000000-1920w.jpg"
        >
          <source src="https://vid.cdn-website.com/bc3b92af/videos/ymVNfZf9Rga1a1YnNZrO_Video+Home-v.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  )
}
