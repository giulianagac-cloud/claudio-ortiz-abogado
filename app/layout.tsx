import type { Metadata } from "next";
import { Newsreader, Public_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ortiz Alejandre — Derecho Corporativo para PyMEs",
  description:
    "Asesoramiento jurídico estratégico para empresas y PyMEs. Derecho corporativo, gestión y transformación digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${newsreader.variable} ${publicSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
