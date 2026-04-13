"use client";

import { useEffect, useRef } from "react";

const servicios = [
  {
    numero: "01",
    titulo: "Derecho Societario",
    descripcion:
      "Constitución de sociedades, gobierno corporativo, compliance, responsabilidad de administradores.",
  },
  {
    numero: "02",
    titulo: "Contratos Comerciales",
    descripcion:
      "Redacción, revisión y negociación de contratos de abastecimiento, distribución y servicios.",
  },
  {
    numero: "03",
    titulo: "Acuerdos de Accionistas",
    descripcion:
      "Pactos entre socios, tag-along, drag-along y resolución de conflictos societarios.",
  },
  {
    numero: "04",
    titulo: "Marcas y Patentes",
    descripcion:
      "Registro y protección de propiedad intelectual. Defensa ante infracciones.",
  },
  {
    numero: "05",
    titulo: "Gestión y Procesos",
    descripcion:
      "Diagnóstico organizacional, optimización de procesos, profesionalización de PyMEs.",
  },
  {
    numero: "06",
    titulo: "Tecnología (IT)",
    descripcion:
      "Digitalización, automatización, herramientas de gestión, análisis de datos, seguridad.",
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
              setTimeout(() => el.classList.add("visible"), i * 80);
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
    <section id="servicios" style={{ background: "#F5F4ED", padding: "128px 0" }}>
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header centrado */}
        <div className="text-center mb-20 fade-in">
          <p
            className="font-sans uppercase"
            style={{ fontSize: 10, letterSpacing: "0.18em", color: "#5C5E57" }}
          >
            ESPECIALIDADES
          </p>
        </div>

        {/* Grid 3×2 — sin cards, sin bordes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {servicios.map((s) => (
            <div key={s.numero} className="fade-in">
              <span
                className="font-serif block mb-4"
                style={{
                  fontSize: 30,
                  color: "#505E80",
                  letterSpacing: "-0.01em",
                  lineHeight: 1,
                  fontWeight: 400,
                }}
              >
                {s.numero}
              </span>
              <h3
                className="font-serif italic mb-3"
                style={{
                  fontSize: 19,
                  color: "#31332C",
                  letterSpacing: "-0.01em",
                  fontWeight: 400,
                  lineHeight: 1.2,
                }}
              >
                {s.titulo}
              </h3>
              <p
                className="font-sans"
                style={{
                  fontSize: 14,
                  color: "#5C5E57",
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                {s.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
