"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MdArrowOutward, MdKeyboardArrowDown } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full">
      {/* Desktop Menu */}
      <div className="hidden md:flex bg-[#145089] w-[734px] h-[56px] rounded-full text-white items-center justify-between gap-4 px-4 absolute left-1/2 -translate-x-1/2 translate-y-6 z-10">
        <Link href="/about">
          <div className="flex items-center">About</div>
        </Link>

        <Link href="/company">
          <div className="flex items-center gap-1">
            Company <MdKeyboardArrowDown className="text-xl" />
          </div>
        </Link>

        <Link href="/contact">
          <div className="flex items-center">Contact</div>
        </Link>

        <Link href="/project">
          <div className="flex items-center gap-2">
            Projects
            <div className="bg-[#3A6C9C] flex items-center justify-center rounded-full px-2 text-sm">
              New
            </div>
          </div>
        </Link>

        <Button variant="default" bgColor="bg-white" textColor="text-black">
          Contact Us
          <div className="rounded-full p-1 border border-[#F2F4F8] ml-2">
            <MdArrowOutward className="text-lg" />
          </div>
        </Button>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden bg-[#145089] w-[95%] h-[56px] rounded-full text-white items-center justify-center px-6 absolute left-1/2 -translate-x-1/2 translate-y-6 z-50 flex">
        <Button
          className="py-2 px-4 bg-[#145089] rounded-full ml-auto"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <FaTimes className="text-white text-2xl" />
          ) : (
            <FaBars className="text-white text-2xl" />
          )}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-[400px] bg-[#145089] text-white flex flex-col items-center justify-center gap-6 z-40 transition-all duration-500">
          <Link href="/about" onClick={toggleMenu}>
            <div className="text-lg cursor-pointer">About</div>
          </Link>
          <Link href="/company" onClick={toggleMenu}>
            <div className="text-lg cursor-pointer flex items-center gap-1">
              Company <MdKeyboardArrowDown />
            </div>
          </Link>
          <Link href="/contact" onClick={toggleMenu}>
            <div className="text-lg cursor-pointer">Contact</div>
          </Link>
          <Link href="/project" onClick={toggleMenu}>
            <div className="text-lg cursor-pointer flex items-center gap-2">
              Projects
              <div className="bg-[#3A6C9C] rounded-full px-2 text-sm">New</div>
            </div>
          </Link>
          <Button variant="default" bgColor="bg-white" textColor="text-black" onClick={toggleMenu}>
            Contact Us
            <div className="rounded-full p-1 border border-[#F2F4F8] ml-2">
              <MdArrowOutward className="text-lg" />
            </div>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Header;
