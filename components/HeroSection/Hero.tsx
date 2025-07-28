"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { Button } from "../ui/button"
import { MdArrowOutward } from "react-icons/md"
import ProjectCard from "@/components/Cards"
import './Custom.css' // If this file is needed

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const interval = setInterval(() => {
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth

      if (scrollContainer.scrollLeft >= maxScroll) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" })
      } else {
        scrollContainer.scrollBy({ left: 300, behavior: "smooth" })
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <div className="relative w-full md:h-[753px] h-[454px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/HeroPage.png"
          alt="Homepage Image"
          layout="fill"
          priority
          className="rounded-b-[3rem]"
        />

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 mt-[7.5rem]">
            Engineering Trust. Powering Progress.
          </h1>
          <p className="text-sm md:text-base max-w-[640px] mb-8 text-[#E1E1E1]">
            Civil & Electrical Infrastructure Experts Delivering Smart, Scalable & <br /> Government-Grade Solutions.
          </p>

          <Link href="/contact">
            <Button
              variant="default"
              bgColor="bg-black"
              textColor="text-white"
              className="hover:bg-black/85"
            >
              Build Tomorrow. Today.
              <div className="bg-[#333437] rounded-full p-1 border border-[#545457] ml-2">
                <MdArrowOutward className="text-white text-sm" />
              </div>
            </Button>
          </Link>
        </div>

        {/* Overlay background tint */}
        <div className="absolute bg-black/20 z-[1]" />
      </div>

      {/* Marquee section */}
      <div className="mt-10 bg-[#F6F7F9] overflow-hidden">
        <div className="marquee" ref={scrollRef}>
          <div className="marquee-content">
            {[...Array(2)].map((_, i) => (
              <div className="flex gap-6 px-6" key={i}>
                <ProjectCard
                  image="/Demo.png"
                  title="OrbitCloud"
                  description="Web design · development"
                  metric="125% Boost in leads"
                  showArrow={false}
                />
                <ProjectCard
                  image="/Demo.png"
                  title="Cloudash"
                  description="Web design · development"
                  metric="+65% Customer sign-ups"
                  showArrow={false}
                />
                <ProjectCard
                  image="/Demo.png"
                  title="Asterisk inc"
                  description="Web design · development"
                  showArrow={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Trusted Partners */}
      <div className="bg-[#F6F7F9] mt-10">
        <p className="text-[#697289] text-2xl text-center">Our Trusted Partners</p>
        <div className="flex items-center justify-center gap-14 mt-4 flex-nowrap px-4 overflow-x-auto hide-scrollbar">
          <Image
            src="/NTPC.png"
            alt="NTPC"
            width={120}
            height={40}
            className="h-[20px] w-[60px] sm:h-[30px] sm:w-[80px] md:h-[40px] md:w-[120px] object-contain"
          />
          <Image
            src="/TPNODL.png"
            alt="TPNODL"
            width={120}
            height={60}
            className="h-[25px] w-[70px] sm:h-[35px] sm:w-[90px] md:h-[60px] md:w-[120px] object-contain"
          />
          <Image
            src="/OdishaShasan.png"
            alt="Odisha Govt"
            width={100}
            height={60}
            className="h-[20px] w-[40px] sm:h-[28px] sm:w-[50px] md:h-[60px] md:w-[100px] object-contain"
          />
          <Image
            src="/Tata.png"
            alt="TATA"
            width={80}
            height={60}
            className="h-[20px] w-[50px] sm:h-[30px] sm:w-[60px] md:h-[60px] md:w-[80px] object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
