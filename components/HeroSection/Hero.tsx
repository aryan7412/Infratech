import Image from "next/image"
import { Button } from "../ui/button"
import { MdArrowOutward } from "react-icons/md"

const Hero = () => {
  return (
    <div className="relative w-full h-[753px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/HeroPage.png"
        alt="Homepage Image"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 mt-[7.5rem]">
          Engineering Trust. Powering Progress.
        </h1>
        <p className="text-sm md:text-base max-w-[640px] mb-8 text-[#E1E1E1]">
          Civil & Electrical Infrastructure Experts Delivering Smart, Scalable & <br /> Government-Grade Solutions.
        </p>
        
        <Button
          variant="default"
          bgColor="bg-black"
          textColor="text-white"
        >
          Build Tomorrow. Today.
          <div className="bg-[#333437] rounded-full p-1 border border-[#545457]">
            <MdArrowOutward className="text-white text-sm" />
          </div>
        </Button>
      </div>

      {/* Overlay background tint if needed */}
      <div className="absolute bg-black/20 z-[1]" />
    </div>
  )
}

export default Hero
