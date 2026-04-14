import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | CKC Île-de-France",
  description:
    "Élevage familial de Cavalier King Charles en Île-de-France, spécialisé dans les couleurs Blenheim et Tricolore. Tous les chiots sont inscrits au LOF. Contactez-nous pour connaître les disponibilités.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FDF6EC]">
      <Navigation activePage="/contact" />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 px-6 text-center bg-[#F5E6D0] border-b border-[#C9963A]/20 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#8B4513]/05 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-[#8B4513]/08 pointer-events-none" />

        <div className="relative max-w-2xl mx-auto">
          <p
            className="text-[#C9963A] font-cinzel text-[0.65rem] tracking-[0.25em] uppercase mb-4"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            ✦ CKC Île-de-France ✦
          </p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light text-[#2C1810] mb-6 leading-tight"
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
          >
            Nous Contacter
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9963A]/60" />
            <div className="w-1.5 h-1.5 bg-[#C9963A] rotate-45" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9963A]/60" />
          </div>
          <p
            className="text-[#5C3317]/75 text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Nous sommes à votre disposition pour de plus amples renseignements. Si vous souhaitez nous rendre visite, merci de prendre rendez-vous au préalable.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">

          {/* ── Left: info ───────────────────────────────────── */}
          <div className="space-y-10">
            <div>
              <h2
                className="font-cinzel text-[#8B4513] text-[0.68rem] tracking-[0.25em] uppercase mb-4"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Nous Situer
              </h2>
              <p
                className="text-[#5C3317]/75 text-base leading-relaxed"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Situés en Île-de-France, nous accueillons les familles dans deux adresses. Notre élevage principal se trouve à Évry Grégy-sur-Yerre, à 30 minutes de Paris-Bercy, accessible en RER D. Reconnaissez-nous grâce à notre grand portail blanc et notre pancarte d'élevage. Nous sommes également présents à Boutigny-sur-Essonne, à 10 minutes à pied d'une gare RER D.
              </p>
            </div>

            {/* Addresses card */}
            <div className="bg-white border border-[#C9963A]/20 p-6 md:p-8 space-y-6">
              <div>
                <h3
                  className="font-cinzel text-[#C9963A] text-[0.62rem] tracking-[0.25em] uppercase mb-4"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  Adresses
                </h3>
                <div
                  className="text-[#2C1810] text-base space-y-4"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  <div>
                    <p className="font-semibold text-[#8B4513] mb-1">Évry Grégy-sur-Yerre</p>
                    <p className="text-[#5C3317]/75">Chemin du Grand Sentier</p>
                    <p className="text-[#5C3317]/75">77166 Seine-et-Marne, Île-de-France</p>
                  </div>
                  <div className="border-t border-[#C9963A]/15 pt-4">
                    <p className="font-semibold text-[#8B4513] mb-1">Boutigny-sur-Essonne</p>
                    <p className="text-[#5C3317]/75">91820 Essonne, Île-de-France</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coordinates card */}
            <div className="bg-white border border-[#C9963A]/20 p-6 md:p-8">
              <h3
                className="font-cinzel text-[#C9963A] text-[0.62rem] tracking-[0.25em] uppercase mb-4"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Coordonnées
              </h3>
              <div
                className="text-[#2C1810] text-base space-y-3"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                <p className="flex items-baseline gap-3">
                  <span className="text-[#8B4513] font-semibold text-sm" style={{ fontFamily: "var(--font-cinzel)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Tél</span>
                  <a
                    href="tel:0699387761"
                    className="text-xl hover:text-[#C9963A] transition-colors duration-300"
                  >
                    06 99 38 77 61
                  </a>
                </p>
                <p className="flex items-baseline gap-3">
                  <span className="text-[#8B4513] font-semibold text-sm" style={{ fontFamily: "var(--font-cinzel)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Email</span>
                  <a
                    href="mailto:attura.francoise@orange.fr"
                    className="text-lg hover:text-[#C9963A] transition-colors duration-300 break-all"
                  >
                    attura.francoise@orange.fr
                  </a>
                </p>
                <p className="flex items-baseline gap-3">
                  <span className="text-[#8B4513] font-semibold" style={{ fontFamily: "var(--font-cinzel)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Instagram</span>
                  <a
                    href="https://www.instagram.com/woof_pattounes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-[#C9963A] transition-colors duration-300"
                  >
                    @woof_pattounes
                  </a>
                </p>
              </div>
            </div>

            {/* Info note */}
            <div className="flex gap-4 bg-[#F5E6D0] border-l-2 border-[#C9963A] p-5">
              <span className="text-[#C9963A] flex-shrink-0 mt-0.5">◆</span>
              <p
                className="text-[#5C3317]/80 text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Les visites se font <strong className="text-[#2C1810]">uniquement sur rendez-vous</strong>. N'hésitez pas à nous appeler ou à nous écrire pour convenir d'un créneau adapté.
              </p>
            </div>
          </div>

          {/* ── Right: form ──────────────────────────────────── */}
          <div>
            <h2
              className="font-cinzel text-[#8B4513] text-[0.68rem] tracking-[0.25em] uppercase mb-8"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Envoyez-nous un Message
            </h2>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="prenom"
                    className="text-[#5C3317]/70 text-[0.62rem] tracking-[0.15em] uppercase"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    Prénom
                  </label>
                  <input
                    id="prenom"
                    type="text"
                    placeholder="Marie"
                    className="w-full bg-white border border-[#C9963A]/25 px-4 py-3 text-[#2C1810] placeholder-[#C9963A]/30 focus:outline-none focus:border-[#C9963A] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="nom"
                    className="text-[#5C3317]/70 text-[0.62rem] tracking-[0.15em] uppercase"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    Nom
                  </label>
                  <input
                    id="nom"
                    type="text"
                    placeholder="Dupont"
                    className="w-full bg-white border border-[#C9963A]/25 px-4 py-3 text-[#2C1810] placeholder-[#C9963A]/30 focus:outline-none focus:border-[#C9963A] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-[#5C3317]/70 text-[0.62rem] tracking-[0.15em] uppercase"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="marie.dupont@email.fr"
                  className="w-full bg-white border border-[#C9963A]/25 px-4 py-3 text-[#2C1810] placeholder-[#C9963A]/30 focus:outline-none focus:border-[#C9963A] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="telephone"
                  className="text-[#5C3317]/70 text-[0.62rem] tracking-[0.15em] uppercase"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  Téléphone
                </label>
                <input
                  id="telephone"
                  type="tel"
                  placeholder="06 XX XX XX XX"
                  className="w-full bg-white border border-[#C9963A]/25 px-4 py-3 text-[#2C1810] placeholder-[#C9963A]/30 focus:outline-none focus:border-[#C9963A] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="sujet"
                  className="text-[#5C3317]/70 text-[0.62rem] tracking-[0.15em] uppercase"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  Sujet
                </label>
                <select
                  id="sujet"
                  className="w-full bg-white border border-[#C9963A]/25 px-4 py-3 text-[#2C1810] focus:outline-none focus:border-[#C9963A] transition-colors duration-200 appearance-none"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                  defaultValue=""
                >
                  <option value="" disabled>Sélectionnez un sujet…</option>
                  <option value="chiot">Disponibilité d'un chiot</option>
                  <option value="visite">Demande de visite</option>
                  <option value="info">Renseignements sur la race</option>
                  <option value="autre">Autre demande</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-[#5C3317]/70 text-[0.62rem] tracking-[0.15em] uppercase"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Dites-nous en plus sur votre projet…"
                  className="w-full bg-white border border-[#C9963A]/25 px-4 py-3 text-[#2C1810] placeholder-[#C9963A]/30 focus:outline-none focus:border-[#C9963A] transition-colors duration-200 resize-none"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                />
              </div>

              <button
                type="submit"
                className="group relative w-full bg-[#8B4513] text-white overflow-hidden py-4 transition-colors duration-500 hover:bg-[#6B3410]"
              >
                <span
                  className="relative z-10 font-cinzel text-[0.72rem] tracking-[0.25em] uppercase"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  Envoyer le message
                </span>
                <div className="absolute inset-0 bg-[#C9963A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </button>

              <p
                className="text-center text-[#5C3317]/50 text-sm pt-1"
                style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
              >
                Nous vous répondons généralement sous 24 heures.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────── */}
      <section className="bg-[#2C1810] py-20 px-6 paw-bg">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-3xl mb-4">🐾</div>
          <h2
            className="text-4xl md:text-5xl font-light text-white mb-4"
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
          >
            Préférez-vous nous appeler ?
          </h2>
          <p className="text-[#D4A574]/60 mb-8">
            Notre équipe est disponible pour répondre à toutes vos questions.
          </p>
          <a
            href="tel:0699387761"
            className="inline-flex items-center gap-3 px-10 py-5 border border-[#C9963A]/50 text-[#E8B96A] hover:bg-[#C9963A]/20 hover:border-[#C9963A] transition-all duration-300"
          >
            <span
              className="text-3xl tracking-wide"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              06 99 38 77 61
            </span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
