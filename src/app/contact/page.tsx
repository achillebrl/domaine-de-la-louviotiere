import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | CKC Île-de-France",
  description:
    "Contactez notre élevage familial de Cavalier King Charles en Île-de-France. Spécialisés dans les couleurs Blenheim et Tricolore, chiots LOF disponibles.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation activePage="/contact" />
      <main className="min-h-screen bg-[#FAF6F0]">

        {/* ─── HERO BANNER ─── */}
        <section className="relative pt-36 pb-20 px-6 text-center bg-[#FAF6F0] border-b border-[rgba(201,169,110,0.2)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(139,94,60,0.05)] to-transparent pointer-events-none" />
          <div className="max-w-2xl mx-auto relative">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="block h-px w-12 bg-[#C9A96E]" />
              <span
                className="text-[#8B5E3C] tracking-[0.3em] text-xs uppercase"
                style={{ fontFamily: "var(--font-tenor)" }}
              >
                CKC Île-de-France
              </span>
              <span className="block h-px w-12 bg-[#C9A96E]" />
            </div>
            <h1
              className="text-5xl md:text-6xl font-light text-[#3D2B1A] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Nous <span className="italic text-[#8B5E3C] font-medium">Contacter</span>
            </h1>
            <p className="text-[#5C3D22]/70 text-lg leading-relaxed">
              Nous sommes à votre disposition pour de plus amples renseignements. Si vous souhaitez nous rendre visite, merci de prendre rendez-vous au préalable.
            </p>
          </div>
        </section>

        {/* ─── MAIN CONTENT ─── */}
        <section className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Left column — info */}
          <div className="space-y-10">

            <div>
              <h2
                className="text-3xl font-light text-[#3D2B1A] mb-4 pb-2 border-b border-[rgba(201,169,110,0.25)]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Nous situer
              </h2>
              <p className="text-[#5C3D22]/70 leading-relaxed mb-4">
                Nous sommes en Île-de-France, à 30 minutes de Paris Bercy (28 km), accessibles via le{" "}
                <strong className="text-[#8B5E3C]">RER D</strong>. Reconnaissez-nous à notre grand portail blanc et notre pancarte d'élevage.
              </p>
              <p className="text-[#5C3D22]/70 leading-relaxed">
                Nous travaillons en famille (mère et fille) sur deux sites. Une gare RER D est à 10 minutes à pied de notre second emplacement.
              </p>
            </div>

            {/* Address & contact card */}
            <div className="bg-[#F0E8DC] rounded-2xl p-6 space-y-6 border border-[rgba(201,169,110,0.25)]">
              <div>
                <h3
                  className="text-[#8B5E3C] tracking-[0.25em] text-xs uppercase mb-3"
                  style={{ fontFamily: "var(--font-tenor)" }}
                >
                  Adresses
                </h3>
                <div className="space-y-3 text-[#3D2B1A]">
                  <p className="leading-snug text-sm">
                    Chemin du Grand Sentier<br />
                    <span className="text-[#5C3D22]/60">77166 Évry-Grégy-sur-Yerre — Seine-et-Marne</span>
                  </p>
                  <p className="leading-snug text-sm">
                    <span className="text-[#5C3D22]/60">91820 Boutigny-sur-Essonne — Essonne</span>
                  </p>
                </div>
              </div>

              <div>
                <h3
                  className="text-[#8B5E3C] tracking-[0.25em] text-xs uppercase mb-3"
                  style={{ fontFamily: "var(--font-tenor)" }}
                >
                  Contact direct
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-[#C9A96E] text-base flex-shrink-0">✆</span>
                    <a
                      href="tel:0699387761"
                      className="text-[#3D2B1A] hover:text-[#8B5E3C] transition-colors text-sm"
                    >
                      06 99 38 77 61
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#C9A96E] text-base flex-shrink-0">✉</span>
                    <a
                      href="mailto:attura.francoise@orange.fr"
                      className="text-[#3D2B1A] hover:text-[#8B5E3C] transition-colors text-sm break-all"
                    >
                      attura.francoise@orange.fr
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3
                className="text-[#8B5E3C] tracking-[0.25em] text-xs uppercase mb-4"
                style={{ fontFamily: "var(--font-tenor)" }}
              >
                Reconnaissances officielles
              </h3>
              <div className="flex gap-3">
                <span
                  className="text-[9px] tracking-[0.15em] uppercase bg-[rgba(201,169,110,0.1)] border border-[rgba(201,169,110,0.3)] text-[#8B5E3C] px-3 py-1.5"
                  style={{ fontFamily: "var(--font-tenor)" }}
                >
                  LOF
                </span>
                <span
                  className="text-[9px] tracking-[0.15em] uppercase bg-[rgba(201,169,110,0.1)] border border-[rgba(201,169,110,0.3)] text-[#8B5E3C] px-3 py-1.5"
                  style={{ fontFamily: "var(--font-tenor)" }}
                >
                  Club CKC
                </span>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div className="bg-white rounded-2xl p-8 border border-[rgba(201,169,110,0.2)] shadow-sm">
            <h2
              className="text-3xl font-light text-[#3D2B1A] mb-6 pb-2 border-b border-[rgba(201,169,110,0.25)]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Écrivez-nous
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Prénom"
                  className="col-span-1 px-4 py-3 rounded-xl bg-[#FAF6F0] border border-[rgba(201,169,110,0.25)] text-[#3D2B1A] placeholder-[#8B5E3C]/40 focus:outline-none focus:border-[#8B5E3C] transition-colors text-sm"
                />
                <input
                  type="text"
                  placeholder="Nom de famille"
                  className="col-span-1 px-4 py-3 rounded-xl bg-[#FAF6F0] border border-[rgba(201,169,110,0.25)] text-[#3D2B1A] placeholder-[#8B5E3C]/40 focus:outline-none focus:border-[#8B5E3C] transition-colors text-sm"
                />
              </div>
              <input
                type="email"
                placeholder="E-mail"
                className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0] border border-[rgba(201,169,110,0.25)] text-[#3D2B1A] placeholder-[#8B5E3C]/40 focus:outline-none focus:border-[#8B5E3C] transition-colors text-sm"
              />
              <input
                type="tel"
                placeholder="Téléphone"
                className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0] border border-[rgba(201,169,110,0.25)] text-[#3D2B1A] placeholder-[#8B5E3C]/40 focus:outline-none focus:border-[#8B5E3C] transition-colors text-sm"
              />
              <textarea
                rows={5}
                placeholder="Dites-nous en plus sur votre projet…"
                className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0] border border-[rgba(201,169,110,0.25)] text-[#3D2B1A] placeholder-[#8B5E3C]/40 focus:outline-none focus:border-[#8B5E3C] transition-colors resize-none text-sm"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#8B5E3C] hover:bg-[#6B4A2E] text-[#FAF6F0] tracking-[0.2em] uppercase text-xs transition-colors duration-300"
                style={{ fontFamily: "var(--font-tenor)" }}
              >
                Envoyer le message
              </button>
            </form>

            <p
              className="text-[#8B5E3C]/40 text-[10px] tracking-[0.15em] uppercase mt-6 text-center"
              style={{ fontFamily: "var(--font-tenor)" }}
            >
              Visite sur rendez-vous uniquement
            </p>
          </div>

        </section>

      </main>
      <Footer />
    </>
  );
}
