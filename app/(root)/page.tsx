import Hero from "@/components/HeroSection/Hero";
import OurServices from "@/components/OurServices";
import Testimonial from "@/components/Testimonials";
import OurProcess from "@/components/OurProcess";
import FAQ from "@/components/FAQ"
import Impact from "@/components/Impact"
import OurWork from "@/components/OurWork"

const HomePage = async () => {
  return (
    <div >
      <Hero />
      <Impact />
      <OurServices/>
      <OurWork />
      <Testimonial />
      <OurProcess />
      <FAQ />
    </div>
  );
};

export default HomePage;