import SectionHeading from "@/components/Heading/SectionHeading"
import { Button } from "@/components/ui/button"
import { MdArrowOutward } from "react-icons/md"

const index = () => {
    return (
        <div className="bg-[#F6F7F9]">
            <SectionHeading text="Our Work" align="left" />
            <div className="flex gap-x-1 ml-40">
                <div className="text-3xl text-black font-bold">Building Beyond</div>
                <div className="text-3xl text-[#145089] font-bold">Blueprints</div>
            </div>
            <div className="flex ml-40 gap-20">
                <p className="mt-4">See how we’ve helped clients turn ambitious visions into tangible, impactful infrastructure.</p>
                <Button variant="default" bgColor="bg-white" textColor="text-black" >
                    View all projects
                    <div className="rounded-full p-1 border border-[#F2F4F8]"><MdArrowOutward className='text-lg'/></div>
                </Button>
            </div>
        </div>
    )
}

export default index