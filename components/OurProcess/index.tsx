"use client"

import Heading from "@/components/Heading/Heading";
import SectionHeading from "@/components/Heading/SectionHeading";
import { TbBorderCornerSquare } from "react-icons/tb";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Step {
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    title: "Discover & Strategy",
    description:
      "Through in-depth consultations and site assessments, we define a tailored strategy that aligns with your project goals and regulatory standards.",
  },
  {
    title: "Plan & Prioritize",
    description:
      "We outline project milestones, timelines, and deliverables, ensuring a transparent and efficient workflow from inception to completion.",
  },
  {
    title: "Design & Engineer",
    description:
      "Our team crafts innovative designs, using cutting-edge technology to ensure efficiency, durability, and compliance.",
  },
  {
    title: "Build & Implement",
    description:
      "With precision and expertise, we execute projects, delivering robust infrastructure and energy solutions optimized for performance.",
  },
  {
    title: "Support & Enhance",
    description:
      "Post-completion, we provide ongoing maintenance and upgrades, ensuring your infrastructure evolves to meet future needs.",
  },
];

interface TimelineItemProps {
  number: number;
  title: string;
  description: string;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  number,
  title,
  description,
  isLast,
}) => (
  <div className="flex items-start relative min-h-[100px]">
    {/* Dot and Line */}
    <div className="flex flex-col items-center mr-6 relative">
      <div className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center text-sm font-semibold text-gray-700 z-10">
        {number.toString().padStart(2, "0")}
      </div>
      {/* Absolutely positioned vertical line */}
      {!isLast && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-px h-[calc(100%_-_2rem)] bg-blue-500 z-0" />
      )}
    </div>

    {/* Content */}
    <div className="pb-14" data-aos="fade-up">
      <h3 className="text-lg font-bold text-black flex items-center gap-2 relative">
        {title}
        <TbBorderCornerSquare
          className="absolute -top-1 -right-3 text-[#3EABE3] text-xs rotate-90"
          strokeWidth={3}
        />
      </h3>
      <p className="text-gray-600 mt-2 max-w-md">{description}</p>
    </div>
  </div>
);

const ProcessSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);
  return (
    <div className="flex flex-col md:flex-row gap-40 bg-[#F6F7F9] mt-10">
      {/* Left Section */}
      <div className="max-w-lg ">
        <SectionHeading text="Our process" align="left" />
        <Heading
          text1="A proven & effective "
          text2="workflow process."
          align="left"
        />
        <p className="ml-40 mt-10 text-[#50576B]">
          We dive deep into your project's objectives, stakeholders, and
          challenges to craft tailored strategies that deliver impactful
          solutions.
        </p>
      </div>

      {/* Right Section (timeline column fix) */}
      <div className="mt-10 flex flex-col gap-20 justify-between">
        {steps.map((step, index) => (
          <TimelineItem
            key={index}
            number={index + 1}
            title={step.title}
            description={step.description}
            isLast={index === steps.length - 1}
            
          />
        ))}
      </div>
    </div>
  );
};

export default ProcessSection;
