"use client";

import React, { useState, useEffect, useMemo } from "react";
import { ArrowLeft, ChevronDown, Calendar, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation"; // Import hook ini
import Navbar from "@/components/layout/Navbar";

// --- Types ---
type FieldType = "Rumput Sintesis" | "Vinyl";

interface BookingState {
  name: string;
  wa: string;
  date: string;
  startTime: string;
  endTime: string;
  fieldType: FieldType;
}

export default function BookingField() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type"); // Mengambil ?type=...
  // --- States ---
  const [form, setForm] = useState<BookingState>({
    name: "",
    wa: "",
    date: "",
    startTime: "08:00",
    endTime: "10:00",
    fieldType: "Rumput Sintesis",
  });
  // LOGIC: Sync URL parameter ke state fieldType
  useEffect(() => {
    if (typeParam === "vinyl") {
      setForm((prev) => ({ ...prev, fieldType: "Vinyl" }));
    } else if (typeParam === "sintesis") {
      setForm((prev) => ({ ...prev, fieldType: "Rumput Sintesis" }));
    }
  }, [typeParam]);

  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- Theme Logic ---
  const theme = useMemo(() => {
    if (form.fieldType === "Rumput Sintesis") {
      return {
        pageBg: "bg-[#AEBF67]",
        formBg: "bg-[#111C2C]",
        accent: "#89B100",
        highlight: "bg-[#1FBA06]",
        textHighlight: "text-[#1FBA06]",
        buttonHover: "hover:bg-[#189605]",
        image: "/img/lapangan-rumput-sintesis.png",
        price: "150k / jam",
        shadowButton: "shadow-green-500/20",
      };
    } else {
      return {
        pageBg: "bg-[#037FF3]",
        formBg: "bg-[#111C2C]",
        accent: "#4E6ED9",
        highlight: "bg-[#0070D6]",
        textHighlight: "text-[#0070D6]",
        buttonHover: "hover:bg-[#005bb1]",
        image: "/img/lapangan-vinyl.png",
        price: "200k / jam",
        shadowButton: "shadow-blue-500/20",
      };
    }
  }, [form.fieldType]);

  // --- Logic Perhitungan DP ---
  const dpAmount = useMemo(() => {
    const start = parseInt(form.startTime.split(":")[0]);
    const end = parseInt(form.endTime.split(":")[0]);
    const duration = end - start;
    if (duration <= 0) return 0;
    return duration * 50000;
  }, [form.startTime, form.endTime]);

  // --- Logic Handle Booking ---
  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    setTimeout(() => {
      if (!form.name || !form.wa || !form.date) {
        setStatus({ type: "error", message: "Mohon lengkapi semua data form!" });
        setIsSubmitting(false);
        return;
      }

      const isVinyl = form.fieldType === "Vinyl";
      const isTargetDate = form.date === "2026-04-25";
      const startHour = parseInt(form.startTime.split(":")[0]);
      const endHour = parseInt(form.endTime.split(":")[0]);

      const isTimeConflict = startHour < 12 && endHour > 9;

      if (isVinyl && isTargetDate && isTimeConflict) {
        setStatus({
          type: "error",
          message: `${form.fieldType} pada tanggal 25 April 2026 jam 09:00 - 12:00 telah di-booking. Silakan pilih jadwal lain.`,
        });
      } else {
        setStatus({ type: "success", message: "Lapangan Berhasil di Booking!" });
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div
      className={`min-h-screen ${theme.pageBg} transition-colors duration-700 font-sans flex items-center justify-center p-2 sm:p-10 `}
    >
      <Navbar />
      {/* Pop Up Overlay */}
      {status && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl max-w-sm w-full text-center scale-in-center">
            {status.type === "success" ? (
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
            ) : (
              <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            )}
            <h3 className="text-xl font-bold text-white mb-2">
              {status.type === "success" ? "Berhasil!" : "Ups!"}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">{status.message}</p>
            <button
              onClick={() => setStatus(null)}
              className={`w-full py-3 rounded-xl text-white font-bold transition-all ${status.type === "success" ? "bg-emerald-600 hover:bg-emerald-500" : "bg-red-600 hover:bg-red-500"}`}
            >
              Mengerti
            </button>
          </div>
        </div>
      )}

      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-stretch gap-0 rounded-[40px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] scale-95 sm:scale-100 transition-transform relative mt-14 mb-8 md:mb-0 ">
        {/* SISI KIRI: FORM */}
        <div
          className={`${theme.formBg} flex-1 p-8 sm:p-10 lg:p-16 pb-18 lg:pt-12 relative transition-colors duration-500`}
        >
          <Link
            href="/"
            className="relative right-1 w-12 h-12 z-20 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-xl hover:scale-110 transition-transform active:scale-95"
          >
            <ArrowLeft size={24} />
          </Link>

          <form onSubmit={handleBooking} className="mt-8 space-y-10">
            <div className="space-y-1">
              <label className="text-slate-400 text-sm font-medium">Nama pengirim</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b-2 text-white py-2 outline-none font-bold text-lg transition-colors focus:brightness-125"
                style={{ borderColor: theme.accent }}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-8 items-end">
              <div className="flex-1 w-full space-y-1">
                <label className="text-slate-400 text-sm font-medium">Nomor Wa</label>
                <input
                  type="text"
                  value={form.wa}
                  onChange={(e) => setForm({ ...form, wa: e.target.value })}
                  className="w-full bg-transparent border-b-2 text-white py-2 outline-none font-bold text-lg transition-colors focus:brightness-125"
                  style={{ borderColor: theme.accent }}
                />
              </div>
              <div className="w-full sm:w-48 h-[68px] bg-white rounded-xl overflow-hidden flex flex-col shadow-lg">
                <div
                  className={`${theme.highlight} py-1 text-center text-[10px] font-bold text-white uppercase tracking-tighter transition-colors`}
                >
                  Pembayaran
                </div>
                <div className="flex-1 flex items-center justify-center p-2 bg-white">
                  <img src="/img/qris.png" alt="QRIS" className="h-6 object-contain" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-1">
                <label className="text-slate-400 text-sm font-medium">Tanggal</label>
                <div className="relative">
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-transparent border-b-2 text-white py-2 outline-none font-bold text-lg transition-colors appearance-none"
                    style={{ borderColor: theme.accent }}
                  />
                  <Calendar
                    className="absolute right-0 top-3 text-slate-500 pointer-events-none"
                    size={18}
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-slate-400 text-sm font-medium">Jam</label>
                <div className="flex items-center gap-2">
                  <select
                    value={form.startTime}
                    onChange={(e) => setForm({ ...form, startTime: e.target.value })}
                    className="bg-transparent border-b-2 text-white py-2 outline-none font-bold text-lg flex-1"
                    style={{ borderColor: theme.accent }}
                  >
                    {[
                      "08:00",
                      "09:00",
                      "10:00",
                      "11:00",
                      "12:00",
                      "13:00",
                      "14:00",
                      "15:00",
                      "16:00",
                      "17:00",
                      "18:00",
                      "19:00",
                      "20:00",
                      "21:00",
                      "22:00",
                      "23:00",
                    ].map((t) => (
                      <option key={t} value={t} className="bg-slate-900">
                        {t}
                      </option>
                    ))}
                  </select>
                  <span className="text-white font-bold mt-2">-</span>
                  <select
                    value={form.endTime}
                    onChange={(e) => setForm({ ...form, endTime: e.target.value })}
                    className="bg-transparent border-b-2 text-white py-2 outline-none font-bold text-lg flex-1"
                    style={{ borderColor: theme.accent }}
                  >
                    {[
                      "09:00",
                      "10:00",
                      "11:00",
                      "12:00",
                      "13:00",
                      "14:00",
                      "15:00",
                      "16:00",
                      "17:00",
                      "18:00",
                      "19:00",
                      "20:00",
                      "21:00",
                      "22:00",
                      "23:00",
                      "24:00",
                    ].map((t) => (
                      <option key={t} value={t} className="bg-slate-900">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-slate-400 text-sm font-medium">Pilih Lapangan</label>
              <div className="relative">
                <select
                  value={form.fieldType}
                  onChange={(e) => setForm({ ...form, fieldType: e.target.value as FieldType })}
                  className="w-full bg-transparent border-b-2 text-white py-2 outline-none font-bold text-lg appearance-none cursor-pointer"
                  style={{ borderColor: theme.accent }}
                >
                  <option value="Rumput Sintesis" className="bg-slate-900">
                    Lapangan Rumput Sintesis
                  </option>
                  <option value="Vinyl" className="bg-slate-900">
                    Lapangan Vinyl
                  </option>
                </select>
                <ChevronDown
                  className="absolute right-0 top-3 text-slate-500 pointer-events-none"
                  size={20}
                />
              </div>
            </div>
          </form>
        </div>

        {/* SISI KANAN: PREVIEW & PRICE */}
        <div className="bg-white flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-between items-center lg:items-end">
          <button className="bg-[#5F5F5F] hover:bg-[#464646] text-white px-6 py-3 rounded-xl text-sm font-bold transition-all self-end shadow-md active:scale-95 relative bottom-2">
            Cek Jadwal
          </button>

          <div className="w-full flex-1 flex flex-col justify-center items-center gap-8 mt-4">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <img
                src={theme.image}
                alt={form.fieldType}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20 space-y-1">
                <h2 className="text-white font-bold text-xl drop-shadow-md">{form.fieldType}</h2>
                <span
                  className={`${theme.highlight} inline-block px-4 py-1 rounded-lg text-white font-bold text-sm shadow-lg`}
                >
                  {theme.price}
                </span>
              </div>
            </div>

            <div className="w-full flex rounded-2xl shadow-xl ">
              <div className="flex flex-col w-1/2 justify-center items-center">
                <span
                  className={`${theme.textHighlight} font-bold text-xs uppercase tracking-widest transition-colors duration-500`}
                >
                  DP dulu
                </span>
                <span className="text-xl font-black text-slate-700">
                  Rp. {dpAmount.toLocaleString("id-ID")}
                </span>
              </div>
              <button
                onClick={handleBooking}
                disabled={isSubmitting}
                className={`flex-1 ${theme.highlight} ${theme.buttonHover} text-white font-bold py-5 rounded-2xl rounded-l-none   transition-all active:scale-95 flex items-center justify-center gap-3 w-1/2 h-full `}
              >
                {isSubmitting ? "Proses..." : "Bayar"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
