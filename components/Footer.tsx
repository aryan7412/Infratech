'use client';

import SectionHeading from '@/components/Heading/SectionHeading';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MdArrowOutward, MdCopyright } from 'react-icons/md';
import { FiArrowUpRight } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="bg-white pt-0">
      {/* Contact CTA Section */}
      <div className="w-full bg-white px-6 py-10 text-center flex flex-col items-center">
        <SectionHeading text="Contact us" align="center" />
        <h1 className="text-3xl font-bold mb-6">
          Join 500+ Clients Powering <br /> Progress with Sparkradix
        </h1>
        <p className="text-md text-[#50576B]  mb-8">
          Schedule a free consultation call with our team to discuss your project goals,
          explore innovative electrical, civil, <br /> and solar solutions, and discover how we can
          drive sustainable growth <br /> for your organization.
        </p>
        <div className="flex items-center justify-center gap-14 mt-4 mb-14">
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
        <Button variant="default" bgColor="bg-black" textColor="text-white">
          Build Tomorrow. Today.
          <div className="rounded-full p-1 border border-[#545457] bg-[#333437] ml-2">
            <MdArrowOutward className="text-lg" />
          </div>
        </Button>
        <Image
        src="/Sparkradix_Logo.png"
        alt='Sparkradix_Logo'
        width={1100}
        height={300}
        className='mt-10 fade-mask-b' />
      </div>

      {/* Footer Grid */}
      <footer className="bg-white text-[#50576B] max-w-6xl ml-36">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-x-16 gap-y-10 px-6 pt-14">
        {/* Company Info */}
        <div className="space-y-4 max-w-xs pr-4">
          <Image
            src="/logo.png"
            alt="Sparkradix Logo"
            width={160}
            height={40}
          />
          <p className="text-sm leading-relaxed">
            DCB 516, 5th Floor, DLF Cyber City, <br />
            Idco Info Park, Patia, Bhubaneswar, <br />
            Odisha, India, 751024
          </p>
        </div>

        {/* Company Links */}
        <div className="space-y-3 text-sm font-semibold">
          <h4 className="text-black font-semibold mb-3">Company</h4>
          <p>About Us</p>
          <p>Pricing</p>
          <p>Contact Us</p>
          <p>Projects</p>
        </div>

        {/* Social Links */}
        <div className="space-y-3 text-sm font-semibold">
          <h4 className="text-black font-semibold mb-3">Socials</h4>
          <p className="flex items-center gap-1">
            Facebook <FiArrowUpRight />
          </p>
          <p className="flex items-center gap-1">
            Instagram <FiArrowUpRight />
          </p>
          <p className="flex items-center gap-1">
            LinkedIn <FiArrowUpRight />
          </p>
        </div>

        {/* Newsletter */}
        <div className="text-sm">
          <h4 className="text-black font-semibold mb-2">Newsletter</h4>
          <p className="mb-4 leading-relaxed">
            Stay ahead with design & marketing tips and strategies that drive results.
          </p>
          <div className="flex items-center rounded-full border border-[#E5E7EB] overflow-hidden w-full max-w-sm">
            <span className="pl-4 text-gray-400">@</span>
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full px-3 py-2 outline-none bg-transparent text-sm placeholder:text-gray-400"
            />
            <button className="bg-[#23A0E0] text-white px-5 py-1.5 rounded-full my-1 mr-2 text-lg">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-6 px-6 pb-10 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm gap-4 max-w-7xl mx-auto  font-semibold">
        <div className="flex items-center gap-1">
          <MdCopyright className="text-base" />
          2025 Sparkradix Infratech Private Limited
        </div>
        <div className="flex gap-6">
          <span className="cursor-pointer hover:text-black transition">Privacy Policy</span>
          <span className="cursor-pointer hover:text-black transition">Terms of Service</span>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
