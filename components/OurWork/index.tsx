'use client';

import SectionHeading from "@/components/Heading/SectionHeading";
import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";
import ProjectCard from "@/components/Cards";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="bg-[#F6F7F9] mt-32 w-full md:mx-0 px-4 md:px-0">
      <div>
        <SectionHeading text="Our Work" align="left" className="md:ml-40 ml-6" />
        <div className="flex md:ml-40 ml-3 gap-1">
          <div className="text-md md:text-3xl text-black font-bold">Building Beyond</div>
          <div className="text-md md:text-3xl text-[#145089] font-bold">Blueprints</div>
        </div>
      </div>

      {/* Description + Button */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:ml-40 mt-4 ml-3">
        <p className="text-sm md:text-base md:mr-[21rem]">
          See how we’ve helped clients turn ambitious visions into tangible, impactful <br className="hidden md:block" />
          infrastructure.
        </p>
        <div className="md:mr-[120px]">
          <Button
            variant="default"
            bgColor="bg-white"
            textColor="text-black"
            className="w-[168px] h-[40px]"
          >
            View all projects
            <div className="rounded-full p-1 border border-[#F2F4F8]">
              <MdArrowOutward className="text-lg" />
            </div>
          </Button>
        </div>
      </div>

      {/* Project Grid */}
      {/* Project Grid */}
<div className="flex md:flex-row flex-col justify-center items-center gap-4 mt-10 md:px-8 px-2">
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
  );
};

export default Index;
