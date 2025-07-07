"use client"

import SectionHeading from "@/components/Heading/SectionHeading";
import Heading from "@/components/Heading/Heading";
import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";
import { useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

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


const FAQItem = ({
    question,
    answer,
    isOpen,
    onToggle,
}: {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}) => (
    <div
        className={`border-b border-[#E6E8EC] py-7 cursor-pointer transition-all duration-300 max-w-lg`}
        onClick={onToggle}
    >
        <div className="flex justify-between items-start">
            <h4 className="text-sm md:text-base font-semibold text-[#1B1E29] max-w-lg">
                {question}
            </h4>
            <div className="text-xl text-[#1B1E29]">
                {isOpen ? <IoIosRemove /> : <IoIosAdd />}
            </div>
        </div>
        {isOpen && answer && (
            <p className="text-sm text-[#4B5563] mt-3 max-w-lg">{answer}</p>
        )}
    </div>
);

const index = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="flex flex-col md:flex-row bg-[#F6F7F9] pb-20 gap-44 mt-20">
            {/* Left Section */}
            <div className="max-w-lg">
                <SectionHeading text="FAQ's" align="left" />
                <Heading
                    text1="Have questions,"
                    text2="We got answers."
                    align="left"
                />
                <p className="ml-40 mt-5 text-[#50576B] text-sm">
                    Everything you need to know about our process, and how we deliver
                    results.
                </p>
                <div className="mt-[19.25rem] bg-white w-[28.125rem] h-[10.75rem] ml-40 rounded-3xl p-7 shadow-md">
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
            <div className="flex-1 mt-10">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onToggle={() =>
                            setOpenIndex(openIndex === index ? -1 : index)
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default index;
