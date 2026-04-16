"use client";

import Image from "next/image";

const images = [
  "/img/bg-1.jpg",
  "/img/bg-2.jpg",
  "/img/bg-3.jpg",
  "/img/bg-4.jpg",
  "/img/bg-5.jpg",
  "/img/bg-6.jpg",
  "/img/bg-7.jpg",
];

export default function GallerySection() {
  return (
    <section className=" relative w-[115vw] py-16 px-4 sm:px-6 lg:px-24 flex flex-col ">
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-800 mb-16">
        Galeri
      </h2>

      <div className="absolute top-28 sm:top-[108px] sm:h-[120px] h-[95px]  w-[105vw] bg-primary rounded-[50%] z-20 self-center"></div>

      {/* Container scroll horizontal */}
      <div className=" relative flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-46 h-52 sm:w-96 sm:h-90 relative rounded-xl overflow-hidden shrink-0"
          >
            <Image
              src={src}
              alt={`gallery-${index}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-3 sm:bottom-0 sm:h-[120px] h-[95px] w-[105vw] bg-primary rounded-[50%] z-20 self-center"></div>
    </section>
  );
}
