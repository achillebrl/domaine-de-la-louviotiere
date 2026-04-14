import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a0c06] text-[#D4A574]/70">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-24">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand col */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 overflow-hidden rounded-full border border-[#C9963A]/30 flex-shrink-0">
                <Image
                  src="/assets/logo.png"
                  alt="CKC Île-de-France"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div
                  className="text-white font-cinzel text-sm tracking-[0.12em] font-semibold"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  CKC Île-de-France
                </div>
                <div
                  className="text-[#C9963A] text-xs tracking-wider"
                  style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
                >
                  Élevage familial depuis 1994
                </div>
              </div>
            </div>
            <p className="text-[#D4A574]/60 leading-relaxed text-sm mb-6">
              Élevage passionné de Cavalier King Charles en Île-de-France, spécialisé dans les couleurs Blenheim et Tricolore depuis plus de 30 ans.
            </p>
            {/* Certifications */}
            <div className="space-y-2">
              {["Inscription LOF officielle", "Membre du Club CKC", "0% consanguinité"].map((c) => (
                <div key={c} className="flex items-center gap-2 text-xs text-[#D4A574]/50">
                  <span className="text-[#C9963A] text-[0.5rem]">◆</span>
                  {c}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation col */}
          <div>
            <h4
              className="text-white font-cinzel text-[0.68rem] tracking-[0.2em] uppercase mb-6"
              style={{ fontFamily: "var(--font-cinzel)" }}
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
                  href: "https://www.ckc-iledefrance.com/copie-de-nos-chiots-disponibles",
                  label: "Nos reproducteurs",
                  external: true,
                },
                {
                  href: "https://www.ckc-iledefrance.com/album-photo",
                  label: "Album photo",
                  external: true,
                },
              ].map((link) =>
                link.external ? (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D4A574]/60 hover:text-[#E8B96A] transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-[#C9963A] text-xs">→</span>
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#D4A574]/60 hover:text-[#E8B96A] transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-[#C9963A] text-xs">→</span>
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact col */}
          <div>
            <h4
              className="text-white font-cinzel text-[0.68rem] tracking-[0.2em] uppercase mb-6"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Nous joindre
            </h4>
            <div className="space-y-5">
              <div>
                <div className="text-[#C9963A] text-[0.6rem] tracking-[0.2em] uppercase mb-1.5"
                  style={{ fontFamily: "var(--font-cinzel)" }}>
                  Téléphone
                </div>
                <a
                  href="tel:0699387761"
                  className="text-white text-xl hover:text-[#E8B96A] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  06 99 38 77 61
                </a>
              </div>
              <div>
                <div className="text-[#C9963A] text-[0.6rem] tracking-[0.2em] uppercase mb-1.5"
                  style={{ fontFamily: "var(--font-cinzel)" }}>
                  Région
                </div>
                <p className="text-[#D4A574]/70 text-sm">Île-de-France</p>
              </div>
              <div>
                <div className="text-[#C9963A] text-[0.6rem] tracking-[0.2em] uppercase mb-2"
                  style={{ fontFamily: "var(--font-cinzel)" }}>
                  Réseaux sociaux
                </div>
                <a
                  href="https://www.instagram.com/woof_pattounes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#D4A574]/60 hover:text-[#E8B96A] transition-colors duration-300 text-sm"
                >
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  @woof_pattounes
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://mainecoon77.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4A574]/40 hover:text-[#D4A574]/70 transition-colors duration-300 text-xs"
                  style={{ fontFamily: "var(--font-cinzel)", letterSpacing: "0.1em" }}
                >
                  → Élevage Maine Coon : mainecoon77.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#C9963A]/10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="text-[#D4A574]/30 text-[0.65rem] tracking-[0.15em] uppercase"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            © {new Date().getFullYear()} CKC Île-de-France — Tous droits réservés
          </p>
          <div className="flex items-center gap-2 text-[#C9963A]/40">
            <span className="text-xs">✦</span>
            <span
              className="text-[0.6rem] tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Élevage LOF · Cavalier King Charles
            </span>
            <span className="text-xs">✦</span>
          </div>
        </div>
      </div>
    </footer>
  );
}