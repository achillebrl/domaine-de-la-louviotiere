import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <Navigation activePage="/" />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Full-bleed image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/hero.jpg"
            alt="Cavalier King Charles Blenheim et Tricolore en Île-de-France"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Rich layered overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0c06]/90 via-[#1a0c06]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0c06]/50 via-transparent to-transparent" />
        </div>

        {/* Decorative top-right corner ornament */}
        <div className="absolute top-8 right-8 opacity-40 pointer-events-none hidden md:block">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <path d="M80 0 L80 80 L0 80" stroke="#C9963A" strokeWidth="1" fill="none" opacity="0.5"/>
            <path d="M80 20 L60 20 L60 80" stroke="#C9963A" strokeWidth="0.5" fill="none" opacity="0.5"/>
          </svg>
        </div>

        {/* Hero content */}
        <div className="relative z-10 w-full pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              {/* Pre-title badge */}
              <div className="mb-6" style={{ animation: "fadeInUp 0.8s 0.2s both" }}>
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#C9963A]/50 rounded-full text-[#C9963A] text-[0.65rem] tracking-[0.2em] uppercase bg-[#C9963A]/10 backdrop-blur-sm"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  <span>✦</span> Élevage Familial depuis 1994 <span>✦</span>
                </span>
              </div>

              {/* Main title */}
              <h1
                className="text-[3.8rem] md:text-[6rem] lg:text-[7.5rem] font-light text-white leading-[0.92] mb-6"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  animation: "fadeInUp 0.9s 0.4s both",
                }}
              >
                Cavalier<br />
                <span className="not-italic font-semibold">King Charles</span>
              </h1>

              {/* Subtitle line with ornament */}
              <div
                className="flex items-center gap-4 mb-8"
                style={{ animation: "fadeInUp 0.9s 0.6s both" }}
              >
                <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-[#C9963A]/70" />
                <p
                  className="text-[#E8B96A] text-[0.72rem] tracking-[0.25em] uppercase whitespace-nowrap"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  Blenheim &amp; Tricolore · LOF
                </p>
                <div className="h-px flex-1 max-w-[60px] bg-gradient-to-l from-transparent to-[#C9963A]/70" />
              </div>

              <p
                className="text-white/80 text-xl md:text-2xl leading-relaxed mb-10 font-light max-w-xl"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  animation: "fadeInUp 0.9s 0.75s both",
                }}
              >
                Élevés en milieu familial, socialisés dès la naissance, inscrits au Livre des Origines Français.
              </p>

              {/* CTAs */}
              <div
                className="flex flex-wrap gap-4"
                style={{ animation: "fadeInUp 0.9s 0.9s both" }}
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#8B4513] text-white overflow-hidden transition-colors duration-500 hover:bg-[#6B3410]"
                >
                  <span
                    className="relative z-10 text-xs tracking-[0.2em] uppercase"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    Nous contacter
                  </span>
                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  <div className="absolute inset-0 bg-[#C9963A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  <span className="absolute inset-0 border border-white/20" />
                </Link>
                <a
                  href="tel:0699387761"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-white/40 text-white backdrop-blur-sm hover:border-[#C9963A] hover:text-[#E8B96A] transition-all duration-300"
                >
                  <span style={{ fontFamily: "var(--font-cormorant)" }} className="text-lg tracking-wide">
                    06 99 38 77 61
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2 opacity-50 pointer-events-none">
          <span
            className="text-[0.55rem] tracking-[0.3em] uppercase text-white"
            style={{ fontFamily: "var(--font-cinzel)", writingMode: "vertical-rl" }}
          >
            Découvrir
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* ── STATS BAND ──────────────────────────────────────────── */}
      <section className="bg-[#2C1810] paw-bg py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { num: "30+", label: "Années d'expérience" },
              { num: "0%", label: "Consanguinité" },
              { num: "LOF", label: "Tous nos chiots" },
              { num: "2", label: "Couleurs exclusives" },
            ].map((stat, i) => (
              <div key={i} className="text-center" data-animate="fade-up" data-delay={String(i * 150)}>
                <div
                  className="text-[#C9963A]"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "3.5rem",
                    fontWeight: 300,
                    lineHeight: 1,
                  }}
                >
                  {stat.num}
                </div>
                <div
                  className="mt-2 text-[#D4A574]/70 text-[0.6rem] tracking-[0.2em] uppercase"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────────── */}
      <section className="bg-[#FDF6EC] py-24 md:py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

            {/* Image column */}
            <div className="relative" data-animate="fade-left">
              {/* Decorative offset frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#C9963A]/30 pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 bg-[#F5E6D0] -z-10" />
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/assets/about.jpg"
                  alt="Notre élevage familial de Cavalier King Charles en Île-de-France"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-8 -right-4 md:right-8 bg-[#8B4513] text-white px-6 py-5 shadow-2xl">
                <div
                  className="text-[0.6rem] tracking-[0.25em] uppercase text-[#E8B96A] mb-1"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  Depuis
                </div>
                <div
                  className="text-4xl font-light leading-none"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  1994
                </div>
              </div>
            </div>

            {/* Text column */}
            <div>
              <div data-animate="fade-right" data-delay="100">
                <span className="badge mb-6">
                  <span>✦</span> Notre histoire
                </span>
              </div>

              <h2
                data-animate="fade-right"
                data-delay="200"
                className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-8"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Plus de <em className="gold-text not-italic font-semibold">30 ans</em><br />
                de passion
              </h2>

              <div className="section-divider justify-start mb-8" data-animate="fade-right" data-delay="300">
                <span style={{ background: "linear-gradient(90deg, #C9963A, transparent)" }} />
                <div className="diamond" />
              </div>

              <div
                className="space-y-5 text-[1.08rem] leading-relaxed text-[#5C3317]/80"
                data-animate="fade-right"
                data-delay="350"
              >
                <p>
                  Nous sommes{" "}
                  <strong className="text-[#2C1810] font-semibold">
                    heureux de vous dire que cela fait plus de 30 ans d'élevage
                  </strong>{" "}
                  avec cette belle race qu'est le Cavalier King Charles, que nous avons choisie pour son caractère exceptionnel — calme, affectueux. Ces petites boules de poil n'aboient même pas !
                </p>
                <p>
                  Nous avons décidé de nous concentrer sur deux couleurs uniquement&nbsp;: le{" "}
                  <strong className="text-[#8B4513]">Tricolore</strong> et le{" "}
                  <strong className="text-[#8B4513]">Blenheim</strong>. Ce compagnon de vie est l'être idéal pour la vie en région parisienne comme à la campagne — appartement ou maison.
                </p>
                <p>
                  Notre expérience nous permet de certifier que nous travaillons à{" "}
                  <strong className="text-[#2C1810]">0% de consanguinité</strong>, malheureusement porte ouverte aux maladies. Nous sommes également{" "}
                  <strong className="text-[#2C1810]">membres du Club de Cavalier King Charles</strong>.
                </p>
              </div>

              <div data-animate="fade-right" data-delay="500" className="mt-10">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 text-[#8B4513] border-b border-[#8B4513]/30 pb-1 hover:border-[#8B4513] transition-all duration-300"
                  style={{
                    fontFamily: "var(--font-cinzel)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  En savoir plus
                  <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GUARANTEES RIBBON ─────────────────────────────────── */}
      <section className="bg-[#F5E6D0] py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12" data-animate="fade-up">
            <div className="section-divider mb-4">
              <span />
              <div className="diamond" />
              <span />
            </div>
            <h2
              className="text-4xl md:text-5xl font-light text-[#2C1810]"
              style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
            >
              Nos engagements
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: "🏅",
                title: "Inscrits au LOF",
                body: "Seul le LOF vous garantit un vrai Cavalier King Charles en caractère et en esthétique. C'est la certification de l'absence de consanguinité dans sa généalogie.",
                delay: "0",
              },
              {
                icon: "💚",
                title: "0% Consanguinité",
                body: "Nous travaillons rigoureusement à 0% de consanguinité — garantie d'une santé optimale et d'une conformité parfaite à la race.",
                delay: "200",
              },
              {
                icon: "🏠",
                title: "Élevage Familial",
                body: "Élevés avec des chats, socialisés dès la naissance avec humains et animaux. Des séances de puppy yoga renforcent leur curiosité et leur confiance.",
                delay: "400",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-animate="fade-up"
                data-delay={item.delay}
                className="card-lift bg-white p-8 md:p-10 relative group border border-[#C9963A]/10 hover:border-[#C9963A]/40 transition-colors duration-300"
              >
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3
                  className="text-2xl font-semibold text-[#2C1810] mb-3"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {item.title}
                </h3>
                <div className="w-8 h-0.5 bg-[#C9963A] mb-4 transition-all duration-500 group-hover:w-16" />
                <p className="text-[#5C3317]/75 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className="bg-[#2C1810] py-24 md:py-36 paw-bg overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <div data-animate="fade-up">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#C9963A]/40 rounded-full text-[#C9963A] text-[0.62rem] tracking-[0.2em] uppercase mb-6"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                <span>✦</span> Ce que nous proposons <span>✦</span>
              </span>
            </div>
            <h2
              data-animate="fade-up"
              data-delay="150"
              className="text-5xl md:text-6xl font-light text-white leading-tight"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Nos <em className="gold-text" style={{ fontStyle: "italic" }}>services</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                name: "Vente de Chiots LOF",
                desc: "Chiots Blenheim et Tricolore inscrits au LOF, élevés en milieu familial, socialisés avec chats et humains. Proposés uniquement via des sites professionnels reconnus — jamais sur Le Bon Coin.",
                delay: "0",
              },
              {
                num: "02",
                name: "Conseils Élevage",
                desc: "Accompagnement personnalisé pour les futurs propriétaires : choix du chiot, caractéristiques de la race, conseils d'entretien. Notre expertise de 30 ans est à votre service.",
                delay: "200",
              },
              {
                num: "03",
                name: "Puppy Yoga",
                desc: "Sessions de socialisation originales et enrichissantes. Les chiots développent leur curiosité et leur confiance en interagissant avec des humains dans un cadre bienveillant.",
                delay: "400",
              },
            ].map((svc, i) => (
              <div
                key={i}
                data-animate="scale-in"
                data-delay={svc.delay}
                className="group relative border border-[#C9963A]/20 p-8 md:p-10 hover:border-[#C9963A]/60 transition-all duration-500 bg-[#1a0c06]/50 hover:bg-[#1a0c06]/80"
              >
                {/* Large number */}
                <div
                  className="text-[5rem] font-light leading-none text-[#C9963A]/15 mb-4 select-none transition-all duration-500 group-hover:text-[#C9963A]/30"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {svc.num}
                </div>
                <h3
                  className="text-2xl font-semibold text-white mb-4"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {svc.name}
                </h3>
                <div className="w-8 h-px bg-[#C9963A] mb-4 transition-all duration-500 group-hover:w-12" />
                <p className="text-[#D4A574]/70 leading-relaxed text-[0.95rem]">{svc.desc}</p>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-b-[20px] border-l-transparent border-b-[#C9963A]/20 transition-all duration-500 group-hover:border-b-[#C9963A]/50" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOF HIGHLIGHT ─────────────────────────────────────── */}
      <section className="bg-[#FDF6EC] py-24 md:py-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3" data-animate="fade-left">
              <span className="badge mb-6">
                <span>✦</span> Notre promesse qualité
              </span>
              <h2
                className="text-5xl md:text-6xl font-light text-[#2C1810] leading-tight mb-8"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Jamais sur<br />
                <em className="text-[#8B4513] font-semibold" style={{ fontStyle: "italic" }}>
                  Le Bon Coin
                </em>
              </h2>
              <p
                className="text-xl text-[#5C3317]/80 leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Nous proposons nos chiots{" "}
                <strong>uniquement via des sites professionnels reconnus</strong> — Éleveurs-Online et Chiots de France — ainsi que sur notre propre site. Cette démarche reflète notre engagement pour des pratiques transparentes et éthiques.
              </p>
              <p className="text-[#5C3317]/70 leading-relaxed">
                Nous sommes là pour vous conseiller, et nous vous dirons par exemple de ne pas choisir un chiot sans vérifier son inscription au LOF — la seule garantie d'authenticité de la race.
              </p>
            </div>
            <div className="md:col-span-2" data-animate="fade-right" data-delay="200">
              <div className="bg-[#2C1810] p-8 md:p-10 relative">
                <div className="absolute top-4 left-4 right-4 bottom-4 border border-[#C9963A]/20 pointer-events-none" />
                <div className="text-center">
                  <div className="text-6xl mb-4">🏆</div>
                  <h3
                    className="text-3xl font-semibold text-white mb-3"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Nos certifications
                  </h3>
                  <div className="w-12 h-px bg-[#C9963A] mx-auto mb-6" />
                  <ul className="space-y-4 text-left">
                    {[
                      "Inscription LOF officielle",
                      "Membre du Club CKC",
                      "30 ans d'expertise exclusive",
                      "0% consanguinité certifié",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#D4A574]/90">
                        <span className="text-[#C9963A] mt-1 flex-shrink-0">◆</span>
                        <span style={{ fontFamily: "var(--font-eb-garamond)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BREED INFO ────────────────────────────────────────── */}
      <section className="bg-[#F5E6D0] py-24 md:py-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16" data-animate="fade-up">
            <h2
              className="text-5xl md:text-6xl font-light text-[#2C1810] leading-tight"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Le <em style={{ fontStyle: "italic" }}>Cavalier King Charles</em><br />
              <span className="text-4xl text-[#8B4513]">en deux couleurs d'exception</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {[
              {
                color: "Blenheim",
                accentHex: "#E8B96A",
                bg: "bg-[#8B4513]",
                desc: "Le Blenheim est la robe la plus emblématique du Cavalier King Charles — châtaigne et blanc, avec l'élégante tache en forme de losange sur le crâne.",
                traits: ["Robe châtaigne et blanc", "Tache de Blenheim", "Yeux brun noisette"],
                delay: "0",
              },
              {
                color: "Tricolore",
                accentHex: "#C9963A",
                bg: "bg-[#2C1810]",
                desc: "Le Tricolore associe le noir, le blanc et le feu dans une harmonie distinctive. Son regard expressif et sa silhouette équilibrée en font un compagnon remarquable.",
                traits: ["Robe noir, blanc et feu", "Marques feu au-dessus des yeux", "Expression vive et douce"],
                delay: "200",
              },
            ].map((breed, i) => (
              <div
                key={i}
                data-animate="scale-in"
                data-delay={breed.delay}
                className={`${breed.bg} p-10 md:p-12 relative overflow-hidden group card-lift`}
              >
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-10"
                  style={{ background: breed.accentHex, transform: "translate(30%, -30%)" }}
                />
                <h3
                  className="text-4xl font-semibold text-white mb-3"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {breed.color}
                </h3>
                <div className="w-10 h-0.5 mb-6" style={{ background: breed.accentHex }} />
                <p className="text-white/75 leading-relaxed mb-8">{breed.desc}</p>
                <ul className="space-y-2">
                  {breed.traits.map((t, j) => (
                    <li key={j} className="flex items-center gap-3 text-white/80 text-sm">
                      <span style={{ color: breed.accentHex }}>✦</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM CTA ──────────────────────────────────────── */}
      <section className="bg-[#2C1810] py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center" data-animate="fade-up">
          <div className="text-4xl mb-4">🐾</div>
          <h2
            className="text-3xl md:text-4xl font-light text-white mb-4"
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
          >
            Suivez notre quotidien
          </h2>
          <p className="text-[#D4A574]/70 mb-8">
            Retrouvez photos et vidéos de nos Cavaliers sur Instagram
          </p>
          <a
            href="https://www.instagram.com/woof_pattounes"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-[#C9963A]/50 text-[#E8B96A] hover:bg-[#C9963A]/20 hover:border-[#C9963A] transition-all duration-300"
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "0.72rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @woof_pattounes
          </a>
        </div>
      </section>

      {/* ── CONTACT CTA ──────────────────────────────────────── */}
      <section className="relative bg-[#FDF6EC] py-32 md:py-40 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 paw-bg opacity-50" />
        {/* Decorative circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#8B4513]/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#8B4513]/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-[#8B4513]/10 pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 md:px-12 text-center">
          <div data-animate="fade-up">
            <div className="section-divider mb-8">
              <span />
              <div className="diamond" />
              <span />
            </div>
            <h2
              className="text-5xl md:text-7xl font-light text-[#2C1810] leading-tight mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Votre futur<br />
              <em className="gold-text font-semibold" style={{ fontStyle: "italic" }}>compagnon</em>
              <br />vous attend
            </h2>
            <p
              className="text-xl text-[#5C3317]/70 mb-12 leading-relaxed"
              style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
            >
              Contactez-nous pour connaître les disponibilités et en apprendre davantage sur nos chiots Cavalier King Charles.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#8B4513] text-white overflow-hidden hover:bg-[#6B3410] transition-colors duration-500 shadow-lg shadow-[#8B4513]/25"
              >
                <span
                  style={{
                    fontFamily: "var(--font-cinzel)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  Prendre contact
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <a
                href="tel:0699387761"
                className="inline-flex items-center gap-3 text-[#8B4513] hover:text-[#6B3410] transition-colors duration-300"
              >
                <span className="text-2xl" style={{ fontFamily: "var(--font-cormorant)" }}>
                  06 99 38 77 61
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
