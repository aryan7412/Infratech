'use client'

import { FaArrowLeft } from "react-icons/fa";
import { TbTimelineEventText } from "react-icons/tb";
import Image from "next/image";
import ProjectCard from "@/components/Cards"
import { useState, useEffect } from "react";

const index = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    return (
        <div className="md:max-w-[70rem] md:mx-auto mx-6">
            {/* Back to Projects */}
            <div className="flex gap-1">
                <div className="flex mt-44 w-8 h-8 border border-black rounded-full items-center justify-center"><FaArrowLeft /></div>
                <div className="mt-[11.25rem] mb-8">Back to Projects</div>
            </div>
            {/* Project 1 */}
            <div className="flex border border-black rounded-[3rem] flex-col w-full max-w-[728px] md:max-w-[1136px] h-[856px] md:h-[918px] mx-auto">
                <h1 className="text-3xl font-bold max-w-4xl mx-8 mb-4 md:mt-11 mt-6">33/11 kV Substation Electrification – Ganjam District, Odisha</h1>
                <p className="max-w-7xl mx-8 md:mb-16 mb-10">The remote village clusters in Ganjam faced frequent power outages, voltage drops, and inadequate infrastructure due to aging transmission lines and lack of local substations.</p>
                <Image
                    src=""
                    alt="Some alt"
                    className="
                            bg-slate-200 md:mx-auto rounded-[3rem]
                             max-w-[688px] h-[388px]
                            md:max-w-[1072px] md:h-[536px]
                            object-cover mx-6"
                />
                <div className="flex flex-col md:flex-row mt-10 mx-auto gap-3 px-4">
                    {/* Client */}
                    <div className="w-[385px] md:w-[711px] h-[79px] md:h-[94px] bg-[#F6F7F9] rounded-full flex items-center justify-center px-4">
                        <Image
                            src=""
                            alt="Client Logo"
                            className="bg-black mr-2 rounded-full md:ml-[-10rem] md:h-16 md:w-16 h-10 w-10"
                        />
                        <div className="text-left">
                            <div className="text-xs md:text-sm font-medium text-gray-500 md:ml-0">CLIENT</div>
                            <div className="text-sm md:text-base font-semibold md:ml-0">Odisha Power Transmission Corporation Limited (OPTCL)</div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="w-full md:w-[349px] h-[79px] md:h-[94px] bg-[#F6F7F9] rounded-full flex items-center justify-center pr-2 mt-1 md:mt-0 md:mb-0 mb-4">
                        <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mr-2 md:ml-0 ml-[-3rem]">
                            <TbTimelineEventText />
                        </div>
                        <div className="text-left">
                            <div className="text-xs md:text-sm font-medium text-gray-500">TIMELINE</div>
                            <div className="text-sm md:text-base font-semibold">14th July 2023 - 25th February 2024</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Solution */}
            <div>
                <h1 className="text-2xl font-bold md:mt-32 mt-16">The Solution</h1>
                <p className="max-w-[49rem] mt-5">Sparkradix Infratech designed and executed a turnkey solution to construct a 33/11 kV substation along with feeder line installations, transformer mounting, and underground cabling. <br />
                    <div className="font-medium">The Result</div>
                    The project resulted in uninterrupted and stable power supply to over 15,000 households and 35 government offices. Load capacity improved by 42%, and voltage fluctuation was reduced to {"<"} 5%.
                </p>
                <div className="md:flex gap-4 md:mt-24 mt-10">
                    <Image
                        src=""
                        alt=""
                        height={420}
                        width={560}
                        className="bg-slate-200 rounded-3xl" />
                    <Image
                        src=""
                        alt=""
                        height={420}
                        width={560}
                        className="bg-slate-200 rounded-3xl md:mt-0 mt-4" />
                </div>
            </div>
            {/* Logomark */}
            <div>
                <h1 className="text-2xl font-bold md:mt-32 mt-16 max-w-[30rem]">We started with a full brand refresh, <br />
                    introducing a refined visual identity that
                    included a new logomark</h1>
                <p className="mt-5 max-w-4xl">To bring Sparkradix’s visual presence in line with its ambitious goals, we developed a modular design system rooted in simplicity and structure.
                </p>
                <p className="mt-4 max-w-4xl"> A fully functional, cleanly styled lead form was integrated to encourage conversions and make client engagement seamless. The overall identity balances functionality with modern design aesthetics, positioning Sparkradix as both credible and forward-thinking.
                </p>
                <div className="md:flex gap-4 md:mt-24 mt-10">
                    <Image
                        src=""
                        alt=""
                        height={420}
                        width={560}
                        className="bg-slate-200 rounded-3xl" />
                    <Image
                        src=""
                        alt=""
                        height={420}
                        width={560}
                        className="bg-slate-200 rounded-3xl md:mt-0 mt-4" />
                </div>
                <Image
                    src=""
                    alt=""
                    height={758}
                    width={1136}
                    className="bg-slate-200 rounded-3xl mt-4 ml-2" />
            </div>
            {/* Project description */}
            <div>
                <h1 className="md:mt-24 mt-10 text-2xl font-bold">Project Description</h1>
                <ul className="mt-5 list-disc ml-6">
                    <li>EPC execution of 33/11 kV Substation in Patrapur block, Ganjam</li>
                    <li>Construction included control room, fencing, transformer bay setup</li>
                    <li>Cable trenching and installation of LT and HT panels</li>
                    <li>Erection of 8 km overhead and underground feeder lines</li>
                    <li>Full compliance with Central Electricity Authority (CEA) guidelines</li>
                </ul>
                <p className="mt-5">Targets Achieved</p>
                <ul className="list-disc ml-6">
                    <li> Commissioned ahead of schedule (by 12 days)</li>
                    <li>100% safety compliance – zero on-site incidents</li>
                    <li> Covered 18 villages through upgraded infrastructure</li>
                    <li>Local employment to 60+ skilled and unskilled workers</li>
                </ul>
                <p className="mt-5 max-w-[34rem]">Looking back, this project was a reminder that great design isn’t just about
                    visuals—it’s about aligning perception with reality. By helping express who
                    they truly are, we gave them the foundation to grow confidently in a
                    crowded market.
                </p>
                <div className="mt-16 flex gap-5">
                    <div className="h-52 w-1 bg-black"></div>
                    <div>
                        <p className="font-semibold max-w-lg">“Sparkradix Infratech delivered an outstanding project with precision and professionalism. Their team showed deep technical expertise and ensured timely execution with top-notch quality. We are now witnessing significant improvement in power quality and rural satisfaction.”</p>
                        <p className="font-bold md:mt-16 mt-10"> – Project Engineer, OPTCL</p>
                    </div>

                </div>
                <Image
                    src=""
                    alt=""
                    height={758}
                    width={1136}
                    className="bg-slate-200 md:mt-24 mt-10 rounded-3xl" />
            </div>
            {/* More Projects */}
            <div className="bg-[#F6F7F9] mt-14 ">
                <h1 className="text-3xl font-bold mt-20">More Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ProjectCard
                        image=""
                        title="Vertax Labs"
                        tags={["SaaS", "Web app"]}
                        isMockup
                        showArrow={true}
                    />
                    <ProjectCard
                        image=""
                        title="Asterisk"
                        tags={["Web3", "CMS"]}
                        isMockup
                        showArrow={true}
                    />
                    <ProjectCard
                        image=""
                        title="Nova Threads"
                        tags={["Crypto", "Web app"]}
                        isMockup
                        showArrow={true}
                    />
                    <ProjectCard
                        image=""
                        title="CloudDash"
                        tags={["Finance", "Web3"]}
                        isMockup
                        showArrow={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default index