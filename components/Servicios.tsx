"use client";

import { useEffect, useRef } from "react";

const servicios = [
  {
    numero: "01",
    titulo: "Derecho Societario",
    descripcion:
      "Desde la constitución hasta la gobernanza. Armamos la estructura legal que permite crecer sin sorpresas de cumplimiento: sociedades, gobierno corporativo, compliance y responsabilidad de administradores.",
  },
  {
    numero: "02",
    titulo: "Contratos Comerciales",
    descripcion:
      "Contratos que protegen tu negocio. Revisamos, redactamos y negociamos acuerdos de abastecimiento, distribución y servicios que balancean riesgo y oportunidad.",
  },
  {
    numero: "03",
    titulo: "Acuerdos de Accionistas",
    descripcion:
      "Evitamos conflictos entre socios. Pactamos reglas claras para que el crecimiento no rompa la sociedad: tag-along, drag-along, resolución de conflictos y protocolo de salida.",
  },
  {
    numero: "04",
    titulo: "Marcas y Patentes",
    descripcion:
      "Registro y protección de propiedad intelectual ante el INPI. Estrategia de marcas, patentes y defensa ante infracciones.",
  },
  {
    numero: "05",
    titulo: "Gestión y Procesos",
    descripcion:
      "Diagnóstico organizacional y optimización de procesos internos. Profesionalización de la estructura operativa de la PyME.",
  },
  {
    numero: "06",
    titulo: "Tecnología IT",
    descripcion:
      "Digitalización, automatización y herramientas de gestión. Acompañamiento en la transformación tecnológica del negocio.",
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
              setTimeout(() => el.classList.add("visible"), i * 100);
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
    <section id="servicios" style={{ background: "#F5F4ED", padding: "96px 0" }}>
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="fade-in" style={{ marginBottom: 64 }}>
          <p
            className="font-sans uppercase"
            style={{ fontSize: 10, letterSpacing: "0.18em", color: "#5C5E57", marginBottom: 16 }}
          >
            Especialidades
          </p>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400,
              color: "#31332C",
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
            }}
          >
            En qué trabajamos.
          </h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{ background: "rgba(177,179,169,0.3)", border: "1px solid rgba(177,179,169,0.3)" }}
        >
          {servicios.map((s) => (
            <div
              key={s.numero}
              className="fade-in"
              style={{
                background: "#F5F4ED",
                padding: "48px 40px",
                transition: "background 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#EFEEE6")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#F5F4ED")}
            >
              <span
                className="font-serif block"
                style={{
                  fontSize: 40,
                  color: "#505E80",
                  opacity: 0.25,
                  lineHeight: 1,
                  marginBottom: 24,
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                }}
              >
                {s.numero}
              </span>
              <h3
                className="font-serif italic"
                style={{
                  fontSize: 22,
                  color: "#31332C",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  marginBottom: 16,
                  letterSpacing: "-0.01em",
                }}
              >
                {s.titulo}
              </h3>
              <p
                className="font-sans"
                style={{
                  fontSize: 14,
                  color: "#5C5E57",
                  lineHeight: 1.9,
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
