import type { Metadata } from "next";
import { Cormorant_Garamond, EB_Garamond, Cinzel } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "CKC Île-de-France — Cavalier King Charles Blenheim & Tricolore",
  description:
    "Élevage familial de Cavalier King Charles en Île-de-France depuis plus de 30 ans, spécialisé dans les couleurs Blenheim et Tricolore. Tous les chiens sont inscrits au LOF.",
  keywords: ["Cavalier King Charles", "élevage", "LOF", "Blenheim", "Tricolore", "Île-de-France", "chiots"],
  openGraph: {
    title: "CKC Île-de-France — Cavalier King Charles Blenheim & Tricolore",
    description: "Élevage familial de Cavalier King Charles depuis plus de 30 ans",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${ebGaramond.variable} ${cinzel.variable}`}>
      <body className="grain">
        {children}
      </body>
    </html>
  );
}