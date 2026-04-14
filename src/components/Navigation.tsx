"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation({ activePage }: { activePage?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FDF6EC]/95 backdrop-blur-md shadow-sm shadow-[#8B4513]/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-[#C9963A]/30 flex-shrink-0">
            <Image
              src="/assets/logo.png"
              alt="CKC Île-de-France"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div
              className={`font-cinzel text-sm font-semibold tracking-[0.12em] transition-colors duration-300 ${
                scrolled ? "text-[#2C1810]" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              CKC Île-de-France
            </div>
            <div
              className={`font-cormorant text-[0.62rem] tracking-[0.15em] uppercase transition-colors duration-300 ${
                scrolled ? "text-[#C9963A]" : "text-[#E8B96A]/80"
              }`}
              style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
            >
              Blenheim & Tricolore
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${activePage === link.href ? "active" : ""} ${
                !scrolled ? "!text-white/90 hover:!text-white" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:0699387761"
            className={`font-cinzel text-[0.68rem] tracking-[0.15em] uppercase px-5 py-2.5 border transition-all duration-300 ${
              scrolled
                ? "border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white"
                : "border-white/50 text-white hover:border-white hover:bg-white/10"
            }`}
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            06 99 38 77 61
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-6 h-px transition-all duration-300 ${
                scrolled ? "bg-[#2C1810]" : "bg-white"
              } ${menuOpen && i === 0 ? "rotate-45 translate-y-2" : ""} ${
                menuOpen && i === 1 ? "opacity-0" : ""
              } ${menuOpen && i === 2 ? "-rotate-45 -translate-y-2" : ""}`}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#FDF6EC]/98 backdrop-blur-md px-6 py-6 flex flex-col gap-6 border-t border-[#8B4513]/10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`nav-link text-base ${activePage === link.href ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:0699387761"
            className="font-cinzel text-xs tracking-[0.2em] uppercase text-[#8B4513] border border-[#8B4513]/40 px-5 py-3 text-center hover:bg-[#8B4513] hover:text-white transition-all duration-300"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            06 99 38 77 61
          </a>
        </div>
      </div>
    </header>
  );
}