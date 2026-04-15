"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";

const navLinks = [
  { href: "/booking-field-1", label: "Booking" },
  { href: "/", label: "Tentang" },
  { href: "/schedule", label: "Jadwal" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // no scrolling when sidebar is open logic
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 px-4 lg:px-24 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between bg-white shadow-sm rounded-2xl border border-gray-300">
          {/* logo text navbar section */}
          <Link
            href="/"
            className="text-lg font-bold text-gray-900 tracking-tight hover:opacity-80 transition-opacity"
          >
            FutsalKuy
          </Link>

          {/* desktop text link navbar section */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-md font-bold text-gray-700 hover:bg-gray-100 transition-colors duration-200  py-2 px-3 rounded-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* hamb button section on mobile/tablet */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Buka menu"
            aria-expanded={isOpen}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* overlay section */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* sidebar section */}
      <aside
        className={`
          fixed top-0 right-0 z-50 h-full w-[70%] max-w-sm bg-white shadow-2xl
          transform transition-transform duration-300 ease-in-out md:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
        aria-label="Sidebar navigasi"
      >
        {/* sidebar header section */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100">
          <span className="text-lg font-bold text-gray-900">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Tutup menu"
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* sidebar links section  */}
        <nav className="flex flex-col px-6 pt-6 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-3 px-4 rounded-lg text-base font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
