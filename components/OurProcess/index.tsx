"use client";

import React, { useEffect, useRef } from "react";
import Heading from "@/components/Heading/Heading";
import SectionHeading from "@/components/Heading/SectionHeading";
import { TbBorderCornerSquare } from "react-icons/tb";

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
    <div className="relative z-20 w-12 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center font-semibold text-gray-700">
      {number.toString().padStart(2, "0")}
    </div>

    <div className="p-4 bg-white w-full">
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
    const handleScroll = () => {
      const container = containerRef.current;
      const progressBar = progressBarRef.current;

      if (!container || !progressBar) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalHeight = container.offsetHeight;
      const scrollStart = windowHeight; // When the top of the container reaches bottom of viewport
      const scrollEnd = -totalHeight;   // When the bottom of the container reaches top of viewport

      // Scroll progress between 0 and 1
      const progress = Math.min(
        1,
        Math.max(0, (scrollStart - rect.top) / (scrollStart - scrollEnd))
      );

      const maxLineHeight = totalHeight * 0.85; // Match the gray line height
      const lineHeight = progress * maxLineHeight;

      progressBar.style.height = `${lineHeight}px`;
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // run initially

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#F6F7F9] py-20 m-0 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        {/* Left Content */}
        <div className="max-w-lg">
          <SectionHeading className="sticky top-0" text="Our process" />
          <Heading text1="A proven & effective " text2="workflow process." />
          <p className="mt-10 text-[#50576B]">
            We dive deep into your project's objectives, stakeholders, and
            challenges to craft tailored strategies that deliver impactful
            solutions.
          </p>
        </div>

        {/* Right Timeline */}
        <div className="relative w-full" ref={containerRef}>
          {/* Gray line */}
          <div className="absolute left-20 top-10 w-1 h-[85%] bg-gray-200" />

          {/* Scroll-synced Blue line */}
          <div
            ref={progressBarRef}
            className="absolute left-20 top-10 w-1 bg-blue-500 rounded"
            style={{ height: "0px" }}
          />

          {/* Timeline Items */}
          <div className="flex flex-col gap-16 pl-14">
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
