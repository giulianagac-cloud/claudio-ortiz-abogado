"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const elements = [subtitleRef, titleRef, descRef, ctaRef];
    elements.forEach((ref, i) => {
      if (ref.current) {
        ref.current.style.opacity = "0";
        ref.current.style.transform = "translateY(16px)";
        setTimeout(() => {
          if (ref.current) {
            ref.current.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
            ref.current.style.opacity = "1";
            ref.current.style.transform = "translateY(0)";
          }
        }, 200 + i * 150);
      }
    });
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("contacto");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-8 overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0F1628]/[0.75]" />

      {/* Contenido */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Subtítulo superior */}
        <p
          ref={subtitleRef}
          className="font-sans text-sm text-[#C9A96E] uppercase tracking-[4px] mb-6"
        >
          ASESORAMIENTO LEGAL CORPORATIVO
        </p>

        {/* Línea separadora */}
        <div className="w-10 h-px bg-[#C9A96E] mx-auto mb-10" />

        {/* Título principal */}
        <h1
          ref={titleRef}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-normal leading-tight mb-8"
        >
          Abogado Claudio Ortiz
        </h1>

        {/* Subtítulo inferior */}
        <p
          ref={descRef}
          className="font-sans text-xl font-light text-[#8899AA] leading-relaxed max-w-md mx-auto mb-12"
        >
          Soluciones jurídicas estratégicas para empresas y PyMEs
        </p>

        {/* CTA */}
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
