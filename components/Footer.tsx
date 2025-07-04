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
      <div className="w-full bg-white px-6 py-20 text-center flex flex-col items-center">
        <SectionHeading text="Contact us" align="center" />
        <h1 className="text-3xl font-bold mb-6">
          Join 500+ Clients Powering <br /> Progress with Sparkradix
        </h1>
        <p className="text-sm text-[#50576B] max-w-3xl mb-8">
          Schedule a free consultation call with our team to discuss your project goals,
          explore innovative electrical, civil, and solar solutions, and discover how we can
          drive sustainable growth for your organization.
        </p>
        <Button variant="default" bgColor="bg-black" textColor="text-white">
          Build Tomorrow. Today.
          <div className="rounded-full p-1 border border-[#545457] bg-[#333437] ml-2">
            <MdArrowOutward className="text-lg" />
          </div>
        </Button>
      </div>

      {/* Footer Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-x-16 gap-y-10 px-6 py-16">
        {/* Company Info */}
        <div className="space-y-4 max-w-xs pr-4">
          <Image
            src="/logo.png" // Replace with your logo path
            alt="Sparkradix Logo"
            width={160}
            height={40}
          />
          <p className="text-sm">
            DCB 516, 5th Floor, DLF Cyber City, <br />
            Idco Info Park, Patia, Bhubaneswar, <br />
            Odisha, India, 751024
          </p>
        </div>

        {/* Company Links */}
        <div className="space-y-3 text-sm">
          <h4 className="text-black font-semibold mb-3">Company</h4>
          <p>About Us</p>
          <p>Pricing</p>
          <p>Contact Us</p>
          <p>Projects</p>
        </div>

        {/* Social Links */}
        <div className="space-y-3 text-sm">
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
        <div>
          <h4 className="text-black font-semibold mb-2 text-sm">Newsletter</h4>
          <p className="mb-4 text-sm">
            Stay ahead with design & marketing tips and strategies that drive results.
          </p>
          <div className="flex items-center rounded-full border border-gray-200 overflow-hidden w-full max-w-sm">
            <span className="pl-4 text-gray-400">@</span>
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full px-2 py-2 outline-none bg-transparent text-sm"
            />
            <button className="bg-[#23A0E0] text-white px-4 py-1 rounded-full my-1 mr-2">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-6 px-6 pb-10 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm gap-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-1">
          <MdCopyright className="text-base" />
          2025 Sparkradix Infratech Private Limited
        </div>
        <div className="flex gap-6">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
