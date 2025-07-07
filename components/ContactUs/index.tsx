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
      <div className="grid md:grid-cols-2 gap-20" data-aos="fade-up">
        {/* Left Content */}
        <div className="max-w-2xl">
          <SectionHeading text="Book a call" align="left" />
          <h1 className="text-5xl font-bold mb-6 text-[#0F1115] ml-[9.5rem]">Let's collaborate</h1>
          <p className="text-[#50576B] mb-8 ml-[9.5rem]">
            Reach out and let’s explore how we can bring your ideas to life. Whether
            you’re ready to begin or just have questions.
          </p>

          <div className="mb-6 ml-[9.5rem]">
            <p className="text-[#23A0E0] font-bold text-lg">+91 9668906621</p>
            <p className="text-[#23A0E0] text-3xl font-semibold">info@sparkradix.in</p>
            <p className="text-gray-600 mt-2">
              Reach out to us via email or give us a call, we are happy to assist you!
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-20 text-sm ml-[9.5rem] font-semibold">
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
        <form className="flex flex-col gap-4 mt-7 max-w-md">
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />

          <div className="flex gap-4">
            <Input type="text" placeholder="Company name" className="w-1/2" />
            <Input type="tel" placeholder="Phone" className="w-1/2" />
          </div>

          <Textarea placeholder="What can we help you with?" rows={5} />

          <Button type="submit" className="mt-4 text-white bg-[#174574] hover:bg-[#133c64] rounded-full px-6 py-3">
            Send Message <span className="ml-2">\u2709\uFE0F</span>
          </Button>

          <div className="mt-10 grid gap-6">
            <div className="flex gap-4 items-start">
              <div className="bg-[#FFF5F5] p-3 rounded-full">
                <GrMapLocation className="text-[#23A0E0]" />
              </div>
              <div>
                <h4 className="font-bold text-gray-700">Address</h4>
                <p className="text-gray-600 text-sm">
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
                <h4 className="font-bold text-gray-700">Office Hours</h4>
                <p className="text-gray-600 text-sm">Monday to Saturday: 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;