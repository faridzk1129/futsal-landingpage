import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import FasilitasSection from "@/components/layout/FasilitasSection";
import FieldCard from "@/components/layout/FieldCard";
import TestimoniSection from "@/components/layout/TestimoniSection";
import GallerySection from "@/components/layout/GallerySection";
import LokasiSection from "@/components/layout/LokasiSection";
import BookingButtonSection from "@/components/layout/BookingButtonSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col font-sans overflow-hidden">
      <div className="relative bg-primary flex flex-col px-4 sm:px-6 lg:px-24 w-full items-center">
        <Navbar />
        <Hero />
        <FasilitasSection />
        <FieldCard />
        <TestimoniSection />
        <GallerySection />
        <LokasiSection />
        <BookingButtonSection />
        <Footer />
      </div>
    </div>
  );
}
