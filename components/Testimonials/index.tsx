import Heading from "@/components/Heading/Heading";
import SectionHeading from "@/components/Heading/SectionHeading";
import Image from "next/image";
import { RiDoubleQuotesR, RiStarFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";
import { TbMessageChatbotFilled } from "react-icons/tb";

const Testimonials = () => {
    return (
        <div className="bg-[#F6F7F9] pb-16 pt-10 px-4">
            <SectionHeading text="Testimonials" align="center" />
            <Heading
                text1="Results that speaks volume"
                text2="Read success stories"
                align="center"
            />
            <div className="flex justify-center mt-4 text-center">
                <p className="text-[#50576B] text-sm max-w-2xl">
                    We transform ambitious visions into reality with innovative electrical,
                    civil, and solar solutions. Hear from our clients about how our
                    expertise and dedication have powered their progress.
                </p>
            </div>

            {/* Grid of Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 mx-auto ml-36 max-w-6xl">
                {/* Left column (Card 1 spans 2 rows) */}
                <div className="row-span-2 w-[35rem] h-[35.5rem] bg-white rounded-3xl p-6 flex flex-col justify-between shadow-md">
                    <div>
                        <div className="text-5xl font-bold text-[#1B1C57]">10X</div>
                        <div className="text-lg text-[#3A3A3A] mt-1 mb-4">Boost in energy efficiency</div>
                        <RiDoubleQuotesR className="text-[#1DA1F2] text-2xl" />
                        <p className="text-sm text-[#50576B] mt-3">
                            Sparkradix delivered a state-of-the-art solar power system for our
                            rural electrification project. Their professionalism and commitment
                            to quality ensured reliable energy for thousands of households.
                        </p>
                    </div>
                    <div className="flex items-center gap-4 mt-6">
                        <Image
                            src="/testimonials/sanjay-das.jpg"
                            alt="Mr. Sanjay Das"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                        <div>
                            <div className="font-medium text-[#1B1C57]">Mr. Sanjay Das</div>
                            <div className="text-sm text-[#50576B]">Odisha State Energy Department</div>
                        </div>
                    </div>
                </div>

                {/* Card 2 (Top Right) */}
                <div className="w-[35rem] h-[17.25rem] bg-white rounded-3xl p-6 flex flex-col justify-between shadow-md mb-[1.5rem]">
                    <div>
                        <div className="text-3xl font-bold text-[#1B1C57]">2X</div>
                        <div className="text-lg text-[#3A3A3A] mt-1 mb-4">Sustainable Infrastructure</div>
                        <RiDoubleQuotesR className="text-[#1DA1F2] text-2xl" />
                        <p className="text-sm text-[#50576B] mt-3">
                            Working with Sparkradix on our industrial park was a game-changer.
                            Their civil construction expertise and timely execution helped us
                            establish a thriving business hub.
                        </p>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                        <Image
                            src="/testimonials/priya-sharma.jpg"
                            alt="Ms. Priya Sharma"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                        <div>
                            <div className="font-medium text-[#1B1C57]">Ms. Priya Sharma</div>
                            <div className="text-sm text-[#50576B]">Industrial Development Corporation</div>
                        </div>
                    </div>
                </div>

                {/* Row of 2 small cards below */}
                <div className="col-span-1 grid grid-cols-2 ml-4">
                    {/* Card 3 */}
                    <div className="w-[16.15rem] h-[16.375rem] bg-white rounded-3xl p-4 flex flex-col justify-between shadow-md">
                        <RiDoubleQuotesR className="text-pink-400 text-2xl" />
                        <p className="text-sm text-[#50576B] mt-3">
                            Working with Sparkradix on our industrial park was a game-changer.
                            Their civil construction expertise and timely execution helped us
                            establish a thriving business hub.
                        </p>
                        <div className="flex items-center gap-3 mt-4">
                            <Image
                                src="/testimonials/rajesh-patel.jpg"
                                alt="Mr. Rajesh Patel"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <div>
                                <div className="text-sm font-medium text-[#1B1C57]">Mr. Rajesh Patel</div>
                                <div className="text-xs text-[#50576B]">CEO, Greentech</div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="w-[16.15rem] h-[16.375rem] bg-white rounded-3xl p-4 flex flex-col justify-between shadow-md ml-[0.4rem]">
                        <RiDoubleQuotesR className="text-pink-400 text-2xl" />
                        <p className="text-sm text-[#50576B] mt-3">
                            Working with Sparkradix on our industrial park was a game-changer.
                            Their civil construction expertise and timely execution helped us
                            establish a thriving business hub.
                        </p>
                        <div className="flex items-center gap-3 mt-4">
                            <Image
                                src="/testimonials/rajesh-patel.jpg"
                                alt="Mr. Rajesh Patel"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <div>
                                <div className="text-sm font-medium text-[#1B1C57]">Mr. Rajesh Patel</div>
                                <div className="text-xs text-[#50576B]">CEO, Greentech</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Bottom Section */}
            <div className="mt-12 px-4 ml-32">
                <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto">

                    {/* Left Section */}
                    <div className="flex flex-wrap items-center gap-4 text-[#50576B] text-sm mr-[31.5rem]">
                        <p className="whitespace-nowrap">1500 satisfied clients love our services</p>

                        <div className="flex items-center gap-2">
                            <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
                                <TbMessageChatbotFilled className="text-lg text-black" />
                            </div>

                            <div>
                                <div className="flex items-center text-black font-semibold gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <RiStarFill key={i} className="text-[#1B1C57]" />
                                    ))}
                                    <span className="ml-1 text-[#1B1C57]">4.9</span>
                                </div>
                                <div className="text-[#50576B]">Based on 1.5k reviews</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <Button variant="default" bgColor="bg-white" textColor="text-black">
                        View all reviews
                        <div className="rounded-full p-1 border border-[#F2F4F8] ml-2">
                            <MdArrowOutward className="text-lg" />
                        </div>
                    </Button>
                </div>
            </div>

        </div>
    );
};

export default Testimonials;
