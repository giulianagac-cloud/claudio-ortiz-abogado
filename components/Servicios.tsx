"use client";

import { useEffect, useRef } from "react";

const servicios = [
  {
    numero: "01",
    titulo: "DERECHO SOCIETARIO",
    descripcion:
      "Constitución, reorganización y administración de sociedades. Asesoramiento integral en estructura corporativa, actas de directorio y asambleas.",
  },
  {
    numero: "02",
    titulo: "CONTRATOS COMERCIALES",
    descripcion:
      "Redacción, revisión y negociación de contratos comerciales. Protección de intereses en acuerdos de provisión, distribución y servicios.",
  },
  {
    numero: "03",
    titulo: "ACUERDOS DE ACCIONISTAS",
    descripcion:
      "Diseño y negociación de pactos de socios. Cláusulas de salida, tag-along, drag-along y mecanismos de resolución de conflictos societarios.",
  },
  {
    numero: "04",
    titulo: "MARCAS Y PATENTES",
    descripcion:
      "Registro y protección de marcas, patentes y propiedad intelectual. Defensa ante infracciones y gestión de portfolio de activos intangibles.",
  },
];

export default function Servicios() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, i * 100);
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
    <section id="servicios" className="bg-[#F8F6F1] py-16 md:py-28 lg:py-32">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Encabezado */}
        <div className="mb-16 md:mb-20 fade-in">
          <p className="font-sans text-sm text-[#C9A96E] uppercase tracking-[3px] mb-4">
            ÁREAS DE PRÁCTICA
          </p>
          <h2 className="font-serif text-5xl text-[#0F1628] font-normal mb-5">
            Servicios
          </h2>
          <div className="w-14 h-px bg-[#C9A96E]" />
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E8E6E1]">
          {servicios.map((servicio) => (
            <div
              key={servicio.numero}
              className="bg-[#F8F6F1] p-8 fade-in group transition-colors duration-300 hover:bg-white"
            >
              <span className="font-sans text-6xl font-extralight text-[#C9A96E] block mb-6 leading-none opacity-40 group-hover:opacity-70 transition-opacity duration-300">
                {servicio.numero}
              </span>
              <h3 className="font-sans text-base font-medium uppercase tracking-[2px] text-[#0F1628] mb-4">
                {servicio.titulo}
              </h3>
              <p className="font-sans text-base font-light text-[#667799] leading-relaxed">
                {servicio.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
