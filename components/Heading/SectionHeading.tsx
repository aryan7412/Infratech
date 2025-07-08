"use client";

import { TbBorderCornerSquare } from "react-icons/tb";
import { motion } from "framer-motion";

interface HeadingProps {
  text: string;
  align?: "left" | "center";
}

const Heading = ({ text, align = "left" }: HeadingProps) => {
  const isCenter = align === "center";
  const letters = text.split("");
  const mid = Math.floor(letters.length / 2);

  return (
    <div className={`relative w-fit my-7 ${isCenter ? "mx-auto" : "ml-[10.5rem]"}`}>
      {/* Top-right corner */}
      <div className="absolute -top-1 -right-3 text-[#3EABE3] text-md rotate-90">
        <motion.div
          initial={{ x: 0, y: 40, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 text-[#3EABE3] text-xs rotate-90 -translate-x-1/2 -translate-y-1/2"
        >
          <TbBorderCornerSquare strokeWidth={3} />
        </motion.div>
      </div>

      {/* Bottom-left corner */}
      <div className="absolute -bottom-1 -left-1 text-[#3EABE3] text-md -rotate-90">
        <motion.div
          initial={{ x: 0, y: 30, opacity: 0 }}
          animate={{ x: 0, y: -10, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 text-[#3EABE3] text-xs -rotate-90 -translate-x-1/2 -translate-y-1/2"
        >
          <TbBorderCornerSquare strokeWidth={3} />
        </motion.div>
      </div>

      {/* Main text */}
      <h1 className={`text-sm ${isCenter ? "text-center" : "text-left"} text-[#2D2F33]`}>
        {letters.map((char, index) => {
          const distance = Math.abs(index - mid); // Distance from center

          return (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.4 + distance * 0.1,
                duration: 0.25,
                ease: "easeOut",
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          );
        })}

      </h1>
    </div>
  );
};

export default Heading;
