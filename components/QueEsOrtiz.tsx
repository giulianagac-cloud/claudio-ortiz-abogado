"use client";

import { useEffect, useRef } from "react";

const diferenciales = [
  {
    num: "01",
    titulo: "Estructura legal que escala",
    desc: "Armamos la base jurídica para que tu negocio crezca sin que la estructura se rompa. Desde la constitución hasta la gobernanza societaria.",
  },
  {
    num: "02",
    titulo: "Sin sorpresas",
    desc: "Comunicación clara, sin jerga innecesaria. Anticipamos los problemas antes de que ocurran para que vos te concentres en crecer.",
  },
  {
    num: "03",
    titulo: "Tech-first",
    desc: "Integramos digitalización y automatización al trabajo legal. Procesos más ágiles, documentación ordenada, gestión moderna.",
  },
];

export default function QueEsOrtiz() {
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
    <section style={{ background: "#FBF9F4", padding: "96px 0", borderTop: "1px solid rgba(177,179,169,0.3)" }}>
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="fade-in" style={{ marginBottom: 64 }}>
          <p
            className="font-sans uppercase"
            style={{ fontSize: 10, letterSpacing: "0.18em", color: "#5C5E57", marginBottom: 16 }}
          >
            Por qué elegirnos
          </p>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400,
              color: "#31332C",
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              maxWidth: 520,
            }}
          >
            ¿Por qué elegir Ortiz Alejandre?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(177,179,169,0.2)", border: "1px solid rgba(177,179,169,0.2)" }}>
          {diferenciales.map((d) => (
            <div
              key={d.num}
              className="fade-in"
              style={{ background: "#FBF9F4", padding: "40px 36px" }}
            >
              <span
                className="font-serif block"
                style={{ fontSize: 36, color: "#505E80", opacity: 0.3, lineHeight: 1, marginBottom: 20, fontWeight: 400 }}
              >
                {d.num}
              </span>
              <h3
                className="font-serif italic"
                style={{ fontSize: 20, color: "#31332C", fontWeight: 400, marginBottom: 14, lineHeight: 1.25 }}
              >
                {d.titulo}
              </h3>
              <p
                className="font-sans"
                style={{ fontSize: 14, color: "#5C5E57", lineHeight: 1.85, fontWeight: 300 }}
              >
                {d.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
