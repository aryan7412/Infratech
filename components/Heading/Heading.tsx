interface HeadingProps {
  text1: string;
  text2: string;
  align?: "left" | "center";
  className1?: string;
  className2?: string;
}

const Heading = ({ text1, text2, align = "left",className1="",className2="" }: HeadingProps) => {
  const isCenter = align === "center";

  return (
    <div className="space-y-2 ">
      <h1 className={`text-4xl font-bold text-[#2D2F33] ${isCenter ? "text-center" : "text-left"} ${className1}`}>
        {text1}
      </h1>
      <h1 className={`text-4xl font-bold text-[#7B8398] ${isCenter ? "text-center" : "text-left"} ${className2}`}>
        {text2}
      </h1>
    </div>
  );
};

export default Heading;
