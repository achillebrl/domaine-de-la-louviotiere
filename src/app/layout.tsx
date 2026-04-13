import type { Metadata } from "next";
import { Cormorant_Garamond, Crimson_Pro, Tenor_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const crimson = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const tenor = Tenor_Sans({
  subsets: ["latin"],
  variable: "--font-tenor",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "CKC Île-de-France — Cavalier King Charles Blenheim & Tricolore",
  description:
    "Élevage familial de Cavalier King Charles en Île-de-France depuis plus de 30 ans. Chiots LOF Blenheim & Tricolore, 0% consanguinité, socialisation dès le plus jeune âge.",
  keywords:
    "Cavalier King Charles, élevage, Île-de-France, Blenheim, Tricolore, LOF, chiots",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${crimson.variable} ${tenor.variable}`}>
      <body>{children}</body>
    </html>
  );
}