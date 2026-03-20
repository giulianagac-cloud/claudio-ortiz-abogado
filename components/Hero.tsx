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
      className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6 md:px-8"
    >
      <div className="text-center max-w-2xl mx-auto">
        {/* Subtítulo superior */}
        <p
          ref={subtitleRef}
          className="font-sans text-xs text-[#999999] uppercase tracking-[4px] mb-6"
        >
          ASESORAMIENTO LEGAL CORPORATIVO
        </p>

        {/* Línea separadora */}
        <div className="w-10 h-px bg-[#555555] mx-auto mb-10" />

        {/* Título principal */}
        <h1
          ref={titleRef}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-normal leading-tight mb-8"
        >
          Claudio Ortiz
        </h1>

        {/* Subtítulo inferior */}
        <p
          ref={descRef}
          className="font-sans text-lg font-light text-[#CCCCCC] leading-relaxed max-w-md mx-auto mb-12"
        >
          Soluciones jurídicas estratégicas para empresas y PyMEs
        </p>

        {/* CTA */}
        <a
          ref={ctaRef}
          href="#contacto"
          onClick={handleContactClick}
          className="inline-block font-sans text-sm text-white uppercase tracking-[2px] border border-white px-10 py-4 transition-all duration-300 hover:bg-white hover:text-[#0A0A0A]"
        >
          CONTACTAR
        </a>
      </div>
    </section>
  );
}
