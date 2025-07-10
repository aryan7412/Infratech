"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { MdArrowOutward, MdKeyboardArrowDown } from "react-icons/md"

const Header = () => {
    return (
        <div className='flex justify-center translate-y-6 z-50 sticky top-0'>
            <div className="bg-[#145089] flex w-[734px] h-[56px] rounded-full text-white items-center justify-center gap-6 px-4">
                <Link href="/About">
                    <div className="flex items-center">About</div>
                </Link>

                <Link href="/Company">
                    <div className="flex items-center gap-1">
                        Company
                        <MdKeyboardArrowDown className="text-xl" />
                    </div>
                </Link>

                <Link href="/Contact">
                    <div className="flex items-center">Contact</div>
                </Link>

                <Link href="/Project">
                    <div className="flex items-center gap-2">
                        Projects
                        <div className="bg-[#3A6C9C] flex items-center justify-center rounded-full px-2 text-sm">
                            New
                        </div>
                    </div>
                </Link>

                <Button variant="default" bgColor="bg-white" textColor="text-black">
                    Contact Us
                    <div className="rounded-full p-1 border border-[#F2F4F8]"><MdArrowOutward className='text-lg'/></div>
                </Button>
            </div>
        </div>
    )
}

export default Header
