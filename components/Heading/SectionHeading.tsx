import { TbBorderCornerSquare } from "react-icons/tb";

interface HeadingProps {
  text: string;
  align?: "left" | "center";
}

const Heading = ({ text, align = "left" }: HeadingProps) => {
  const isCenter = align === "center";

  return (
    <div className={`relative w-fit my-7 ml-[10.7rem] ${isCenter ? "mx-auto" : ""}`}>
      {/* Top-right corner */}
      <div className="absolute -top-1 -right-3 text-[#3EABE3] text-xs rotate-90">
        <TbBorderCornerSquare strokeWidth={3} />
      </div>

      {/* Bottom-left corner */}
      <div className="absolute -bottom-1 -left-3 text-[#3EABE3] text-xs -rotate-90">
        <TbBorderCornerSquare strokeWidth={3} />
      </div>

      {/* Main text */}
      <h1 className={`text-sm ${isCenter ? "text-center" : "text-left"} text-[#2D2F33]`}>
        {text}
      </h1>
    </div>
  );
};

export default Heading;
