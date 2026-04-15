import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import FasilitasSection from "@/components/layout/FasilitasSection";
import FieldCard from "@/components/layout/FieldCard";

export default function Home() {
  return (
    <div className="flex flex-col font-sans overflow-hidden">
      <div className="relative bg-primary flex flex-col px-4 sm:px-6 lg:px-24 w-full h-[400vh] items-center">
        <Navbar />
        <Hero />
        <FasilitasSection />
        <FieldCard />
      </div>
    </div>
  );
}
