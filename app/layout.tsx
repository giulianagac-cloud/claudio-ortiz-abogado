import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
