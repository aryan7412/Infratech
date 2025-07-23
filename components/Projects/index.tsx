'use client'

import { FaArrowLeft } from "react-icons/fa";
import { TbTimelineEventText } from "react-icons/tb";
import Image from "next/image";
import ProjectCard from "@/components/Cards"

const index = () => {
    return (
        <div className="max-w-[70rem] mx-auto">
            {/* Back to Projects */}
            <div className="flex gap-1">
                <div className="flex mt-44 w-8 h-8 border border-black rounded-full items-center justify-center"><FaArrowLeft /></div>
                <div className="mt-[11.25rem] mb-8">Back to Projects</div>
            </div>
            {/* Project 1 */}
            <div className="flex border border-black rounded-[3rem] flex-col h-[918px] w-[1136px]">
                <h1 className="text-3xl font-bold max-w-4xl mx-8 mb-4 mt-11">33/11 kV Substation Electrification – Ganjam District, Odisha</h1>
                <p className="max-w-7xl mx-8 mb-16">The remote village clusters in Ganjam faced frequent power outages, voltage drops, and inadequate infrastructure due to aging transmission lines and lack of local substations.</p>
                <Image
                    src=""
                    alt=""
                    height={536}
                    width={1072}
                    className="bg-slate-200 mx-auto rounded-[3rem]" />
                <div className="flex mt-10 mx-auto gap-3">
                    {/* Client */}
                    <div className="w-[711px] h-[94px] bg-[#F6F7F9] rounded-full flex items-center justify-center">
                        <Image
                            src=""
                            alt=""
                            height={50}
                            width={50}
                            className="bg-black ml-[-10rem] mr-2 rounded-full" />
                        <div>
                            <div>CLIENT</div>
                            <div>Odisha Power Transmission Corporation Limited (OPTCL)</div>
                        </div>
                    </div>
                    {/* Timeline */}
                    <div className="w-[349px] h-[94px] bg-[#F6F7F9] rounded-full flex items-center justify-center">

                        <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mr-2">
                            <TbTimelineEventText />
                        </div>
                        <div>
                            <div>TIMELINE</div>
                            <div>14th July 2023 - 25th February 2024</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Solution */}
            <div>
                <h1 className="text-2xl font-bold mt-32">The Solution</h1>
                <p className="max-w-[49rem] mt-5">Sparkradix Infratech designed and executed a turnkey solution to construct a 33/11 kV substation along with feeder line installations, transformer mounting, and underground cabling. <br />
                    <div className="font-medium">The Result</div>
                    The project resulted in uninterrupted and stable power supply to over 15,000 households and 35 government offices. Load capacity improved by 42%, and voltage fluctuation was reduced to {"<"} 5%.
                </p>
                <div className="flex gap-4 mt-24">
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
                        className="bg-slate-200 rounded-3xl" />
                </div>
            </div>
            {/* Logomark */}
            <div>
                <h1 className="text-2xl font-bold mt-32 max-w-[30rem]">We started with a full brand refresh, <br />
                    introducing a refined visual identity that
                    included a new logomark</h1>
                <p className="mt-5 max-w-4xl">To bring Sparkradix’s visual presence in line with its ambitious goals, we developed a modular design system rooted in simplicity and structure.
                </p>
                <p className="mt-4 max-w-4xl"> A fully functional, cleanly styled lead form was integrated to encourage conversions and make client engagement seamless. The overall identity balances functionality with modern design aesthetics, positioning Sparkradix as both credible and forward-thinking.
                </p>
                <div className="flex gap-4 mt-24">
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
                        className="bg-slate-200 rounded-3xl" />
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
                <h1 className="mt-24 text-2xl font-bold">Project Description</h1>
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
                        <p className="font-bold mt-16"> – Project Engineer, OPTCL</p>
                    </div>

                </div>
                <Image
                    src=""
                    alt=""
                    height={758}
                    width={1136}
                    className="bg-slate-200 mt-24 rounded-3xl" />
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