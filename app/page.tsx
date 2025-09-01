import About from "@/components/About";
import BatchCards from "@/components/Batch";
import CallToAction2 from "@/components/Callaction";
import Camp from "@/components/Camp";
import ClassSection from "@/components/ClassSection";
import FaqSection from "@/components/FaqSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StartsSection";
import Testimonials from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <BatchCards />
      <About />
      <ClassSection />
      <CallToAction2 />
      <Features />
      <Testimonials />
      <StatsSection />
      <FaqSection />
      {/* <Footer /> */}
      {/* <Camp />
      <Guide />
      <Features />
      <GetApp /> */}
    </>
  );
}
