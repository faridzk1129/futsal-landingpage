import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock } from "lucide-react";

const infoItems = [
  {
    id: "lokasi",
    label: "Lokasi",
    icon: <MapPin size={18} className="text-red-400" />,
    value: "Jln. Kijang no 5",
  },
  {
    id: "jadwal",
    label: "Jadwal",
    icon: <Clock size={18} className="text-blue-400" />,
    value: "08:00 - 23:00",
  },
  {
    id: "lapangan",
    label: "Lapangan",
    icon: null,
    value: "2",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full pt-26 ">
      <div className="w-full relative flex flex-col items-center ">
        {/* Image Container */}
        <div className="relative w-full h-96 sm:h-100 md:h-136 rounded-2xl overflow-hidden">
          <Image
            src="/img/hero-image-futsal.png"
            alt="Orang bermain futsal"
            fill
            priority
            className="object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

          {/* Hero Text */}
          <div className="absolute bottom-40 sm:bottom-34 left-8 sm:left-12 max-w-xs sm:max-w-md">
            <h1 className="text-white text-2xl sm:text-4xl font-extrabold leading-snug drop-shadow-md">
              Dapatkan Pengalaman Bermain Futsal Bersama Teman di Lapangan Terbaik Kami!
            </h1>
          </div>
        </div>

        {/* Info Bar — overlaps slightly with image bottom */}

        <div className="absolute sm:-bottom-12 -bottom-16 w-[80%] lg:py-2 rounded-2xl bg-[#1e2229] shadow-xl grid grid-cols-2 sm:grid-cols-4 overflow-hidden">
          {infoItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col items-center justify-center gap-1 px-4 py-5 border-white/20
        ${index % 2 === 0 ? "border-r" : ""}
        ${index < 2 ? "border-b sm:border-b-0" : ""}
        sm:border-r sm:last:border-r-0
      `}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-white lg:text-lg text-sm font-semibold">{item.label}</span>
                {item.icon && item.icon}
              </div>
              <span
                className={`text-white font-bold text-center ${item.id === "lapangan" ? "text-2xl" : "text-sm lg:text-xl"}`}
              >
                {item.value}
              </span>
            </div>
          ))}

          {/* Booking Button */}
          <div className="flex items-center justify-center px-4 py-5">
            <Link
              href="/booking-field"
              className="w-full text-center bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm sm:text-base py-4 px-6 rounded-xl transition-colors duration-200 shadow-md"
            >
              Booking
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
