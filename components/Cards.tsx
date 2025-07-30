import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

interface ProjectCardProps {
  image: string;
  title?: string;
  tags?: string[];
  description?: string;
  metric?: string;
  isMockup?: boolean;
  showArrow?: boolean;
  // cardWidth?: string;
  // cardMaxWidth?: string;
  // cardMaxHeight?: string;
}

export default function ProjectCard({
  image,
  title,
  tags,       
  description,
  metric,
  isMockup = false,
  showArrow = true,
  // cardWidth = "w-[550px]",
  // cardMaxWidth = "w-[356px]",
  // cardMaxHeight = "h-[300px]",
}: ProjectCardProps) {
  return (
    <div className={`bg-white rounded-3xl shadow-md overflow-hidden  md:w-[550px] min-w-[356px]  md:h-[460px] min-h-[300px] flex flex-col justify-between transition relative`}>
      {/* Image Section */}
      <Image
        src={image}
        alt={title ?? "Project image"}
        width={522}
        height={348}
        className={` md:w-[540px] w-[340px] md:h-[349px] h-[225px] mt-4 rounded-3xl ${isMockup ? "p-6" : "p-4"}`}
      />


      {/* Bottom Content */}
      <div className="px-4 py-3 flex flex-col gap-2">
        {tags && (
          <div className="flex gap-2 text-sm text-gray-500">
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
        )}

        {title && (
          <p className="font-bold text-lg text-gray-900">{title}</p>
        )}

        <div className="flex">{description && (
          <p className="text-sm text-[#697289] line-clamp-2">{description}</p>
        )}

          {metric && (
            <p className="text-sm text-[#697289] font-medium md:ml-16">{metric}</p>
          )}
        </div>
      </div>

      {/* Optional Arrow Icon */}
      {showArrow && (
        <div className="absolute bottom-4 right-4 h-10 w-10 border border-[#E5EAF0] rounded-full flex items-center justify-center mr-4 mb-2">
          <MdArrowOutward className="w-5 h-5 text-black" />
        </div>
      )}
    </div>
  );
}
