'use client'

import SectionHeading from "@/components/Heading/SectionHeading"
import Heading from "@/components/Heading/Heading"
import Image from "next/image"
import { RiDoubleQuotesR } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css'; // 💡 Make sure this is included
import { useEffect, useRef, useState } from 'react';
import { useScroll, motion, useTransform } from "framer-motion";

const index = () => {
    //   const paragraph = "We believe great design starts with empathy and ends with impact. Our approach is simple, listen closely, solve creatively, and build with purpose."
    // const paraRef = useRef<HTMLParagraphElement>(null);
    //   const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null)
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const para =
        'We believe great design starts with empathy and ends with impact. Our approach is simple, listen closely, solve creatively, and build with purpose.';

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
<<<<<<< HEAD
        <div>
            <div className="md:mt-40 mt-32" data-aos="fade-up">
=======
        <div className="w-full">
            <div className="mt-40" data-aos="fade-up">
>>>>>>> sipu
                <SectionHeading text="About us" align="center" />
                <div className="md:mr-36 ml-[-9rem] md:ml-0">
                    <Heading text1="We take pride in delivering" text2="Exceptional results" align="center" />
                </div>
<<<<<<< HEAD
                <p className="text-[#50576B] text-center max-w-6xl md:ml-[9rem] mt-7 md:mx-0 mx-8">Founded in 2021, <strong>Sparkradix Infratech Private Limited</strong> is a Bhubaneswar-based leader in electrical, civil, and solar energy projects. As a Class “A” Government-approved contractor, we specialize in creating sustainable, high-impact infrastructure that powers communities and drives progress across Odisha and beyond. With over 4 years of expertise, we partner closely with government and private clients to deliver innovative solutions tailored to their unique needs. From robust power distribution systems to eco-friendly solar installations and durable civil constructions, our commitment to quality and sustainability fuels every project we undertake.</p>
=======
                <p className="text-[#c7d0ea] text-center max-w-6xl ml-[9rem] mt-7">Founded in 2021, <strong>Sparkradix Infratech Private Limited</strong> is a Bhubaneswar-based leader in electrical, civil, and solar energy projects. As a Class “A” Government-approved contractor, we specialize in creating sustainable, high-impact infrastructure that powers communities and drives progress across Odisha and beyond. With over 4 years of expertise, we partner closely with government and private clients to deliver innovative solutions tailored to their unique needs. From robust power distribution systems to eco-friendly solar installations and durable civil constructions, our commitment to quality and sustainability fuels every project we undertake.</p>
>>>>>>> sipu

                <div className="flex md:ml-[9.5rem] mx-10 md:gap-2 gap-1 mt-20">
                    <div>
                        <Image
                            src="/ElectricGrid.png"
                            alt=""
                            width={558}
                            height={695} />
                    </div>
                    <div className="ml-5">
                        <Image
                            src="/Engineer.png"
                            alt=""
                            width={558}
                            height={337} />
                        <Image
                            src="/SolarPanel.png"
                            alt=""
                            width={558}
                            height={337}
                            className="md:mt-5 mt-2" />
                    </div>
                </div>
                <div className="bg-[#F6F7F9] mt-20">
                    <p className="text-[#697289] md:text-2xl text-xl text-center">Our Trusted Partners</p>
                    <div className="flex items-center justify-center gap-14 mt-4 md:max-w-full max-w-12 mx-auto">
                        <Image
                            src="/NTPC.png"
                            alt=""
                            width={100}
                            height={20}
                        />
                        <Image
                            src="/TPNODL.png"
                            alt=""
                            width={120}
                            height={40}
                        />
                        <Image
                            src="/OdishaShasan.png"
                            alt=""
                            width={60}
                            height={20}
                        />
                        <Image
                            src="/Tata.png"
                            alt=""
                            width={80}
                            height={20}
                        />
                    </div>
                </div>
            </div>

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
                        <div className=" flex flex-col items-start">
                            <span className="text-gray-900 font-bold">Brain Mitchel</span>
                            <span className="text-gray-600 font-semibold">Founder of Bravio</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* achievement */}
            <div className="w-full min-h-[60vh] px-6 md:px-[9rem]">
                <SectionHeading text="Achievements" align="left" />
                <Heading text1="Awards" align="left" text2="" />

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
                                <tr data-aos="fade-up" key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                    <td className="py-6 px-4 text-[#0F1115] font-bold">{award.awardName}</td>
                                    <td className="py-6 px-4 text-[#697289] ">{award.Description}</td>
                                    <td className="py-6 px-4 text-[#0F1115] text-sm">{award.year}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* consumers cards */}
            <div className="w-full min-h-[312px] flex md:flex-row flex-col justify-center  gap-6 px-6 mt-12">

                <div className="min-w-[250px] md:w-[488px] relative min-h-[290px] bg-white rounded-3xl border border-gray-300 p-4" data-aos="fade-up">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-gray-900">8X</span>
                        <span className="text-xl font-bold text-gray-600">Increase in conversion reate</span>

                    </div>

                    <RiDoubleQuotesR className="text-[#1DA1F2] text-2xl text-left mt-3" />
                    <p>"We needed a modern, high-converting website, and the Bravio
                        team delivered beyond expectations. Their design and SEO
                        expertise helped us increase conversion rate by 800% in just two
                        weeks. Highly recommend!" </p>
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <span className="p-2 rounded-full bg-gray-300 border border-gray-200">BM</span>
                        <div className=" flex flex-col items-start">
                            <span className="text-gray-900 font-bold">Brain Mitchel</span>
                            <span className="text-gray-600 font-semibold">Founder of Bravio</span>
                        </div>
                    </div>
                </div>

                <div className="flex  md:flex-row flex-col gap-6">
                    <div className="md:w-[308px] min-w-[250px] relative min-h-[270px] bg-white rounded-3xl border border-gray-300 p-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="">
                            <RiDoubleQuotesR className="text-[#1DA1F2] text-2xl text-left" />
                        </div>
                        <div className="">
                            "From branding to website design,
                            every detail was meticulously handled.
                            The team’s expertise helped us launch
                            faster, and the results have been
                            phenomenal!"
                        </div>
                        <div className="absolute bottom-4 left-4 flex items-center gap-2">
                            <span className="p-2 rounded-full bg-gray-300 border border-gray-200">BM</span>
                            <div className=" flex flex-col items-start">
                                <span className="text-gray-900 font-bold">Brain Mitchel</span>
                                <span className="text-gray-600 font-semibold">Founder of Bravio</span>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-[308px] min-w-[250px] relative min-h-[270px] bg-white rounded-3xl border border-gray-300 p-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="">
                            <RiDoubleQuotesR className="text-[#1DA1F2] text-2xl text-left" />
                        </div>
                        <div className="">
                            "We needed a modern, high-
                            converting website, and the Bravio
                            team delivered beyond expectations.
                            Their design and SEO expertise helped
                            us increase conversion rate by 800%
                            in just two weeks. Highly recommend!"
                        </div>
                        <div className="absolute bottom-4 left-4 flex items-center gap-2">
                            <span className="p-2 rounded-full bg-gray-300 border border-gray-200">BM</span>
                            <div className=" flex flex-col items-start">
                                <span className="text-gray-900 font-bold">Brain Mitchel</span>
                                <span className="text-gray-600 font-semibold">Founder of Bravio</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default index