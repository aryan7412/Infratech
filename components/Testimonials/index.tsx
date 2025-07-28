import Heading from "@/components/Heading/Heading";
import SectionHeading from "@/components/Heading/SectionHeading";
import Image from "next/image";
import { RiDoubleQuotesR, RiStarFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";
import { TbMessageChatbotFilled } from "react-icons/tb";

const Testimonials = () => {
    return (
        <div className="bg-[#F6F7F9] w-full pb-16 pt-10 px-4 mt-10">
            <div data-aos="fade-up">
            <SectionHeading text="Testimonials" align="center" />
            <div className="md:mr-32 mr-0">
            <Heading
                text1="Results that speaks volume"
                text2="Read success stories"
                align="center"
            />
            </div>
            <div className="flex justify-center mt-4 text-center">
                <p className="text-[#50576B] text-md max-w-5xl">
                    We transform ambitious visions into reality with innovative electrical,
                    civil, and solar solutions. Hear from our clients about how our
                    expertise and dedication have powered their progress.
                </p>
            </div>
            </div>

            {/* Grid of Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mx-auto md:ml-36 max-w-6xl">
                {/* Left column (Card 1 spans 2 rows) */}
                <div className="md:row-span-2 md:w-[35rem] min-w-[120px] md:h-[35.5rem] h-[25rem] bg-white rounded-3xl p-6 flex flex-col justify-between shadow-md" data-aos="fade-up" data-aos-delay="400">
                    <div>
                        <div className="text-5xl font-bold text-[#316698]">10X</div>
                        <div className="text-lg text-[#50576B] font-bold mt-1 mb-4">Boost in energy efficiency</div>
                        <RiDoubleQuotesR className="text-[#1DA1F2] text-2xl" />
                        <p className="text-md text-[#50576B] mt-3">
                            Sparkradix delivered a state-of-the-art solar power system for our
                            rural electrification project. Their professionalism and commitment
                            to quality ensured reliable energy for thousands of households.
                        </p>
                    </div>
                    <div className="flex items-center gap-4 mt-6">
                        <Image
                            src=""
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
                <div className=" md:w-[35rem] min-w-[120px] min-h-[17.25rem] bg-white rounded-3xl p-6 flex flex-col justify-between shadow-md mb-[1.5rem]" data-aos="fade-up">
                    <div>
                        <div className="flex gap-x-3">
                        <div className="text-3xl font-bold text-[#316698]">2X</div>
                        <div className="text-lg text-[#50576B] font-bold mt-1 mb-4">sustainable Infrastructure</div>
                        </div>
                        <RiDoubleQuotesR className="text-[#1DA1F2] text-2xl" />
                        <p className="text-base text-[#50576B] mt-3">
                            Working with Sparkradix on our industrial park was a game-changer.
                            Their civil construction expertise and timely execution helped us
                            establish a thriving business hub.
                        </p>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                        <Image
                            src=""
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
                <div className="md:col-span-1 grid md:grid-cols-2 gap-6 grid-cols-1">
                    {/* Card 3 */}
                    <div className="md:w-[16.15rem] min-w-[150px] min-h-[16.375rem] bg-white rounded-3xl p-4 flex flex-col justify-between shadow-md" data-aos="fade-up" data-aos-delay="400">
                        <RiDoubleQuotesR className="text-pink-400 text-2xl" />
                        <p className="text-sm text-[#50576B] mt-3">
                            Working with Sparkradix on our industrial park was a game-changer.
                            Their civil construction expertise and timely execution helped us
                            establish a thriving business hub.
                        </p>
                        <div className="flex items-center gap-3 mt-4">
                            <Image
                                src=""
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
                    <div className="md:w-[16.15rem] min-w-[150px] min-h-[16.375rem] bg-white rounded-3xl p-4 flex flex-col justify-between shadow-md ml-[0.4rem]" data-aos="fade-up" data-aos-delay="500">
                        <RiDoubleQuotesR className="text-pink-400 text-2xl" />
                        <p className="text-sm text-[#50576B] mt-3">
                            Working with Sparkradix on our industrial park was a game-changer.
                            Their civil construction expertise and timely execution helped us
                            establish a thriving business hub.
                        </p>
                        <div className="flex items-center gap-3 mt-4">
                            <Image
                                src=""
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
            <div className="mt-12 px-4 md:ml-32 ml-5">
                <div className="flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto">

                    {/* Left Section */}
                    <div className="flex flex-wrap justify-center items-center gap-4 text-[#50576B] text-sm md:mr-[31.5rem]">
                        <p className="whitespace-nowrap">1500 satisfied clients love our services</p>

                        <div className="flex  items-center gap-2">
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

=======
                    <Button className="mt-2 " variant="default" bgColor="bg-white" textColor="text-black">

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
