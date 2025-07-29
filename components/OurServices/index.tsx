'use client';
import SectionHeading from "@/components/Heading/SectionHeading"
import Heading from "@/components/Heading/Heading"
import Image from "next/image"
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { MdArrowOutward } from "react-icons/md"
import AOS from 'aos';
import 'aos/dist/aos.css'; // 💡 Make sure this is included
import { useEffect } from 'react';

const index = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);
    return (
        <div className="bg-[#F6F7F9] md:mt-20 mt-10">
            <div data-aos="fade-up" className="">
                <SectionHeading text="Our Services" className="md:ml-[9rem] ml-[2rem]" align="left" />
                <Heading  text1="From ideas into high-impact infrastructure." className1="md:text-4xl text-2xl md:ml-0 ml-[1.8rem]"  text2="Expertise that Inspires and Delivers" className2="md:text-4xl text-2xl md:ml-0 ml-[1.8rem]"  align="left" />
            </div>

            {/* Row 1 */}
            <div className="md:flex gap-4 md:ml-40 ml-0 mt-16">
                {/* Electrical Infrastructure */}
                <div className="md:w-[23rem] w-[24rem] md:h-[40.25rem] h-[30rem] bg-[#FEFEFE] rounded-3xl flex flex-row md:flex-col" data-aos="fade-up" data-aos-delay="500" >
                    <div className="pt-7 md:px-7 pl-4">
                        <div className="text-2xl font-bold text-[#0F1115] ">Electrical Infrastructure</div>
                        <div className="text-sm text-[#50576B] mt-2">From designing and installing power distribution systems to maintaining high-voltage networks, we ensure reliable and efficient electrical solutions for urban and rural projects.</div>
                    </div>
                    <Image
                        src="/Electrical Tower.png"
                        alt="Homepage Image"
                        width={275}
                        height={275}
                        className=" md:ml-16 ml-10 md:w-[275px] w-[200px] rounded-br-3xl md:rounded-none md:mt-0 mt-6 mx-auto"
                    />
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-4 md:mt-0 mt-6 mx-2">
                    {/* Civil Construction */}
                    <div className="md:w-[47rem] w-[25rem] h-[19.625rem] bg-[#FEFEFE] rounded-3xl" data-aos="fade-up">
                        <div className="pt-7 px-7 pl-4">
                            <div className="text-2xl font-bold text-[#0F1115] ">Civil Construction</div>
                            <div className="text-sm text-[#50576B] mt-2">We build robust infrastructure, including roads, bridges, and public facilities, with a focus on durability and precision to meet government standards.</div>
                        </div>
                        <div className="flex">
                            <div className="bg-[#F6F7F9] text-[#50576B] text-sm font-medium w-20 h-9 rounded-full md:mt-10 mt-4 px-4 ml-7 flex items-center justify-center">Design</div>
                            <Image
                                src="/House1.png"
                                alt="Homepage Image"
                                width="350"
                                height="200"
                                className="md:ml-[18.35rem] ml-[3rem] md:mt-0 mt-14 mx-auto rounded-br-3xl md:w-[350px] w-56 md:h-[200px] h-32"
                            />
                        </div>
                    </div>

                    {/* Solar Energy Solutions */}
                    <div className="md:w-[47rem] w-[23rem] md:h-[19.625rem] h-96 bg-[#FEFEFE] rounded-3xl px-7 py-7 flex items-center justify-between" data-aos="fade-up" data-aos-delay="500">
                        {/* Left Section: Text + Button */}
                        <div className="flex flex-col justify-between h-full max-w-[22rem]">
                            <div>
                                <div className="text-2xl font-bold text-[#0F1115] md:mt-0 mt-[-1rem]">Solar Energy Solutions</div>
                                <p className="text-sm text-[#50576B] mt-2">
                                    Solar power plants, rooftop solar installations, and solar-integrated infrastructure projects. We help you harness clean energy, reducing carbon footprints and ensuring long-term energy security.
                                </p>
                            </div>
                            <Link
                                href="/contact">
                                <Button variant="default" bgColor="bg-white" textColor="text-black" className="mt-4 w-fit border border-[#D9DFE8]">
                                    Contact us
                                    <div className="rounded-full p-1 border border-[#F2F4F8] ml-2">
                                        <MdArrowOutward className="text-lg" />
                                    </div>
                                </Button>
                            </Link>
                        </div>

                        {/* Right Section: Image */}
                        <Image
                            src="/SolarPanel&Meter.png"
                            alt="Solar Panel and Meter"
                            width={350}
                            height={200}
                            className="object-contain gap-x-10 md:w-[350px] w-[270px] md:h-[200px] h-[185px]"
                        />
                    </div>

                </div>
            </div>

            {/* Row 2 */}
            <div className="flex md:flex-row flex-col gap-4 md:ml-40 ml-2 mt-4 ">
                {/* Project Management */}
                <div className="md:w-[47rem] w-[23rem] md:h-[19.375rem] h-[22rem] bg-[#FEFEFE] rounded-3xl relative" data-aos="fade-up" data-aos-delay="400">
                    <div className="pt-7 md:px-7 px-5">
                        <div className="text-2xl font-bold text-[#0F1115] md:max-w-lg max-w-2xl ">Project Management, Maintenance & Upgrades</div>
                        <div className="text-sm text-[#50576B] mt-2 md:max-w-64 max-w-2xl">We provide ongoing support to keep infrastructure running smoothly, from routine maintenance to modernizing existing systems.</div>
                    </div>
                    <Image
                        src="/Construction.png"
                        alt=""
                        width={500}
                        height={150}
                        className="rounded-br-3xl absolute bottom-0 right-0 md:w-[500px] w-[350px]"
                    />
                </div>

                {/* Call to Action Box */}
                <div className="md:w-[23rem] w-[23rem] h-[19.375rem] bg-[#145089] rounded-3xl relative" data-aos="fade-up" data-aos-delay="700">
                    <Image
                        src="/Dots.png"
                        alt="Dots bg"
                        width='344'
                        height="286"
                        className="absolute ml-2 mt-3 opacity-50" />
                    <div className="relative pt-7 px-7 ">
                        <div className="text-[22.92px] font-bold text-white mt-20 leading-snug">
                            Innovative Infrastructure,<br />
                            Sustainable Energy Solutions,
                            <div className="text-[#A1B9D0]">Unstoppable Growth</div>
                            <div className="mt-5">
                                <Link
                                    href="/contact">
                                    <Button variant="default" bgColor="bg-white" textColor="text-black">
                                        Contact Us
                                        <div className="rounded-full p-1 border border-[#F2F4F8]"><MdArrowOutward className='text-lg' /></div>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index