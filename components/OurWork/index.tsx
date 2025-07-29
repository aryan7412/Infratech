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

            <div className="flex md:flex-row flex-col md:ml-40 ml-3 md:gap-20 gap-3 justify-start items-start" data-aos="fade-up">
                <p className="mt-4 md:mr-[21rem] mr-0">See how we’ve helped clients turn ambitious visions into tangible, impactful <br /> infrastructure.</p>
                <Button className="md:w-[168px] w-25 h-[40px]  md:h-[40px]" variant="default" bgColor="bg-white" textColor="text-black" >
                    View all projects
                    <div className="rounded-full text-center border border-[#F2F4F8]"><MdArrowOutward className='text-lg' /></div>
          </Button>
        </div>

      {/* Project Grid */}
      <div className="w-full max-w-screen-xl mx-auto justify-center items-center">
<div className=" grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-y-8 gap-x-4 md:gap-x-12 mt-10 md:px-8 px-2">
  <ProjectCard
    image=""
    title="Vertax Labs"
    tags={["SaaS", "Web app"]}
    isMockup
    showArrow={true}
    cardWidth="w-[350px] h-auto md:w-[480px]"
  />
  <ProjectCard
    image=""
    title="Asterisk"
    tags={["Web3", "CMS"]}
    isMockup
    showArrow={true}
    cardWidth="w-[350px] h-auto md:w-[480px]"
  />
  <ProjectCard
    image=""
    title="Nova Threads"
    tags={["Crypto", "Web app"]}
    isMockup
    showArrow={true}
    cardWidth="w-[350px] h-auto md:w-[480px]"
  />
  <ProjectCard
    image=""
    title="CloudDash"
    tags={["Finance", "Web3"]}
    isMockup
    showArrow={true}
    cardWidth="w-[350px] h-auto md:w-[480px]"
  />
</div>
</div>
</div>
  );
};

export default Index;
