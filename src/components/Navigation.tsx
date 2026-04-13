"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation({ activePage }: { activePage?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(250,246,240,0.96)] backdrop-blur-md border-b border-[rgba(201,169,110,0.2)] py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex-shrink-0">
            <Image
              src="/assets/logo.png"
              alt="CKC Île-de-France"
              fill
              className="object-contain"
              sizes="40px"
            />
          </div>
          <div>
            <span
              className={`block font-medium text-lg leading-none transition-colors ${
                scrolled ? "text-[#3D2B1A]" : "text-[#FAF6F0]"
              }`}
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              CKC Île-de-France
            </span>
            <span
              className={`block text-[9px] tracking-[0.2em] uppercase transition-colors ${
                scrolled ? "text-[#8B5E3C]/70" : "text-[#C9A96E]/80"
              }`}
              style={{ fontFamily: "var(--font-tenor)" }}
            >
              Blenheim & Tricolore
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link text-sm tracking-[0.15em] uppercase transition-colors ${
                activePage === link.href
                  ? scrolled ? "text-[#8B5E3C]" : "text-[#C9A96E]"
                  : scrolled ? "text-[#3D2B1A]/70 hover:text-[#3D2B1A]" : "text-[#FAF6F0]/80 hover:text-[#FAF6F0]"
              }`}
              style={{ fontFamily: "var(--font-tenor)" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:0699387761"
            className={`text-xs tracking-[0.15em] uppercase transition-all px-5 py-2.5 border ${
              scrolled
                ? "border-[#8B5E3C] text-[#8B5E3C] hover:bg-[#8B5E3C] hover:text-[#FAF6F0]"
                : "border-[rgba(232,212,168,0.5)] text-[#E8D4A8] hover:border-[#C9A96E] hover:text-[#C9A96E]"
            }`}
            style={{ fontFamily: "var(--font-tenor)" }}
          >
            Appeler
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-[#3D2B1A]" : "bg-[#FAF6F0]"} ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-[#3D2B1A]" : "bg-[#FAF6F0]"} ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-[#3D2B1A]" : "bg-[#FAF6F0]"} ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } bg-[rgba(250,246,240,0.98)] backdrop-blur-md border-b border-[rgba(201,169,110,0.2)]`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-[0.15em] uppercase text-[#3D2B1A]/80 hover:text-[#8B5E3C] transition-colors py-2 border-b border-[rgba(201,169,110,0.15)]"
              style={{ fontFamily: "var(--font-tenor)" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:0699387761"
            className="text-sm tracking-[0.15em] uppercase text-[#8B5E3C] font-medium py-2"
            style={{ fontFamily: "var(--font-tenor)" }}
          >
            06 99 38 77 61
          </a>
        </div>
      </div>
    </header>
  );
}