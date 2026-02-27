import Image from "next/image";
import TailoredServices from "./components/TailoredServices";
import ServicesSection from "./components/ServicesSection";
import HireExpertsSection from "./components/HireExpertsSection";
import WhyChooseRightSection from "./components/WhyChooseRightSection";
import NumbersSection from "./components/NumbersSection";
import AIModelsSection from "./components/AIModelsSection";

export default function Home() {
  return (
    <>
      {/* Banner / Hero */}
      <section className="relative min-h-[70vh] text-white" style={{ backgroundImage:'url("https://storetransform.com/wp-content/uploads/2025/12/United-st.gif")', backgroundSize:"cover", backgroundPosition:"center" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
          <p className="text-[13px] tracking-wide text-gray-200">Welcome to Store Transform</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight drop-shadow md:text-6xl">
            Driving Innovation with <span className="text-[#f2623e]"><br className="hidden md:block" />Agile AI‑Enhanced</span> Digital Solutions
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-base text-gray-200 md:mt-4 md:text-lg">
            Unleash Your Brand’s Full Potential with <span className="text-[#f2623e]">360° Services All Under One Roof</span> — Let’s Soar to New Heights Together
          </p>
          <div className="mt-6 flex justify-center">
            <a href="#contact" className="rounded-md bg-[#f2623e] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#e45834]">
              Get Instant Assistance
            </a>
          </div>
        </div>
      </section>

      <TailoredServices />
      <ServicesSection />
      <HireExpertsSection />
      <WhyChooseRightSection />
      <NumbersSection />
      <AIModelsSection />


    </>
  );
}
