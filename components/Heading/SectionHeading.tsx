import { TbBorderCornerSquare } from "react-icons/tb";

interface SectionHeadingProps {
  text: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading = ({ text, align = "left", className = "" }: SectionHeadingProps) => {
  const isCenter = align === "center";

  return (
    <div className={`relative w-fit my-7 ${isCenter ? "mx-auto" : className}`}>
      <div className="absolute -top-1 -right-3 text-[#3EABE3] text-xs rotate-90">
        <TbBorderCornerSquare strokeWidth={3} />
      </div>
      <div className="absolute -bottom-1 -left-3 text-[#3EABE3] text-xs -rotate-90">
        <TbBorderCornerSquare strokeWidth={3} />
      </div>
      <h1 className={`text-sm ${isCenter ? "text-center" : "text-left"} text-[#2D2F33]`}>
        {text}
      </h1>
    </div>
  );
};

export default SectionHeading;
