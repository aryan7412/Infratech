"use client"

import SectionHeading from "@/components/Heading/SectionHeading";
import Heading from "@/components/Heading/Heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";

const faqs = [
  {
    question: "What types of projects does Sparkradix Infratech undertake?",
    answer:
      "We specialize in electrical infrastructure, civil construction, and solar energy projects. This includes power distribution systems, road and building construction, solar panel installations, and maintenance services for both government and private clients.",
  },
  {
    question: "How does Sparkradix ensure project quality and compliance?",
    answer:
      "As a Class “A” Government-approved contractor, we adhere to strict quality standards and regulatory requirements. Our team uses advanced technology and rigorous quality checks to deliver durable, compliant solutions.",
  },
  {
    question: "Can you handle large-scale government projects?",
    answer:
      "With over 7 years of experience, we’ve successfully delivered numerous government projects across Odisha, including rural electrification, infrastructure development, and smart grid implementations.",
  },
  {
    question: "How do your solar energy solutions benefit clients?",
    answer:
      "Our solar solutions, from rooftop systems to large-scale farms, reduce energy costs, enhance sustainability, and support India’s renewable energy goals. We tailor each project to maximize efficiency and long-term savings.",
  },
  {
    question: "What is your process for starting a new project?",
    answer:
      "We begin with a detailed consultation to understand your goals, followed by site assessments, customized design, precise execution, and ongoing support to ensure your project’s success.",
  },
  {
    question: "Do you provide maintenance services after project completion?",
    answer:
      "Yes, we offer comprehensive maintenance and upgrade services to ensure your infrastructure and energy systems remain efficient, reliable, and future-ready.",
  },
  {
    question: "How do you ensure timely project delivery?",
    answer:
      "Our proven workflow includes clear milestones, transparent communication, and a dedicated team to manage timelines, ensuring projects are completed on schedule without compromising quality.",
  },
];

const FAQSection = () => {
  return (
    <div className="flex w-full flex-col md:flex-row bg-[#F6F7F9] pb-20 gap-44  mt-20">
      {/* Left Section */}
      <div className="md:max-w-lg ">
        <div className="md:ml-0 ml-3">
          <SectionHeading text="FAQ's" className="md:ml-[9rem] ml-[2rem]" align="left" />
          <Heading text1="Have questions, "className1="md:ml-0 ml-[1.5rem]" text2="We got answers." className2="md:ml-0 ml-[1.5rem]" align="left" />
        </div>
        <p className="md:ml-[9.2rem] mx-7 mt-5 text-[#50576B] text-sm text-left">
          Everything you need to know about our process, and how we deliver
          results.
        </p>
        <div className="md:mt-[22rem] mt-10 bg-white md:w-[28.125rem] w-[23rem] h-[10.75rem] md:ml-40 ml-2 rounded-3xl p-7 shadow-md">
          <p className="text-xl font-bold mb-2">Can't find your answer?</p>
          <p className="text-sm mb-4 text-[#6B7280]">
            Get in touch with our support team
          </p>
          <Button
            variant="default"
            bgColor="bg-white"
            textColor="text-black"
            className="border border-[#D9DFE8]"
          >
            Contact Us
            <div className="rounded-full p-1 border border-[#F2F4F8] ml-2">
              <MdArrowOutward className="text-lg" />
            </div>
          </Button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 md:mt-10 mt-[-10rem]">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="md:w-[550px] w-[330px] mx-10"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#4B5563]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;