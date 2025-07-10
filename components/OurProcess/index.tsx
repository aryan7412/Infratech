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
  const animationRef = useRef<number | null>(null);
  const animatedHeightRef = useRef(0);
  const targetHeightRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateTargetHeight = () => {
      const containerTop = container.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      const maxVisible = container.offsetHeight;
      const maxHeight = 750;

      const visibleHeight = Math.min(
        Math.min(maxVisible, maxHeight),
        Math.max(0, viewportHeight - containerTop)
      );

      targetHeightRef.current = visibleHeight;
    };

    const animate = () => {
      const diff = targetHeightRef.current - animatedHeightRef.current;
      const easing = 0.02;
      const nextHeight = animatedHeightRef.current + diff * easing;

      if (progressBarRef.current) {
        progressBarRef.current.style.height = `${nextHeight}px`;
      }

      animatedHeightRef.current = nextHeight;

      if (Math.abs(diff) >= 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    const onScroll = () => {
      updateTargetHeight();
      cancelAnimationFrame(animationRef.current!);
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", onScroll);
    updateTargetHeight();
    animate();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationRef.current!);
    };
  }, []);

  return (
    <div className="bg-[#F6F7F9] py-20 m-0 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        {/* Left Content */}
        <div className="max-w-lg">
          <SectionHeading className="sticky top-0" text="Our process" />
          <Heading
            text1="A proven & effective "
            text2="workflow process."
          />
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

          {/* Animated Blue line */}
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
