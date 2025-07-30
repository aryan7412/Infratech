"use client";

import React, { useEffect, useRef } from "react";
import Heading from "@/components/Heading/Heading";
import SectionHeading from "@/components/Heading/SectionHeading";
import { TbBorderCornerSquare } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";

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
}

const TimelineItem: React.FC<TimelineItemProps> = ({ number, title, description }) => (
  <div className="relative flex items-center gap-6">
    <div className="relative md:mb-[88px] mb-[120px] z-20 w-12 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center font-semibold text-gray-700">
      {number.toString().padStart(2, "0")}
    </div>
    <div className="p-4 bg-transparent w-full" data-aos="fade-up">
      <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 relative">
        {title}
        <TbBorderCornerSquare
          className="absolute -top-1 -right-1 text-[#2f89de] text-xs rotate-90"
          strokeWidth={3}
        />
      </h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  </div>
);

const ProcessSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleScroll = () => {
      const container = containerRef.current;
      const progressBar = progressBarRef.current;

      if (!container || !progressBar) return;

      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerTop = containerRect.top;
      const containerHeight = container.offsetHeight;
      const scrollable = windowHeight + containerHeight;

      const progress = Math.min(
        1,
        Math.max(0, (windowHeight - containerTop) / scrollable)
      );

      const maxHeight = containerHeight * 0.85;
      progressBar.style.height = `${progress * maxHeight}px`;
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#F6F7F9] md:w-[1136px] md:ml-40 py-20 m-0 px-4">
      <div className="relative mx-auto flex flex-col md:flex-row gap-20">
        {/* Left Content */}
        <div className="max-w-lg sticky top-20 self-start">
          <SectionHeading className="md:ml-0 ml-4" text="Our process" />
          <div className="">
            <h2 className="text-4xl font-bold text-[#2D2F33]">A proven & effective</h2>
            <h2 className="text-4xl font-bold text-[#7B8398]">workflow process.</h2>
          </div>
          {/* <Heading
            className1="text-xl md:text-4xl"
            text1="A proven & effective "
            className2="text-xl md:text-4xl"
            text2="workflow process."
            className3="ml-0"
          /> */}
          <p className="md:mt-10 mt-2 md:text-sm text-xs text-[#50576B]">
            We dive deep into your project's objectives, stakeholders, and
            challenges to craft tailored strategies that deliver impactful
            solutions.
          </p>
        </div>

        {/* Right Timeline */}
        <div className="relative w-full" ref={containerRef}>
          {/* Gray line */}
          <div className="absolute md:left-20 left-5 top-5 w-1 h-[85%] bg-gray-200" />

          {/* Blue Scroll Line */}
          <div
            ref={progressBarRef}
            className="absolute md:left-20 left-5 top-5 w-1 bg-blue-500 rounded"
            style={{ height: "0px" }}
          />

          {/* Timeline Items */}
          <div className="flex flex-col gap-16 md:pl-14">
            {steps.map((step, index) => (
              <TimelineItem
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
