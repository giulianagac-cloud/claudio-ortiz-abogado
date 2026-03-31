"use client";

import { useEffect, useRef } from "react";

const servicios = [
  {
    numero: "01",
    titulo: "DERECHO SOCIETARIO",
    descripcion:
      "Constitución de sociedades, asesoramiento integral en estructura corporativa, gobierno corporativo, relaciones entre socios, financiamiento empresarial, cumplimiento normativo (compliance), responsabilidad de administradores.",
  },
  {
    numero: "02",
    titulo: "CONTRATOS COMERCIALES",
    descripcion:
      "Redacción, revisión y negociación de contratos comerciales. Protección de intereses en acuerdos de abastecimiento, distribución y servicios.",
  },
  {
    numero: "03",
    titulo: "ACUERDOS DE ACCIONISTAS",
    descripcion:
      "Diseño y negociación de pactos entre socios. Cláusulas de salida, tag-along, drag-along y mecanismos de resolución de conflictos societarios.",
  },
  {
    numero: "04",
    titulo: "MARCAS Y PATENTES",
    descripcion:
      "Registro y protección de marcas, patentes y propiedad intelectual. Defensa ante infracciones y gestión de portfolio de activos intangibles.",
  },
  {
    numero: "05",
    titulo: "GESTIÓN Y PROCESOS",
    descripcion:
      "Diagnóstico y relevamiento organizacional, optimización de procesos, gestión administrativa y financiera, profesionalización de empresas.",
  },
  {
    numero: "06",
    titulo: "TECNOLOGÍA (IT)",
    descripcion:
      "Digitalización de procesos, automatización de tareas, implementación de herramientas de gestión, análisis de datos y reporting, organización y seguridad de la información.",
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
              className="bg-[#F8F6F1] p-8 fade-in group transition-all duration-500 hover:bg-white hover:shadow-lg cursor-default"
              style={{ transition: "background 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease" }}
              onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <span className="font-sans text-6xl font-extralight text-[#C9A96E] block mb-6 leading-none transition-all duration-500 opacity-30 group-hover:opacity-60">
                {servicio.numero}
              </span>
              <h3 className="font-sans text-base font-medium uppercase tracking-[2px] text-[#0F1628] mb-4 transition-colors duration-300 group-hover:text-[#0F1628]">
                {servicio.titulo}
              </h3>
              <p className="font-sans text-base font-light text-[#667799] leading-relaxed transition-colors duration-300 group-hover:text-[#4A5568]">
                {servicio.descripcion}
              </p>
              {/* Línea bottom animada */}
              <div
                className="mt-6 h-px bg-[#C9A96E]"
                style={{
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
                }}
                ref={el => {
                  if (el) {
                    const parent = el.closest(".group");
                    parent?.addEventListener("mouseenter", () => el.style.transform = "scaleX(1)");
                    parent?.addEventListener("mouseleave", () => el.style.transform = "scaleX(0)");
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
