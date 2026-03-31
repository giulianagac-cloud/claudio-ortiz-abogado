"use client";

import { useEffect, useRef } from "react";

export default function SobreMi() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre-mi" className="bg-[#F8F6F1] py-16 md:py-28 lg:py-32">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          {/* Columna de texto */}
          <div className="md:col-span-1">
            <div className="fade-in mb-12">
              <p className="font-sans text-sm text-[#C9A96E] uppercase tracking-[3px] mb-4">
                TRAYECTORIA
              </p>
              <h2 className="font-serif text-5xl text-[#0F1628] font-normal mb-5">
                Sobre nosotros
              </h2>
              <div className="w-14 h-px bg-[#C9A96E]" />
            </div>

            <div className="space-y-6">
              <p className="fade-in font-sans text-lg font-light text-[#0F1628] leading-loose">
                Ortiz Alejandre es un espacio especializado en derecho corporativo para empresas. Liderado por profesionales con formación en abogacía y administración de empresas, el enfoque de trabajo integra lo legal con la dinámica propia de cada organización.
              </p>
              <p className="fade-in font-sans text-lg font-light text-[#0F1628] leading-loose">
                El objetivo no es solo resolver conflictos, sino anticiparlos y ordenar la estructura del negocio para que pueda sostener su crecimiento.
              </p>
              <p className="fade-in font-sans text-lg font-light text-[#0F1628] leading-loose">
                Cuando la organización lo requiere, también contamos con especialistas en herramientas de gestión y tecnología, entendiendo que el crecimiento también exige revisar cómo funciona lo que ya está en marcha.
              </p>
            </div>
          </div>

          {/* Columna visual */}
          <div className="md:col-span-1 fade-in flex items-center justify-center">
            <div className="w-full aspect-[3/2] overflow-hidden relative">
              {/* Video si existe, imagen como fallback */}
              <video
                src="/sobre-nosotros.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                onError={(e) => { (e.currentTarget as HTMLVideoElement).style.display = "none"; }}
              />
              <img
                src="/equipo.jpg"
                alt="Equipo Ortiz Alejandre"
                className="w-full h-full object-cover absolute inset-0"
                style={{ objectPosition: "45% 60%", zIndex: -1 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
