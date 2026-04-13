import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <ScrollAnimator />
      <div className="grain-overlay" aria-hidden="true" />
      <Navigation activePage="/" />

      <main>
        {/* ─── HERO ─── */}
        <section className="relative min-h-screen flex items-end overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/assets/hero.jpg"
              alt="Cavalier King Charles Blenheim et Tricolore"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Rich warm overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C0D05]/90 via-[#3D2B1A]/40 to-[#1C0D05]/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C0D05]/50 via-transparent to-transparent" />
          </div>

          {/* Decorative frame */}
          <div className="absolute inset-6 border border-[rgba(201,169,110,0.2)] pointer-events-none hidden md:block" />
          <div className="absolute inset-8 border border-[rgba(201,169,110,0.08)] pointer-events-none hidden md:block" />

          {/* Corner ornaments */}
          <div className="absolute top-10 left-10 w-8 h-8 border-t border-l border-[#C9A96E]/50 hidden md:block" />
          <div className="absolute top-10 right-10 w-8 h-8 border-t border-r border-[#C9A96E]/50 hidden md:block" />
          <div className="absolute bottom-10 left-10 w-8 h-8 border-b border-l border-[#C9A96E]/50 hidden md:block" />
          <div className="absolute bottom-10 right-10 w-8 h-8 border-b border-r border-[#C9A96E]/50 hidden md:block" />

          {/* Hero content */}
          <div className="relative z-10 w-full pb-20 md:pb-28 px-6 md:px-16 lg:px-24">
            <div className="max-w-4xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-6">
                <span className="block h-px w-12 bg-[#C9A96E]" />
                <span
                  className="text-[#C9A96E] tracking-[0.3em] text-xs uppercase"
                  style={{ fontFamily: "var(--font-tenor)" }}
                >
                  Île-de-France · Depuis 1994
                </span>
              </div>

              {/* Main title */}
              <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-light leading-[0.92] text-[#FAF6F0] mb-4">
                <span className="block italic font-medium text-[#E8D4A8]">
                  Cavalier
                </span>
                <span className="block">King Charles</span>
              </h1>

              {/* Subtitle */}
              <div className="flex items-center gap-4 mt-5 mb-8">
                <span
                  className="text-[#C9A96E]/80 tracking-[0.2em] text-sm"
                  style={{ fontFamily: "var(--font-tenor)" }}
                >
                  BLENHEIM
                </span>
                <span className="block h-px w-8 bg-[#C9A96E]/50" />
                <span
                  className="text-[#C9A96E]/80 tracking-[0.2em] text-sm"
                  style={{ fontFamily: "var(--font-tenor)" }}
                >
                  TRICOLORE
                </span>
              </div>

              <p className="text-[#F0E8DC]/80 text-lg md:text-xl font-light max-w-xl leading-relaxed mb-10">
                Élevage familial depuis plus de 30 ans, spécialisé dans l'excellence du Cavalier King Charles — inscrits au LOF, élevés avec amour.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary inline-block font-sans text-center">
                  Nous contacter
                </Link>
                <a
                  href="tel:0699387761"
                  className="btn-outline inline-block text-center"
                  style={{ color: "#E8D4A8", borderColor: "rgba(232,212,168,0.4)" }}
                >
                  06 99 38 77 61
                </a>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 right-10 hidden md:flex flex-col items-center gap-2">
            <span
              className="text-[#C9A96E]/60 text-[10px] tracking-[0.3em] rotate-90 origin-center"
              style={{ fontFamily: "var(--font-tenor)" }}
            >
              SCROLL
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-[#C9A96E]/60 to-transparent" />
          </div>
        </section>

        {/* ─── STATS STRIP ─── */}
        <section className="bg-[#3D2B1A] py-10 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-[rgba(201,169,110,0.2)]">
            {[
              { num: "30+", label: "Années d'expérience" },
              { num: "0%", label: "Consanguinité" },
              { num: "LOF", label: "Inscrits au livre officiel" },
              { num: "2", label: "Couleurs exclusives" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-4 px-6 text-center"
                data-animate="fade-up"
                data-delay={String(i * 100 + 100)}
              >
                <span className="text-3xl md:text-4xl font-light text-[#C9A96E] mb-1" style={{ fontFamily: "var(--font-cormorant)" }}>
                  {stat.num}
                </span>
                <span
                  className="text-[#F0E8DC]/60 text-[10px] tracking-[0.2em] uppercase"
                  style={{ fontFamily: "var(--font-tenor)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── ABOUT SECTION ─── */}
        <section className="py-24 md:py-36 px-6 md:px-12 lg:px-20 pattern-bg relative overflow-hidden">
          {/* Background decorative text */}
          <div
            className="absolute -right-8 top-1/2 -translate-y-1/2 text-[12rem] md:text-[18rem] font-bold text-[rgba(139,94,60,0.04)] select-none pointer-events-none leading-none"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            CKC
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* Image column */}
            <div className="relative" data-animate="fade-left">
              <div className="relative aspect-[3/4] max-w-md mx-auto md:mx-0">
                {/* Decorative offset border */}
                <div className="absolute -top-4 -left-4 right-4 bottom-4 border border-[rgba(201,169,110,0.3)]" />
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/assets/about.jpg"
                    alt="Notre élevage familial de Cavalier King Charles"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(61,43,26,0.3)] to-transparent" />
                </div>
                {/* Badge */}
                <div className="absolute -bottom-5 -right-5 bg-[#8B5E3C] text-[#FAF6F0] p-5 text-center luxury-border">
                  <span className="text-3xl font-light block" style={{ fontFamily: "var(--font-cormorant)" }}>30</span>
                  <span className="text-[9px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-tenor)" }}>ans</span>
                </div>
              </div>
            </div>

            {/* Text column */}
            <div>
              {/* Section label */}
              <div className="flex items-center gap-3 mb-6" data-animate="fade-up">
                <span className="block h-px w-8 bg-[#C9A96E]" />
                <span
                  className="text-[#8B5E3C] tracking-[0.3em] text-xs uppercase"
                  style={{ fontFamily: "var(--font-tenor)" }}
                >
                  Notre histoire
                </span>
              </div>

              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#3D2B1A] mb-6"
                data-animate="fade-up"
                data-delay="100"
              >
                Une passion transmise,
                <span className="block italic text-[#8B5E3C] font-medium">génération après génération</span>
              </h2>

              <div className="ornament-long mb-8" style={{ marginLeft: 0 }} data-animate="fade-up" data-delay="200" />

              <p
                className="text-[#5C3D22]/80 text-lg leading-relaxed mb-5"
                data-animate="fade-up"
                data-delay="250"
              >
                Depuis plus de 30 ans, nous élevons le Cavalier King Charles — une race choisie pour son caractère exceptionnel, calme et profondément affectueux. Ces petites boules de poil ne sont même pas aboieuses, et s'adaptent aussi bien à l'appartement qu'à la maison.
              </p>

              <p
                className="text-[#5C3D22]/80 text-lg leading-relaxed mb-8"
                data-animate="fade-up"
                data-delay="300"
              >
                Nous nous concentrons exclusivement sur deux couleurs : le <strong className="text-[#8B5E3C]">Blenheim</strong> et le <strong className="text-[#8B5E3C]">Tricolore</strong>. Notre engagement envers la santé est absolu : nous certifions un travail à <strong className="text-[#8B5E3C]">0% de consanguinité</strong>, garantie d'une généalogie saine et d'un caractère fidèle à la race.
              </p>

              <div className="space-y-0 mb-10" data-animate="fade-up" data-delay="350">
                {[
                  { icon: "✦", text: "Membres du Club de Cavalier King Charles" },
                  { icon: "✦", text: "Chiots inscrits au LOF — pureté garantie" },
                  { icon: "✦", text: "Élevés avec des chats, socialisés dès le plus jeune âge" },
                  { icon: "✦", text: "Séances de puppy yoga pour l'épanouissement des chiots" },
                ].map((item, i) => (
                  <div key={i} className="feature-item">
                    <span className="text-[#C9A96E] text-xs mt-1 flex-shrink-0">{item.icon}</span>
                    <span className="text-[#3D2B1A]/80 text-base">{item.text}</span>
                  </div>
                ))}
              </div>

              <div data-animate="fade-up" data-delay="400">
                <Link href="/contact" className="btn-primary inline-block">
                  Rencontrons-nous
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── QUOTE SECTION ─── */}
        <section className="bg-[#F0E8DC] py-20 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent" />

          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#C9A96E] text-4xl font-serif mb-6 block" aria-hidden="true">❝</span>
            <p
              className="elegant-quote text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-8"
              data-animate="fade-up"
            >
              Seul le LOF vous garantit un vrai Cavalier King Charles — en caractère, en esthétique, et en santé.
            </p>
            <div className="ornament-long" data-animate="fade-up" data-delay="200" />
            <p
              className="text-[#8B5E3C]/70 mt-6 tracking-[0.2em] text-xs uppercase"
              style={{ fontFamily: "var(--font-tenor)" }}
              data-animate="fade-up"
              data-delay="300"
            >
              CKC Île-de-France
            </p>
          </div>
        </section>

        {/* ─── SERVICES / USP ─── */}
        <section className="py-24 md:py-36 px-6 md:px-12 lg:px-20 bg-[#FAF6F0]">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-4 mb-4" data-animate="fade-up">
                <span className="block h-px w-12 bg-[#C9A96E]" />
                <span
                  className="text-[#8B5E3C] tracking-[0.3em] text-xs uppercase"
                  style={{ fontFamily: "var(--font-tenor)" }}
                >
                  Ce qui nous distingue
                </span>
                <span className="block h-px w-12 bg-[#C9A96E]" />
              </div>
              <h2
                className="text-4xl md:text-5xl font-light text-[#3D2B1A]"
                data-animate="fade-up"
                data-delay="100"
              >
                L'excellence de l'élevage,
                <span className="italic text-[#8B5E3C] font-medium block">au service de votre compagnon</span>
              </h2>
            </div>

            {/* USP Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  num: "01",
                  title: "30 ans d'expérience",
                  desc: "Trois décennies dédiées exclusivement au Cavalier King Charles. Une maîtrise de la race, de son caractère, et de sa santé que seul le temps peut forger.",
                  delay: "100",
                },
                {
                  num: "02",
                  title: "0% consanguinité",
                  desc: "Notre engagement éthique premier : travailler à 0% de consanguinité. C'est la garantie d'une généalogie saine, sans prédisposition aux maladies héréditaires.",
                  delay: "200",
                },
                {
                  num: "03",
                  title: "Socialisation dès la naissance",
                  desc: "Nos chiots grandissent en milieu familial avec des chats, et bénéficient de séances de puppy yoga pour un épanouissement psychologique optimal.",
                  delay: "300",
                },
                {
                  num: "04",
                  title: "Inscrit au LOF",
                  desc: "Le Livre des Origines Français est l'unique garantie d'un vrai Cavalier King Charles. Tous nos chiots y sont inscrits — aucune exception.",
                  delay: "400",
                },
                {
                  num: "05",
                  title: "Club officiel",
                  desc: "Membres du Club de Cavalier King Charles, nous respectons les standards de la race et participons activement à la communauté cynophile française.",
                  delay: "500",
                },
                {
                  num: "06",
                  title: "Vente éthique uniquement",
                  desc: "Aucune annonce sur Le Bon Coin. Nous sélectionnons uniquement des plateformes professionnelles reconnues : Éleveurs-Online et Chiots de France.",
                  delay: "600",
                },
              ].map((usp, i) => (
                <div
                  key={i}
                  className="luxury-border p-8 relative group hover:bg-[rgba(139,94,60,0.03)] transition-colors duration-300"
                  data-animate="fade-up"
                  data-delay={usp.delay}
                >
                  <span
                    className="text-[#C9A96E]/30 text-5xl font-light block mb-4 group-hover:text-[#C9A96E]/50 transition-colors"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {usp.num}
                  </span>
                  <h3 className="text-xl font-medium text-[#3D2B1A] mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>
                    {usp.title}
                  </h3>
                  <p className="text-[#5C3D22]/70 text-base leading-relaxed">
                    {usp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── COLORS SECTION ─── */}
        <section className="py-24 md:py-32 bg-[#3D2B1A] px-6 md:px-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#C9A96E] blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#8B5E3C] blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4" data-animate="fade-up">
                <span className="block h-px w-12 bg-[#C9A96E]/50" />
                <span
                  className="text-[#C9A96E]/70 tracking-[0.3em] text-xs uppercase"
                  style={{ fontFamily: "var(--font-tenor)" }}
                >
                  Nos spécialités
                </span>
                <span className="block h-px w-12 bg-[#C9A96E]/50" />
              </div>
              <h2
                className="text-4xl md:text-5xl text-[#FAF6F0] font-light"
                data-animate="fade-up"
                data-delay="100"
              >
                Deux couleurs, <span className="italic text-[#C9A96E] font-medium">une perfection</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Blenheim",
                  desc: "Le châtain-blanc iconique du Cavalier — taches brun-roux vif sur fond blanc immaculé, avec la tache caractéristique « lozenge » sur le crâne. Élégance et douceur à l'état pur.",
                  accent: "#C9A96E",
                  delay: "200",
                },
                {
                  name: "Tricolore",
                  desc: "Noir, blanc et feu en harmonie parfaite — le tricolore révèle toute la noblesse du Cavalier. Un manteau d'une richesse visuelle incomparable, rare et précieux.",
                  accent: "#E8D4A8",
                  delay: "300",
                },
              ].map((color, i) => (
                <div
                  key={i}
                  className="border border-[rgba(201,169,110,0.2)] p-10 relative overflow-hidden group"
                  data-animate="fade-up"
                  data-delay={color.delay}
                >
                  <div className="absolute top-0 left-0 w-1 h-full" style={{ background: color.accent }} />
                  <h3
                    className="text-3xl md:text-4xl font-light mb-4"
                    style={{ color: color.accent, fontFamily: "var(--font-cormorant)" }}
                  >
                    {color.name}
                  </h3>
                  <p className="text-[#F0E8DC]/70 text-base leading-relaxed">
                    {color.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CERTIFICATIONS ─── */}
        <section className="py-20 px-6 bg-[#F0E8DC]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8" data-animate="fade-up">
              <span className="block h-px w-12 bg-[#C9A96E]" />
              <span
                className="text-[#8B5E3C] tracking-[0.3em] text-xs uppercase"
                style={{ fontFamily: "var(--font-tenor)" }}
              >
                Reconnaissances officielles
              </span>
              <span className="block h-px w-12 bg-[#C9A96E]" />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {[
                {
                  cert: "LOF",
                  full: "Livre des Origines Français",
                  desc: "L'inscription au LOF est la seule garantie officielle de la pureté de race, de la généalogie et du caractère authentique du Cavalier King Charles.",
                  delay: "100",
                },
                {
                  cert: "Club CKC",
                  full: "Club de Cavalier King Charles",
                  desc: "Membres actifs du Club officiel de la race en France — un engagement pour le respect des standards, la santé et le bien-être de nos chiens.",
                  delay: "200",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className="bg-[#FAF6F0] p-8 luxury-border text-left"
                  data-animate="fade-up"
                  data-delay={c.delay}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-[#8B5E3C] text-[#FAF6F0] px-3 py-2 text-sm font-medium flex-shrink-0" style={{ fontFamily: "var(--font-tenor)" }}>
                      {c.cert}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-[#3D2B1A] mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
                        {c.full}
                      </h4>
                      <p className="text-[#5C3D22]/70 text-sm leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA SECTION ─── */}
        <section className="py-28 md:py-36 px-6 relative overflow-hidden bg-[#FAF6F0]">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[rgba(139,94,60,0.05)] to-transparent" />
          </div>

          <div className="max-w-3xl mx-auto text-center relative">
            <div className="inline-block mb-8" data-animate="scale">
              <div className="w-16 h-16 border border-[#C9A96E]/40 rounded-full flex items-center justify-center mx-auto">
                <div className="w-10 h-10 border border-[#C9A96E]/60 rounded-full flex items-center justify-center">
                  <span className="text-[#C9A96E] text-lg">✦</span>
                </div>
              </div>
            </div>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-[#3D2B1A] mb-6 leading-tight"
              data-animate="fade-up"
              data-delay="100"
            >
              Votre futur compagnon
              <span className="italic text-[#8B5E3C] font-medium block">vous attend</span>
            </h2>

            <p
              className="text-[#5C3D22]/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto"
              data-animate="fade-up"
              data-delay="200"
            >
              Contactez-nous pour en savoir plus sur nos chiots disponibles, nos reproducteurs, et pour planifier une visite dans notre élevage familial en Île-de-France.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-animate="fade-up"
              data-delay="300"
            >
              <Link href="/contact" className="btn-primary inline-block text-center">
                Nous écrire
              </Link>
              <a
                href="tel:0699387761"
                className="btn-outline inline-block text-center"
              >
                06 99 38 77 61
              </a>
            </div>

            <p
              className="text-[#8B5E3C]/50 text-xs tracking-[0.2em] mt-8 uppercase"
              style={{ fontFamily: "var(--font-tenor)" }}
              data-animate="fade-up"
              data-delay="400"
            >
              Vente via Éleveurs-Online & Chiots de France uniquement
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}