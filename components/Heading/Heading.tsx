interface HeadingProps {
  text1: string;
  text2: string;
  align?: "left" | "center";
}

const Heading = ({ text1, text2, align = "left" }: HeadingProps) => {
  const isCenter = align === "center";

  return (

    <div className="space-y-2 md:ml-40 ml-[9.5rem]">

      <h1 className={`text-4xl font-bold text-[#2D2F33] ${isCenter ? "text-center" : "text-left"}`}>
        {text1}
      </h1>
      <h1 className={`text-4xl font-bold text-[#7B8398] ${isCenter ? "text-center" : "text-left"}`}>
        {text2}
      </h1>
    </div>
  );
};

export default Heading;
