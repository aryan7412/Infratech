import SectionHeading from "@/components/Heading/SectionHeading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MdArrowOutward, MdOutlineAlternateEmail } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { TbWorld, TbBuilding } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { LuMessageSquareText } from "react-icons/lu";
import { RiTelegram2Line } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="bg-white py-20 mt-32">
      <div className="grid md:grid-cols-2 gap-20">
        {/* Left Content */}
        <div className="max-w-2xl">
          <div className="ml-[-7rem] md:ml-0">
          <SectionHeading text="Contactus" align="left" />
          </div>
          
          <h1 className="text-5xl font-bold md:mb-6 mb-2 text-[#0F1115] md:ml-[9.5rem] mx-10">Let's collaborate</h1>
          <p className="text-[#50576B] mb-8 md:ml-[9.5rem] mx-10">
            Reach out and let’s explore how we can bring your ideas to life. Whether
            you’re ready to begin or just have questions.
          </p>

          <div className="mb-6 md:ml-[9.5rem] mx-10">
            <p className="text-[#23A0E0] font-bold text-lg">+91 9668906621</p>
            <p className="text-[#23A0E0] text-3xl font-semibold">info@sparkradix.in</p>
            <p className="text-gray-600 mt-2">
              Reach out to us via email or give us a call, we are happy to assist you!
            </p>
          </div>

          <div className="flex flex-col gap-2 md:mt-20 text-sm md:ml-[9.5rem] mx-10 font-semibold">
            <a href="#" className="text-black hover:underline flex items-center gap-1">
              <MdArrowOutward className="text-sm font-semibold" /> Facebook
            </a>
            <a href="#" className="text-black hover:underline flex items-center gap-1">
              <MdArrowOutward className="text-sm font-semibold" /> Instagram
            </a>
            <a href="#" className="text-black hover:underline flex items-center gap-1">
              <MdArrowOutward className="text-sm font-semibold" /> LinkedIn
            </a>
          </div>
        </div>

        {/* Right Content - Contact Form */}
        <form className="flex flex-col gap-4 md:mt-7 max-w-md mx-10">
          <div className="relative">
            <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input type="text" placeholder="Name" className="pl-10" />
          </div>

          <div className="relative">
            <MdOutlineAlternateEmail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input type="email" placeholder="Email" className="pl-10" />
          </div>

          <div className="flex gap-4">
            <div className="relative w-1/2">
              <TbBuilding className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input type="text" placeholder="Company name" className="pl-10" />
            </div>
            <div className="relative w-1/2">
              <IoPhonePortraitOutline className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input type="tel" placeholder="Phone" className="pl-10" />
            </div>
          </div>

          <div className="relative">
            <LuMessageSquareText className="absolute left-4 top-5 text-gray-400" />
            <Textarea placeholder="What can we help you with?" rows={5} className="pl-10 pt-4" />
          </div>

          <div className="relative">
          <RiTelegram2Line className="absolute left-[17.5rem] top-7 text-white" />
          </div>
          <Button type="submit" className=" text-white bg-[#145089] hover:bg-[#133c64] rounded-full px-6 py-3">
            Send Message
          </Button>

          <div className="mt-10 grid gap-6">
            <div className="flex gap-4 items-start">
              <div className="bg-[#FFF5F5] p-3 rounded-full">
                <GrMapLocation className="text-[#23A0E0]" />
              </div>
              <div>
                <h4 className="text-[#697289] text-sm">Address</h4>
                <p className="text-[#50576B] text-[0.9rem]">
                  DCB 516, 5th Floor, DLF Cyber City, Idco Info Park, Patia,<br />
                  Bhubaneswar, Odisha, India, 751024
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#FFF5F5] p-3 rounded-full">
                <TbWorld className="text-[#23A0E0]" />
              </div>
              <div>
                <h4 className=" text-[#697289]">Office Hours</h4>
                <p className="text-[#50576B] text-sm">Monday to Saturday: 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;