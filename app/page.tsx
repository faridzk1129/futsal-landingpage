import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import FacilitySection from "@/components/layout/FacilitySection";
import FieldCard from "@/components/layout/FieldCard";
import TestimonialSection from "@/components/layout/TestimonialSection";
import GallerySection from "@/components/layout/GallerySection";
import LocationSection from "@/components/layout/LocationSection";
import BookingButtonSection from "@/components/layout/BookingButtonSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col font-sans overflow-hidden">
      <div className="relative bg-primary flex flex-col px-4 sm:px-6 lg:px-24 w-full items-center">
        <Navbar />
        <Hero />
        <FacilitySection />
        <FieldCard />
        <TestimonialSection />
        <GallerySection />
        <LocationSection />
        <BookingButtonSection />
        <Footer />
      </div>
    </div>
  );
}
