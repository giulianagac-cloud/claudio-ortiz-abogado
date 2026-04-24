"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function SobreMi() {
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
    <section id="sobre-mi" style={{ background: "#F8F6F1", padding: "96px 0" }}>
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 md:px-10">
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "64px", alignItems: "center" }}
        >

          {/* Columna izquierda — foto */}
          <div className="fade-in">
            <div style={{ position: "relative", width: "100%", aspectRatio: "3/4", overflow: "hidden", maxWidth: 480 }}>
              <Image
                src="/claudio.jpeg"
                alt="Claudio Ortiz Alejandre — Abogado Corporativo"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            <div style={{ marginTop: 20 }}>
              <p
                className="font-serif italic"
                style={{ fontSize: 18, color: "#31332C", marginBottom: 4 }}
              >
                Claudio Ortiz Alejandre
              </p>
              <p
                className="font-sans"
                style={{ fontSize: 12, letterSpacing: "0.1em", color: "#5C5E57", textTransform: "uppercase" }}
              >
                Abogado Corporativo · PyMEs
              </p>
            </div>
          </div>

          {/* Columna derecha — texto */}
          <div>
            <div className="fade-in" style={{ marginBottom: 40 }}>
              <p
                className="font-sans uppercase"
                style={{ fontSize: 10, letterSpacing: "0.18em", color: "#C9A96E", marginBottom: 16 }}
              >
                Sobre Claudio
              </p>
              <h2
                className="font-serif"
                style={{
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  fontWeight: 400,
                  color: "#0F1628",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.15,
                  marginBottom: 8,
                }}
              >
                Un abogado que entiende los negocios.
              </h2>
              <div style={{ width: 48, height: 2, background: "#C9A96E", marginTop: 20 }} />
            </div>

            <div className="fade-in" style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
              <p
                className="font-sans"
                style={{ fontSize: 16, color: "#0F1628", lineHeight: 1.85, fontWeight: 300 }}
              >
                Claudio es abogado corporativista con más de 10 años de experiencia en estructuras empresariales. Combina formación legal con administración de empresas para entender la dinámica real de los negocios — no solo el marco normativo.
              </p>
              <p
                className="font-sans"
                style={{ fontSize: 16, color: "#0F1628", lineHeight: 1.85, fontWeight: 300 }}
              >
                Su enfoque no es resolver conflictos después: es anticiparlos. Ordena la estructura legal del negocio desde el inicio, para que puedas crecer sin sorpresas de cumplimiento o conflictos societarios que frenen el avance.
              </p>
            </div>

            <div className="fade-in" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { titulo: "Abogado accesible", desc: "Comunicación clara, sin jerga innecesaria." },
                { titulo: "Tech-native", desc: "Automatización y herramientas digitales integradas al trabajo legal." },
                { titulo: "Mentalidad empresaria", desc: "Entiende PyMEs desde adentro, no solo desde la norma." },
              ].map((item) => (
                <div key={item.titulo} className="flex items-start gap-3">
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 2,
                      background: "rgba(80,94,128,0.08)",
                      border: "1px solid rgba(80,94,128,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <span style={{ color: "#505E80", fontSize: 10, fontWeight: 700 }}>✓</span>
                  </div>
                  <div>
                    <span className="font-sans" style={{ fontSize: 14, color: "#0F1628", fontWeight: 500 }}>
                      {item.titulo}
                    </span>
                    <span className="font-sans" style={{ fontSize: 14, color: "#5C5E57", fontWeight: 300 }}>
                      {" — "}{item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
