"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const diferenciales = [
  {
    img: "/estructura-legal.png",
    alt: "Estructura legal que escala",
    titulo: "Estructura legal que escala",
    desc: "Armamos la base jurídica para que tu negocio crezca sin que la estructura se rompa. Desde la constitución hasta la gobernanza societaria.",
  },
  {
    img: "/sin-sorpresas.png",
    alt: "Sin sorpresas",
    titulo: "Sin sorpresas",
    desc: "Comunicación clara, sin jerga innecesaria. Anticipamos los problemas antes de que ocurran para que vos te concentres en crecer.",
  },
  {
    img: "/tech-first.png",
    alt: "Tech-first",
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
          <p
            className="font-sans"
            style={{ fontSize: 15, color: "#5C5E57", marginTop: 16, fontWeight: 300 }}
          >
            Tres diferenciadores que te hacen crecer sin sorpresas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 24 }}>
          {diferenciales.map((d) => (
            <div
              key={d.titulo}
              className="fade-in"
              style={{
                background: "#FFFFFF",
                borderRadius: 4,
                overflow: "hidden",
                border: "1px solid rgba(177,179,169,0.3)",
                transition: "box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 8px 32px rgba(80,94,128,0.12)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
                <Image
                  src={d.img}
                  alt={d.alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "28px 28px 32px" }}>
                <h3
                  className="font-serif italic"
                  style={{ fontSize: 20, color: "#31332C", fontWeight: 400, marginBottom: 12, lineHeight: 1.25 }}
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
