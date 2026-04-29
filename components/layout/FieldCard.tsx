"use client";
import Image from "next/image";
import Link from "next/link";

type Field = {
  id: string;
  name: string;
  price: string;
  image: string;
  bookingType: string; // Tambahkan ini untuk parameter URL
  buttonColor: string;
  blurPosition: "left" | "right";
};

const fieldList: Field[] = [
  {
    id: "rumput-sintesis",
    name: "Lapangan Rumput",
    price: "150k",
    image: "/img/lapangan-rumput-sintesis.png",
    bookingType: "sintesis", // Parameter untuk Rumput Sintesis
    buttonColor: "bg-[#89B100] hover:bg-[#7a9e00]",
    blurPosition: "left",
  },
  {
    id: "vinyl",
    name: "Lapangan Vinyl",
    price: "150k",
    image: "/img/lapangan-vinyl.png",
    bookingType: "vinyl", // Parameter untuk Vinyl
    buttonColor: "bg-[#4E6ED9] hover:bg-[#3d5ec8]",
    blurPosition: "right",
  },
];
export default function FieldCard() {
  return (
    <section className="w-full py-16 px-8 sm:px-12 lg:px-42">
      {/* Section Title */}
      <h2 className="text-gray-800 font-bold text-3xl text-center mb-12">Lapangan</h2>

      {/* Cards */}
      <div className="flex flex-col gap-16">
        {fieldList.map((field) => (
          <div
            key={field.id}
            className="relative w-full h-56 sm:h-64 md:h-80 rounded-2xl overflow-hidden"
          >
            {/* Background Image */}
            <Image
              src={field.image}
              alt={field.name}
              fill
              className="object-cover"
              priority={field.id === "rumput-sintesis"}
              sizes="(max-width: 640px) "
            />
            {/* Blur Container */}
            <div
              className={` border border-gray-400 absolute top-1/2 -translate-y-1/2 w-[75%] sm:w-[45%] backdrop-blur-md bg-black/50 rounded-xl p-6 flex flex-col gap-6
                ${field.blurPosition === "left" ? "left-4 sm:left-12 sm:pr-12" : "right-4 sm:right-12"}
              `}
            >
              {/* Field Name */}
              <h3 className="text-white font-bold text-xl md:text-3xl leading-snug">
                {field.name}
              </h3>

              {/* Price + Button Row */}
              <div
                className={`flex items-center gap-3
                  ${field.blurPosition === "left" ? "flex-row" : "flex-row-reverse"}
                `}
              >
                {/* Booking Button */}
                {/* UPDATE: Href menggunakan query parameter */}
                <Link
                  href={`/booking-field?type=${field.bookingType}`}
                  className={`${field.buttonColor} text-white font-bold text-sm sm:text-base px-4 py-2 rounded-lg transition-colors duration-200`}
                >
                  Booking
                </Link>
                {/* Price Badge */}
                <span className="bg-[#1e2229] text-white text-sm sm:text-base font-bold px-3 py-2 rounded-lg">
                  {field.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
