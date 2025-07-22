import Image from "next/image"
import { Button } from "../ui/button"
import { MdArrowOutward } from "react-icons/md"
import ProjectCard from "@/components/Cards"


const Hero = () => {
  return (
    <div>
      <div className="relative w-full h-[753px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/HeroPage.png"
          alt="Homepage Image"
          layout="fill"
          objectFit="cover"
          priority
          className="rounded-b-[3rem]"
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
            className="hover:bg-black/85"
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
      {/* Bottom Section */}
      <div className="gap-6 p-6 flex flex-row mt-10 bg-[#F6F7F9]">

        <ProjectCard
          image="/Demo.png"
          title="OrbitCloud"
          description="Web design · development"
          metric="125% Boost in leads"
          showArrow={false}
        />
        <ProjectCard
          image="/Demo.png"
          title="Cloudash"
          description="Web design · development"
          metric="+65% Customer sign-ups"
          showArrow={false}
        />
        <ProjectCard
          image="/Demo.png"
          title="Asterisk inc"
          description="Web design · development"
          showArrow={false}
        />
      </div>

      {/* Our Trusted Partners */}
      <div className="bg-[#F6F7F9] mt-10">
        <p className="text-[#697289] text-2xl text-center">Our Trusted Partners</p>
        <div className="flex items-center justify-center gap-14 mt-4">
          <Image
            src="/NTPC.png"
            alt=""
            width={100}
            height={20}
          />
          <Image
            src="/TPNODL.png"
            alt=""
            width={120}
            height={40}
          />
          <Image
            src="/OdishaShasan.png"
            alt=""
            width={60}
            height={20}
          />
          <Image
            src="/Tata.png"
            alt=""
            width={80}
            height={20}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
