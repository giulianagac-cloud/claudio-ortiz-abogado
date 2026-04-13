"use client";

import { useEffect, useRef } from "react";

export default function NuestraVision() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
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
    <section id="nuestra-vision" style={{ background: "#FBF9F4", padding: "128px 0" }}>
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left: Label + Title */}
          <div className="fade-in">
            <p
              className="font-sans uppercase mb-6"
              style={{ fontSize: 10, letterSpacing: "0.18em", color: "#5C5E57" }}
            >
              NUESTRA VISIÓN
            </p>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(30px, 4vw, 52px)",
                color: "#31332C",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                fontWeight: 400,
              }}
            >
              Claridad Institucional en un Mundo Volátil.
            </h2>
          </div>

          {/* Right: Paragraph */}
          <div className="fade-in">
            <p
              className="font-sans"
              style={{
                fontSize: "clamp(15px, 1.1vw, 17px)",
                color: "#5C5E57",
                lineHeight: 1.9,
                fontWeight: 300,
              }}
            >
              Ortiz Alejandre es un espacio especializado en derecho corporativo para pymes. Liderado por profesionales con formación en abogacía y administración de empresas, el enfoque de trabajo integra lo legal con la dinámica propia de cada organización. El objetivo no es solo resolver conflictos, sino anticiparlos y ordenar la estructura del negocio para que pueda sostener su crecimiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
