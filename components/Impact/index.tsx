
import SectionHeading from "@/components/Heading/SectionHeading";
import Heading from "@/components/Heading/Heading";

interface StatItem {
  value: string;
  title: string;
  description: string;
}

const StatsSection = () => {
  const stats: StatItem[] = [
    {
      value: "1,200+",
      title: "Successful Projects Delivered",
      description:
        "From startups to enterprises, we’ve built high-performing websites and digital experiences that drive real results.",
    },
    {
      value: "5K+",
      title: "Ad Campaigns Optimized",
      description:
        "We’ve helped brands lower acquisition costs and boost ROI with data-driven paid media strategies.",
    },
    {
      value: "$10M+",
      title: "Revenue Generated for Clients",
      description:
        "Our strategic design, marketing, and conversion optimization have helped businesses scale and maximize profits.",
    },
  ];

  return (
    <div className="bg-[#f6f7f9] px-4 py-16">
      <SectionHeading text="Impact" align="center" />
      <Heading
        text1="Sparkradix simplifies the process, "
        text2="& delivers results."
        align="center"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 ml-36 mr-32">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-sm px-8 py-10 text-center md:text-left"
          >
            <h3 className="text-4xl font-bold text-black">{stat.value}</h3>
            <p className="text-lg font-semibold text-[#697289] mt-2">
              {stat.title}
            </p>
            <p className="text-sm text-[#50576B] mt-3">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
