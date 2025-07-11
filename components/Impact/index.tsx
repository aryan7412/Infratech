'use client';

import SectionHeading from "@/components/Heading/SectionHeading";
import Heading from "@/components/Heading/Heading";
import AOS from 'aos';
import 'aos/dist/aos.css'; // 💡 Make sure this is included
import { useEffect } from 'react';

interface StatItem {
  value: string;
  title: string;
  description: string;
}

const StatsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const stats: StatItem[] = [
    {
      value: "1,200+",
      title: "Successful Projects Delivered",
      description:
        "From startups to enterprises, we've built high-performing websites and digital experiences that drive real results.",
    },
    {
      value: "5K+",
      title: "Ad Campaigns Optimized",
      description:
        "We've helped brands lower acquisition costs and boost ROI with data-driven paid media strategies.",
    },
    {
      value: "$10M+",
      title: "Revenue Generated for Clients",
      description:
        "Our strategic design, marketing, and conversion optimization have helped businesses scale and maximize profits.",
    },
  ];

  return (
    <div className="bg-[#f6f7f9] px-4 py-16 mt-10">
      <div data-aos="fade-up">
      <SectionHeading text="Impact" align="center" />
      <div className="mr-32">
        <Heading
          text1="Sparkradix simplifies the process, "
          text2="& delivers results."
          align="center"
        />
      </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 ml-36 mr-32" >
        {stats.map((stat, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150} // 👈 stagger delay per card
            data-aos-duration="1500"
            className="bg-white rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] px-8 py-10 text-center md:text-left"
          >
            <h3 className="text-5xl font-bold text-black">{stat.value}</h3>
            <p className="text-xl font-bold text-[#697289] mt-4 mb-4">
              {stat.title}
            </p>
            <p className="text-sm text-[#50576B] mt-3">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
