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
    <div className="bg-[#F6F7F9] mt-32  md:w-[1136px] md:ml-40 ml-0 px-4 md:px-0">
      <div className="w-[1136px] h-[164px] mx-auto">
      <div >
        <SectionHeading text="Our Work" align="left" className="md:ml-[28.5px] ml-3" />
        <div className="flex md:ml-[20px] ml-0 gap-1">
          <div className="text-md md:text-3xl text-black font-bold">Building Beyond</div>
          <div className="text-md md:text-3xl text-[#145089] font-bold">Blueprints</div>
        </div>
      </div>

            <div className="md:w-[1136px] flex md:flex-row md:mr-0 mr-2 flex-col md:ml-[20px] ml-0 md:gap-20 gap-3 md:justify-between justify-start md:items-center items-start" data-aos="fade-up">
                <p className="max-w-[636px] mt-4 md:mr-[21rem] pr-2 md:text-md text-sm">See how we’ve helped clients turn ambitious visions into tangible, impactful <br /> infrastructure.</p>
                <Button className="md:w-[168px] w-25 h-[40px]  md:h-[40px]" variant="default" bgColor="bg-white" textColor="text-black" >
                    View all projects
                    <div className="rounded-full text-center border border-[#F2F4F8]"><MdArrowOutward className='text-lg' /></div>
          </Button>
        </div>
      </div>
      {/* Project Grid */}
      <div className="md:w-[1136px] md:ml-3 ml-0 flex justify-center items-center">
<div className=" grid md:grid-cols-2 grid-cols-1  gap-[32px] mt-10 px-0">
  <ProjectCard
    image=""
    title="Vertax Labs"
    tags={["SaaS", "Web app"]}
    isMockup
    showArrow={true}
    // cardWidth="w-[254px] h-auto md:w-[524px] "
  />
  <ProjectCard
    image=""
    title="Asterisk"
    tags={["Web3", "CMS"]}
    isMockup
    showArrow={true}
    // cardWidth="w-[350px] h-auto md:w-[480px]"
  />
  <ProjectCard
    image=""
    title="Nova Threads"
    tags={["Crypto", "Web app"]}
    isMockup
    showArrow={true}
    // cardWidth="w-[350px] h-auto md:w-[480px]"
  />
  <ProjectCard
    image=""
    title="CloudDash"
    tags={["Finance", "Web3"]}
    isMockup
    showArrow={true}
    // cardWidth="w-[350px] h-auto md:w-[480px]"
  />
</div>
</div>
</div>
  );
};

export default Index;
