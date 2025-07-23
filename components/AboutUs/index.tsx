import SectionHeading from "@/components/Heading/SectionHeading"
import Heading from "@/components/Heading/Heading"
import Image from "next/image"

const index = () => {
    return (
        <div>
            <div className="md:mt-40 mt-32" data-aos="fade-up">
                <SectionHeading text="About us" align="center" />
                <div className="md:mr-36 ml-[-9rem] md:ml-0">
                    <Heading text1="We take pride in delivering" text2="Exceptional results" align="center" />
                </div>

                <p className="text-[#50576B] text-center max-w-6xl md:ml-[9rem] mt-7 md:mx-0 mx-8">Founded in 2021, <strong>Sparkradix Infratech Private Limited</strong> is a Bhubaneswar-based leader in electrical, civil, and solar energy projects. As a Class “A” Government-approved contractor, we specialize in creating sustainable, high-impact infrastructure that powers communities and drives progress across Odisha and beyond. With over 4 years of expertise, we partner closely with government and private clients to deliver innovative solutions tailored to their unique needs. From robust power distribution systems to eco-friendly solar installations and durable civil constructions, our commitment to quality and sustainability fuels every project we undertake.</p>

                <div className="flex md:ml-[9.5rem] mx-10 md:gap-2 gap-1 mt-20">
                    <div>
                        <Image
                            src="/ElectricGrid.png"
                            alt=""
                            width={558}
                            height={695} />
                    </div>
                    <div className="ml-5">
                        <Image
                            src="/Engineer.png"
                            alt=""
                            width={558}
                            height={337} />
                        <Image
                            src="/SolarPanel.png"
                            alt=""
                            width={558}
                            height={337}
                            className="md:mt-5 mt-2" />
                    </div>
                </div>
                <div className="bg-[#F6F7F9] mt-20">
                    <p className="text-[#697289] md:text-2xl text-xl text-center">Our Trusted Partners</p>
                    <div className="flex items-center justify-center gap-14 mt-4 md:max-w-full max-w-12 mx-auto">
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
        </div>
    )
}

export default index