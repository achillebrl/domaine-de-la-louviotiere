import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1C0D05] text-[#F0E8DC]/70 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Top grid */}
        <div className="grid md:grid-cols-3 gap-12 pb-14 border-b border-[rgba(201,169,110,0.15)]">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/assets/logo.png"
                  alt="CKC Île-de-France"
                  fill
                  className="object-contain opacity-90"
                  sizes="40px"
                />
              </div>
              <div>
                <span
                  className="block font-medium text-lg text-[#FAF6F0] leading-none"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  CKC Île-de-France
                </span>
                <span
                  className="block text-[9px] tracking-[0.2em] uppercase text-[#C9A96E]/60"
                  style={{ fontFamily: "var(--font-tenor)" }}
                >
                  Blenheim & Tricolore
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[#F0E8DC]/50 mb-6">
              Élevage familial de Cavalier King Charles en Île-de-France depuis plus de 30 ans. Passion, rigueur et amour des animaux.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/woof_pattounes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#C9A96E]/70 hover:text-[#C9A96E] transition-colors text-xs tracking-[0.15em] uppercase"
                style={{ fontFamily: "var(--font-tenor)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                Instagram
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h4
              className="text-[#C9A96E]/80 tracking-[0.25em] text-xs uppercase mb-6"
              style={{ fontFamily: "var(--font-tenor)" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/contact", label: "Contact" },
                {
                  href: "https://www.ckc-iledefrance.com/nos-chiots-disponibles",
                  label: "Nos chiots disponibles",
                  external: true,
                },
                {
                  href: "https://www.ckc-iledefrance.com/album-photo",
                  label: "Album photo",
                  external: true,
                },
              ].map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#F0E8DC]/50 hover:text-[#C9A96E] transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-[#F0E8DC]/50 hover:text-[#C9A96E] transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4
              className="text-[#C9A96E]/80 tracking-[0.25em] text-xs uppercase mb-6"
              style={{ fontFamily: "var(--font-tenor)" }}
            >
              Nous contacter
            </h4>
            <div className="space-y-4">
              <div>
                <span
                  className="text-[9px] tracking-[0.2em] uppercase text-[#C9A96E]/50 block mb-1"
                  style={{ fontFamily: "var(--font-tenor)" }}
                >
                  Téléphone
                </span>
                <a
                  href="tel:0699387761"
                  className="text-[#F0E8DC]/80 hover:text-[#C9A96E] transition-colors text-sm"
                >
                  06 99 38 77 61
                </a>
              </div>
              <div>
                <span
                  className="text-[9px] tracking-[0.2em] uppercase text-[#C9A96E]/50 block mb-1"
                  style={{ fontFamily: "var(--font-tenor)" }}
                >
                  Région
                </span>
                <span className="text-[#F0E8DC]/60 text-sm">Île-de-France</span>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-block text-xs tracking-[0.15em] uppercase border border-[rgba(201,169,110,0.3)] text-[#C9A96E]/80 px-5 py-2.5 hover:bg-[rgba(201,169,110,0.08)] transition-colors"
                  style={{ fontFamily: "var(--font-tenor)" }}
                >
                  Formulaire de contact
                </Link>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-8 flex gap-3">
              <span className="text-[9px] tracking-[0.15em] uppercase bg-[rgba(201,169,110,0.1)] border border-[rgba(201,169,110,0.2)] text-[#C9A96E]/70 px-3 py-1.5" style={{ fontFamily: "var(--font-tenor)" }}>
                LOF
              </span>
              <span className="text-[9px] tracking-[0.15em] uppercase bg-[rgba(201,169,110,0.1)] border border-[rgba(201,169,110,0.2)] text-[#C9A96E]/70 px-3 py-1.5" style={{ fontFamily: "var(--font-tenor)" }}>
                Club CKC
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-[0.15em] uppercase text-[#F0E8DC]/30" style={{ fontFamily: "var(--font-tenor)" }}>
            © {new Date().getFullYear()} CKC Île-de-France — Tous droits réservés
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] tracking-[0.15em] uppercase text-[#F0E8DC]/25" style={{ fontFamily: "var(--font-tenor)" }}>
              Vente via Éleveurs-Online & Chiots de France
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}