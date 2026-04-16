import Link from "next/link";

export default function BookingButtonSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-24">
      <div className=" py-8 sm:py-12 rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-blue-600  flex items-center justify-center">
        <Link
          href="/booking-field-1"
          className="flex items-center justify-center bg-white hover:bg-gray-100 active:bg-blue-200 text-blue-600 font-bold text-lg sm:text-2xl py-4 px-24 sm:py-8 sm:px-28 rounded-xl transition-colors duration-200 shadow-md"
        >
          Booking
        </Link>
      </div>
    </section>
  );
}
