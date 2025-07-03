import SectionHeading from "@/components/Heading/SectionHeading"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MdArrowOutward } from "react-icons/md"

const footer = () => {
  return (
    <div className="bg-[#F6F7F9]">
      <div className="ml-4 bg-white w-[98%] h-96 rounded-t-[3rem] flex flex-col items-center justify-center text-center">
        <SectionHeading text="Contact us" align="center" />
        <h1 className="text-3xl font-bold text-center mb-7">Join 500+ Clients Powering <br /> Progress with Sparkradix</h1>
        <p className="text-sm text-[#50576B] text-center mb-10">Schedule a free consultation call with our team to discuss your project goals, explore innovative electrical, civil, <br /> and solar solutions, and discover how we can drive sustainable growth <br /> for your organization.</p>
        {/* <Image
        src=""
        alt=""
        width={}
        height={} /> */}
        <Button variant="default" bgColor="bg-black" textColor="text-white">
          Build Tomorrow. Today.
          <div className="rounded-full p-1 border border-[#545457] bg-[#333437]"><MdArrowOutward className='text-lg' /></div>
        </Button>
        {/* <h1 className="text-[172px] font-bold bg-gradient-to-t from-white to-[#dce3ea] text-transparent bg-clip-text tracking-wide">SparkradiX</h1> */}
      </div>
    </div>
  )
}

export default footer