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
}

export default function ProjectCard({
  image,
  title,
  tags,
  description,
  metric,
  isMockup = false,
  showArrow = true,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden w-[550px] h-[460px] flex flex-col justify-between transition relative">
      {/* Image Section */}
      <Image
        src={image}
        alt={title ?? "Project image"}
        width={522}
        height={348}
        className={`object-contain w-[522px] h-[348px] mt-4 rounded-3xl ${isMockup ? "p-6" : "p-4"}`}
      />


      {/* Bottom Content */}
      <div className="p-4 flex flex-col gap-2">
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
            <p className="text-sm text-[#697289] font-medium ml-16">{metric}</p>
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
