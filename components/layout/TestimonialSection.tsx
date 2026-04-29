import Image from "next/image";
import { Star } from "lucide-react";

type Testimoni = {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  image: string;
  cardPosition: "left" | "right";
};

const testimoniList: Testimoni[] = [
  {
    id: "alaric",
    name: "Alaric Gavin",
    role: "Pro Futsal",
    rating: 5,
    text: `"Lapangan bersih dan terawat, rumputnya nyaman dipakai main. Fasilitas lengkap, parkir luas, pasti balik lagi kesini!"`,
    image: "/img/man-1.jpg",
    cardPosition: "left",
  },
  {
    id: "calvin",
    name: "Calvin Amos",
    role: "Pro Futsal",
    rating: 5,
    text: `"Booking mudah dan cepat, lapangan vinyl-nya licin sempurna buat bermain. Harga terjangkau, pelayanan ramah, sangat direkomendasikan!"`,
    image: "/img/man-2.png",
    cardPosition: "right",
  },
  {
    id: "farid",
    name: "Farid",
    role: "Pro Futsal",
    rating: 5,
    text: `"Harga sewa sangat terjangkau, fasilitas musholla dan kafe tersedia lengkap, bikin betah berlama-lama disini!"`,
    image: "/img/man-3.png",
    cardPosition: "left",
  },
];

export default function TestimonialSection() {
  return (
    <section className="w-full py-16 px-8 sm:px-12 lg:px-42">
      <h2 className="text-gray-800 font-bold text-3xl text-center mb-16 leading-snug">
        Apa Pendapat Orang <br /> Tentang FutsalKuy
      </h2>

      <div className="flex flex-col gap-8">
        {testimoniList.map((item) => (
          <div key={item.id}>
            {/* ── MOBILE card (hidden di sm ke atas) ── */}
            <div className="sm:hidden bg-white rounded-2xl shadow-sm p-6 pt-2 flex flex-col gap-4">
              {/* Quote icon */}
              <div className="text-6xl leading-none text-gray-200 font-serif select-none">
                &ldquo;
              </div>

              {/* Teks testimoni */}
              <p className="text-gray-800 font-semibold text-sm leading-relaxed -mt-4">
                {item.text}
              </p>

              {/* Divider */}
              <hr className="border-gray-100" />

              {/* Bawah: nama, role + avatar bulat */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-gray-800 font-bold text-sm">{item.name}</p>
                  <p className="text-gray-400 text-xs">{item.role}</p>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} size={14} className="text-blue-500 fill-blue-500" />
                    ))}
                  </div>
                </div>

                {/* Avatar bulat */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-gray-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
              </div>
            </div>

            {/* ── DESKTOP layout (hidden di bawah sm) ── */}
            <div
              className={`hidden sm:flex gap-6 items-center
                ${item.cardPosition === "left" ? "flex-row" : "flex-row-reverse"}
              `}
            >
              {/* Card nama + foto offside */}
              <div className="relative w-64 md:w-72 shrink-0">
                <div
                  className={`bg-[#ffffff] rounded-2xl p-12 md:py-16 shadow-md flex flex-col justify-center gap-2
    ${item.cardPosition === "left" ? "pr-24 pl-8" : "pl-24 pr-8"}
  `}
                >
                  <h3 className="text-gray-800 font-bold text-xl leading-snug">{item.name}</h3>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} size={18} className="text-blue-500 fill-blue-500" />
                    ))}
                  </div>
                </div>
                {/* Avatar offside — kanan untuk left card, kiri untuk right card */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-24 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden shadow-md border-2 border-white
  ${item.cardPosition === "left" ? "-right-12" : "-left-12"}
`}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
              </div>

              {/* Teks testimoni */}
              <p
                className={`text-gray-700 font-semibold text-sm sm:text-base leading-relaxed flex-1
                  ${item.cardPosition === "left" ? "sm:pl-16" : "sm:pr-16"}
                `}
              >
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
