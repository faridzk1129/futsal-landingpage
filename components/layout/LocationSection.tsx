export default function LocationSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-24">
      <h2 className="text-gray-800 font-bold text-3xl sm:text-4xl text-center mb-10">Lokasi</h2>

      {/* Map Container */}
      <div className="w-full rounded-2xl overflow-hidden shadow-md border border-gray-200 aspect-[16/9] sm:aspect-[16/7]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.005429792096!2d119.6534333749743!3d-3.808905796164923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d944cdc2033b57b%3A0x67a5e944610e80f1!2sLapangan%20Futsal%20Fathir!5e0!3m2!1sid!2sid!4v1776314559146!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi FutsalKuy"
        />
      </div>
    </section>
  );
}
