'use client'

import SectionHeading from "@/components/Heading/SectionHeading"
import Heading from "@/components/Heading/Heading"
import Image from "next/image"
import { RiDoubleQuotesR } from "react-icons/ri"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useRef } from 'react'
import { useScroll, motion, useTransform } from "framer-motion"

const AboutPage = () => {
  const ref = useRef(null)

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const para =
    'We believe great design starts with empathy and ends with impact. Our approach is simple, listen closely, solve creatively, and build with purpose.'

  const awards = [
    {
      awardName: "WebVision Best Agency Website",
      Description: "Awarded for innovative layout and conversion-optimized content.",
      year: "2024"
    },
    {
      awardName: "Clarity UX Impact Award",
      Description: "Honored for delivering a user-first experience that improved client engagement metrics.",
      year: "2023"
    },
    {
      awardName: "Motion Forward Excellence in Animation",
      Description: "Given for best motion design work that elevated brand storytelling.",
      year: "2023"
    },
    {
      awardName: "Studio of Year-Upstart Awards",
      Description: "Recognized for exceptional creativity, strategic thinking, and rapid execution.",
      year: "2022"
    }
  ]

  return (
    <div className="md:mt-40 mt-[160px]" data-aos="fade-up">
      {/* About Section */}
      <SectionHeading text="About us" align="center" />
      <div className="md:mr-36  md:ml-0">
        <Heading text1="We take pride in delivering" text2="Exceptional results" align="center" />
      </div>
      <p className="text-[#c7d0ea] text-center max-w-6xl md:ml-[9rem] mt-7">
        Founded in 2021, <strong>Sparkradix Infratech Private Limited</strong> is a Bhubaneswar-based leader in electrical, civil, and solar energy projects...
      </p>

      {/* Images Section */}
      <div className="flex md:ml-[9.5rem] mx-10 md:gap-2 gap-1 mt-20">
        <div>
          <Image src="/ElectricGrid.png" alt="" width={558} height={695} />
        </div>
        <div className="ml-5">
          <Image src="/Engineer.png" alt="" width={558} height={337} />
          <Image src="/SolarPanel.png" alt="" width={558} height={337} className="md:mt-5 mt-2" />
        </div>
      </div>

      {/* Trusted Partners */}
      <div className="bg-[#F6F7F9] mt-20">
        <p className="text-[#697289] md:text-2xl text-xl text-center">Our Trusted Partners</p>
        <div className="flex items-center justify-center gap-14 mt-4 md:max-w-full max-w-12 mx-auto">
          <Image src="/NTPC.png" alt="" width={100} height={20} />
          <Image src="/TPNODL.png" alt="" width={120} height={40} />
          <Image src="/OdishaShasan.png" alt="" width={60} height={20} />
          <Image src="/Tata.png" alt="" width={80} height={20} />
        </div>
      </div>

      {/* Animated Quote Section */}
      <div className="w-full min-h-[350px] mt-12 flex flex-col justify-center items-center text-center">
        <div className="max-w-[768px] min-h-[270px]">
          <div className="w-full flex justify-center items-center">
            <RiDoubleQuotesR className="text-[#1DA1F2] text-center text-[40px]" />
          </div>
          <div className="mt-4">
            <p
              ref={ref}
              className="md:max-w-4xl md:mx-2 mx-3 md:text-2xl text-xl font-semibold leading-relaxed text-center"
            >
              {para.split('').map((letter, index) => {
                const fadeInStart = 0.0 + index * 0.003;
                const fadeInEnd = 0.25 + index * 0.003;
                const fadeOutStart = 0.35 + index * 0.003;
                const fadeOutEnd = 0.6 + index * 0.003;

                const opacity = useTransform(
                  scrollYProgress,
                  [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
                  [0, 1, 1, 0]
                )

                return (
                  <motion.span
                    key={index}
                    style={{ opacity }}
                    className="inline-block"
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                )
              })}
            </p>
          </div>
          <div className="flex w-full mt-6 gap-2 justify-center items-center">
            <span className="p-2 rounded-full bg-gray-300 border border-gray-200">BM</span>
            <div className="flex flex-col items-start">
              <span className="text-gray-900 font-bold">Brain Mitchel</span>
              <span className="text-gray-600 font-semibold">Founder of Bravio</span>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="w-full min-h-[60vh] px-6 md:px-[9rem]">
        <SectionHeading text="Achievements" align="left" />
        <Heading text1="Awards" text2="" align="left" />
        <div className="mt-6 overflow-x-auto overflow-hidden">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-[#F6F7F9] text-left text-[#697289] border-b border-gray-200">
                <th className="py-3 px-4 text-sm font-semibold rounded-tl-xl">Award Name</th>
                <th className="py-3 px-4 text-sm font-semibold">Description</th>
                <th className="py-3 px-4 text-sm font-semibold rounded-tr-xl">Year</th>
              </tr>
            </thead>
            <tbody>
              {awards.map((award, index) => (
                <tr key={index} data-aos="fade-up" className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-6 px-4 text-[#0F1115] font-bold">{award.awardName}</td>
                  <td className="py-6 px-4 text-[#697289]">{award.Description}</td>
                  <td className="py-6 px-4 text-[#0F1115] text-sm">{award.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full min-h-[312px] flex md:flex-row flex-col justify-center gap-6 px-6 mt-12">
        {[
          {
            text: "We needed a modern, high-converting website, and the Bravio team delivered beyond expectations...",
          },
          {
            text: "From branding to website design, every detail was meticulously handled...",
          },
          {
            text: "Their design and SEO expertise helped us increase conversion rate by 800%...",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="md:w-[308px] min-w-[250px] relative min-h-[270px] bg-white rounded-3xl border border-gray-300 p-4"
            data-aos="fade-up"
            data-aos-delay={idx * 200}
          >
            <RiDoubleQuotesR className="text-[#1DA1F2] text-2xl text-left" />
            <p>{item.text}</p>
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <span className="p-2 rounded-full bg-gray-300 border border-gray-200">BM</span>
              <div className="flex flex-col items-start">
                <span className="text-gray-900 font-bold">Brain Mitchel</span>
                <span className="text-gray-600 font-semibold">Founder of Bravio</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutPage
