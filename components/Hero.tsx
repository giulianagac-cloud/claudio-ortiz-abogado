"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const iconRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const separatorRef = useRef<HTMLDivElement>(null);
  const digitalRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const elements = [iconRef, titleRef, taglineRef, separatorRef, digitalRef, ctaRef];
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
      style={{
        background: "radial-gradient(ellipse at center, #142244 0%, #0F1628 70%, #0A0F1E 100%)",
      }}
    >
      {/* Contenido */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">

        {/* Ícono balanza con detalle digital */}
        <div ref={iconRef} className="flex justify-center mb-0">
          <svg
            width="130"
            height="130"
            viewBox="0 0 130 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Poste central */}
            <line x1="65" y1="20" x2="65" y2="105" stroke="#F8F6F1" strokeWidth="1.2" strokeLinecap="round" />
            {/* Base */}
            <line x1="45" y1="105" x2="85" y2="105" stroke="#F8F6F1" strokeWidth="1.2" strokeLinecap="round" />
            {/* Viga horizontal */}
            <line x1="25" y1="38" x2="105" y2="38" stroke="#F8F6F1" strokeWidth="1.2" strokeLinecap="round" />
            {/* Punto central de la viga */}
            <circle cx="65" cy="38" r="2" stroke="#F8F6F1" strokeWidth="1" fill="none" />
            {/* Cadena izquierda */}
            <line x1="25" y1="38" x2="25" y2="60" stroke="#F8F6F1" strokeWidth="1" strokeLinecap="round" />
            {/* Platillo izquierdo */}
            <path d="M12 60 Q25 68 38 60" stroke="#F8F6F1" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            {/* Cadena derecha */}
            <line x1="105" y1="38" x2="105" y2="60" stroke="#F8F6F1" strokeWidth="1" strokeLinecap="round" />
            {/* Platillo derecho */}
            <path d="M92 60 Q105 68 118 60" stroke="#F8F6F1" strokeWidth="1.2" fill="none" strokeLinecap="round" />

            {/* Detalle digital — líneas de circuito lado derecho */}
            <line x1="105" y1="45" x2="118" y2="45" stroke="#8899AA" strokeWidth="0.8" strokeLinecap="round" />
            <circle cx="120" cy="45" r="1.5" fill="#8899AA" />
            <line x1="105" y1="52" x2="124" y2="52" stroke="#8899AA" strokeWidth="0.8" strokeLinecap="round" />
            <circle cx="126" cy="52" r="1.5" fill="#8899AA" />
            <line x1="118" y1="45" x2="118" y2="52" stroke="#8899AA" strokeWidth="0.8" strokeLinecap="round" />

            {/* Detalle digital — líneas lado izquierdo */}
            <line x1="25" y1="45" x2="12" y2="45" stroke="#8899AA" strokeWidth="0.8" strokeLinecap="round" />
            <circle cx="10" cy="45" r="1.5" fill="#8899AA" />
            <line x1="25" y1="52" x2="6" y2="52" stroke="#8899AA" strokeWidth="0.8" strokeLinecap="round" />
            <circle cx="4" cy="52" r="1.5" fill="#8899AA" />
            <line x1="12" y1="45" x2="12" y2="52" stroke="#8899AA" strokeWidth="0.8" strokeLinecap="round" />
          </svg>
        </div>

        {/* Título principal */}
        <h1
          ref={titleRef}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-normal tracking-[3px] md:tracking-[6px] mt-8 md:mt-10"
        >
          ORTIZ ALEJANDRE
        </h1>

        {/* DERECHO CORPORATIVO con líneas + PARA PYMES */}
        <div ref={taglineRef} className="mt-4 md:mt-6">
          <div className="flex items-center justify-center gap-4">
            <div className="w-[60px] h-px bg-[#8899AA]" />
            <span className="font-sans uppercase tracking-[3px] text-sm md:text-base text-[#8899AA]">
              DERECHO CORPORATIVO
            </span>
            <div className="w-[60px] h-px bg-[#8899AA]" />
          </div>
          <p className="font-sans uppercase tracking-[3px] text-sm md:text-base text-[#8899AA] mt-1">
            PARA PYMES
          </p>
        </div>

        {/* Línea separadora fina */}
        <div
          ref={separatorRef}
          className="mx-auto mt-6"
          style={{ width: "200px", height: "1px", backgroundColor: "#8899AA", opacity: 0.3 }}
        />

        {/* GESTIÓN & TRANSFORMACIÓN DIGITAL */}
        <p
          ref={digitalRef}
          className="font-sans uppercase tracking-[2px] text-xs md:text-sm text-[#C9A96E] mt-4"
        >
          GESTIÓN &amp; TRANSFORMACIÓN DIGITAL
        </p>

        {/* CTA */}
        <a
          ref={ctaRef}
          href="#contacto"
          onClick={handleContactClick}
          className="inline-block font-sans text-base text-[#C9A96E] uppercase tracking-[2px] border border-[#C9A96E] px-10 py-4 transition-all duration-300 hover:bg-[#C9A96E] hover:text-[#0F1628] mt-10 md:mt-12"
        >
          CONTACTAR
        </a>
      </div>
    </section>
  );
}
