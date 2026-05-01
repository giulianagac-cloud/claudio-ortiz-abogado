import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Ortiz Alejandre — Derecho Corporativo para PyMEs",
  description:
    "Asesoramiento jurídico estratégico para empresas y PyMEs. Derecho corporativo, gestión y transformación digital.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Ortiz Alejandre — Derecho Corporativo para PyMEs",
    description: "Asesoramiento jurídico estratégico para empresas y PyMEs",
    url: "https://ortizalejandre.com",
    images: [
      {
        url: "https://ortizalejandre.com/og-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
