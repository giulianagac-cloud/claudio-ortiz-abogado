"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (ctaRef.current) {
      ctaRef.current.style.opacity = "0";
      ctaRef.current.style.transform = "translateY(16px)";
      setTimeout(() => {
        if (ctaRef.current) {
          ctaRef.current.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
          ctaRef.current.style.opacity = "1";
          ctaRef.current.style.transform = "translateY(0)";
        }
      }, 400);
    }
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("contacto");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      {/* Overlay muy sutil */}
      <div className="absolute inset-0 bg-[#0F1628]/[0.12]" />

      {/* Botón CONTACTAR — tercio inferior, centrado */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-20 z-10">
        <a
          ref={ctaRef}
          href="#contacto"
          onClick={handleContactClick}
          className="inline-block font-sans text-base text-[#C9A96E] uppercase tracking-[2px] border border-[#C9A96E] px-10 py-4 transition-all duration-300 hover:bg-[#C9A96E] hover:text-[#0F1628]"
        >
          CONTACTAR
        </a>
      </div>
    </section>
  );
}
