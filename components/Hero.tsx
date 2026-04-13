"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 200);
    const t2 = setTimeout(() => setPhase(2), 700);
    const t3 = setTimeout(() => setPhase(3), 1100);
    const t4 = setTimeout(() => setPhase(4), 1500);
    const t5 = setTimeout(() => setPhase(5), 2000);
    return () => { [t1, t2, t3, t4, t5].forEach(clearTimeout); };
  }, []);

  const show = (p: number) => phase >= p;

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" style={{ paddingTop: 68 }}>

      {/* ── BLOQUE 1: Hero principal ── */}
      <div
        className="relative overflow-hidden pt-20 pb-16 px-6 md:px-12 lg:px-16"
        style={{ background: "#FBF9F4" }}
      >
        {/* Textura de fondo — sutil, 12% opacidad */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            opacity: 0.35,
            mixBlendMode: "multiply",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Label metadata */}
          <p
            className="text-[11px] md:text-xs tracking-[3px] uppercase text-[#5C5E57] font-sans mb-10"
            style={{
              opacity: show(1) ? 1 : 0,
              transform: show(1) ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            Derecho Corporativo · PyMEs · Gestión &amp; Tecnología
          </p>

          {/* Título principal */}
          <div className="max-w-4xl">
            <h1 className="m-0">
              {/* Línea 1 */}
              <span
                className="block font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[0.95] tracking-[-0.02em] text-[#31332C]"
                style={{
                  opacity: show(2) ? 1 : 0,
                  transform: show(2) ? "translateY(0)" : "translateY(24px)",
                  transition: "opacity 0.9s ease, transform 0.9s ease",
                }}
              >
                Ortiz Alejandre
              </span>

              {/* Línea 2 */}
              <span
                className="block font-serif text-4xl md:text-5xl lg:text-6xl font-normal italic leading-[1.1] tracking-[-0.02em] text-[#31332C] mt-3"
                style={{
                  opacity: show(3) ? 1 : 0,
                  transform: show(3) ? "translateY(0)" : "translateY(24px)",
                  transition: "opacity 0.9s ease, transform 0.9s ease",
                }}
              >
                Arquitectura legal
                <br />
                para negocios que crecen.
              </span>
            </h1>
          </div>

          {/* Bloque asimétrico inferior */}
          <div
            className="flex flex-col md:flex-row gap-10 md:gap-20 items-start md:items-end mt-16 md:mt-20"
            style={{
              opacity: show(4) ? 1 : 0,
              transform: show(4) ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            {/* Columna izquierda */}
            <div className="flex-1 max-w-md">
              <div className="w-[120px] h-px bg-[#505E80] mb-6" />
              <p className="font-serif italic text-base md:text-lg leading-relaxed text-[#5C5E57]">
                Soluciones legales de alta precisión para el ecosistema empresarial de las PyMEs argentinas. Ordenamos la estructura del negocio para que pueda sostener su crecimiento.
              </p>
            </div>

            {/* Columna derecha */}
            <div className="flex-1 md:text-right">
              <a
                href="#contacto"
                onClick={handleContactClick}
                className="text-xs tracking-[2px] uppercase text-[#31332C] border-b border-[#31332C] pb-1 inline-block hover:text-[#505E80] hover:border-[#505E80] transition-colors"
              >
                Coordinar consulta →
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── BLOQUE 2: Tagline ── */}
      <div
        className="py-14 md:py-20 px-6"
        style={{
          background: "#F5F4ED",
          opacity: show(5) ? 1 : 0,
          transform: show(5) ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <p className="font-serif text-xl md:text-2xl lg:text-[26px] leading-[1.6] text-[#31332C] font-normal text-center">
          <em>El derecho ordena.</em>
          <br />
          <em>La gestión organiza.</em>
          <br />
          <em>La tecnología potencia.</em>
        </p>
      </div>

    </section>
  );
}
