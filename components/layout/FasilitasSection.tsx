import Image from "next/image";

const fasilitasList = [
  {
    id: "parkir",
    icon: "/parking.svg",
    label: "Free Parkir",
    iconSize: "w-7 h-7", // lebih kecil
  },
  {
    id: "wifi",
    icon: "/wifi.svg",
    label: "Wifi",
    iconSize: "w-11 h-11",
  },
  {
    id: "musholla",
    icon: "/qubah.svg",
    label: "Musholla",
    iconSize: "w-11 h-11",
  },
  {
    id: "kafe",
    icon: "/cafe.svg",
    label: "Kafe",
    iconSize: "w-11 h-11",
  },
];

export default function FasilitasSection() {
  return (
    <section className="w-full py-10 mt-24 flex flex-col gap-7">
      <h2 className="text-gray-800 font-bold text-2xl lg:text-3xl text-center mb-8">Fasilitas</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-12">
        {fasilitasList.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-sm flex flex-col items-center justify-center gap-8 py-16"
          >
            {/* Icon */}
            <div className={`relative ${item.iconSize}`}>
              <Image src={item.icon} alt={item.label} fill className="object-contain" />
            </div>
            {/* Label */}
            <span className="text-gray-800 font-bold text-base sm:text-xl text-center">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
