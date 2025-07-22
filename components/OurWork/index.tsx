'use client';

import SectionHeading from "@/components/Heading/SectionHeading"
import { Button } from "@/components/ui/button"
import { MdArrowOutward } from "react-icons/md"
import ProjectCard from "@/components/Cards"
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
        <div className="bg-[#F6F7F9] mt-32">
            <div>
                <SectionHeading text="Our Work" align="left" className="ml-40" />
                <div className="flex gap-x-1 ml-40">
                    <div className="text-3xl text-black font-bold">Building Beyond</div>
                    <div className="text-3xl text-[#145089] font-bold">Blueprints</div>
                </div>
            </div>

            <div className="flex ml-40 gap-20">
                <p className="mt-4 mr-[21rem]">See how we’ve helped clients turn ambitious visions into tangible, impactful <br /> infrastructure.</p>
                <Button variant="default" bgColor="bg-white" textColor="text-black" >
                    View all projects
                    <div className="rounded-full p-1 border border-[#F2F4F8]"><MdArrowOutward className='text-lg' /></div>
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 ml-[8.5rem] mr-28">
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
    )
}

export default index