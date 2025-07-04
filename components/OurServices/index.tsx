import SectionHeading from "@/components/Heading/SectionHeading"
import Heading from "@/components/Heading/Heading"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MdArrowOutward } from "react-icons/md"

const index = () => {
    return (
        <div className="bg-[#F6F7F9]">
            <SectionHeading text="Our Services" align="left" />
            <Heading text1="From ideas into high-impact infrastructure." text2="Expertise that Inspires and Delivers" align="left" />

            {/* Row 1 */}
            <div className="flex gap-4 ml-40 mt-16">
                {/* Electrical Infrastructure */}
                <div className="w-[23rem] h-[40.25rem] bg-[#FEFEFE] rounded-3xl">
                    <div className="pt-7 px-7 ">
                        <div className="text-2xl font-bold text-[#0F1115] ">Electrical Infrastructure</div>
                        <div className="text-sm text-[#50576B] mt-2">From designing and installing power distribution systems to maintaining high-voltage networks, we ensure reliable and efficient electrical solutions for urban and rural projects.</div>
                    </div>
                    <Image
                        src="/Electrical Tower.png"
                        alt="Homepage Image"
                        width="275"
                        height="275"
                        className="mt-10 mx-auto"
                    />
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-4">
                    {/* Civil Construction */}
                    <div className="w-[47rem] h-[19.625rem] bg-[#FEFEFE] rounded-3xl">
                        <div className="pt-7 px-7 ">
                            <div className="text-2xl font-bold text-[#0F1115] ">Civil Construction</div>
                            <div className="text-sm text-[#50576B] mt-2">We build robust infrastructure, including roads, bridges, and public facilities, with a focus on durability and precision to meet government standards.</div>
                        </div>
                        <Image
                            src="/House1.png"
                            alt="Homepage Image"
                            width="350"
                            height="200"
                            className="ml-[23.5rem] mx-auto"
                        />
                    </div>

                    {/* Solar Energy Solutions */}
                    <div className="w-[47rem] h-[19.625rem] bg-[#FEFEFE] rounded-3xl">
                        <div className="text-2xl font-bold text-[#0F1115] pt-7 px-7">Solar Energy Solutions</div>
                        <div className="flex">
                            <div className="text-sm text-[#50576B] mt-2 max-w-7xl pt-1 px-7">Solar power plants, rooftop solar installations, and solar-integrated infrastructure projects. We help you harness clean energy, reducing carbon footprints and ensuring long-term energy security.</div>
                            <Image
                                src="/SolarPanel&Meter.png"
                                alt="Homepage Image"
                                width="350"
                                height="200"
                                className="ml-[23.5rem] mx-auto"
                            />
                        </div>
                        <Button variant="default" bgColor="bg-white" textColor="text-black">
                            Contact Us
                            <div className="rounded-full p-1 border border-[#F2F4F8]"><MdArrowOutward className='text-lg' /></div>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Row 2 */}
            <div className="flex gap-4 ml-40 mt-4">
                {/* Project Management */}
                <div className="w-[47rem] h-[19.375rem] bg-[#FEFEFE] rounded-3xl">
                    <div className="pt-7 px-7 ">
                        <div className="text-2xl font-bold text-[#0F1115] ">Project Management, Maintenance & Upgrades</div>
                        <div className="text-sm text-[#50576B] mt-2">We provide ongoing support to keep infrastructure running smoothly, from routine maintenance to modernizing existing systems.</div>
                    </div>

                </div>

                {/* Call to Action Box */}
                <div className="w-[23rem] h-[19.375rem] bg-[#145089] rounded-3xl relative">
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
                                <Button variant="default" bgColor="bg-white" textColor="text-black">
                                    Contact Us
                                    <div className="rounded-full p-1 border border-[#F2F4F8]"><MdArrowOutward className='text-lg' /></div>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
