"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 100);
    const t2 = setTimeout(() => setPhase(2), 400);
    const t3 = setTimeout(() => setPhase(3), 700);
    const t4 = setTimeout(() => setPhase(4), 1000);
    return () => { [t1, t2, t3, t4].forEach(clearTimeout); };
  }, []);

  const show = (p: number) => phase >= p;

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" style={{ background: "#FBF9F4", paddingTop: 68, minHeight: "100vh" }}>
      <div
        className="max-w-7xl mx-auto"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "calc(100vh - 68px)",
        }}
      >
        {/* Columna izquierda — foto */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: 480,
            opacity: show(1) ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        >
          <Image
            src="/equipo.jpg"
            alt="Claudio Ortiz Alejandre"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, transparent 70%, #FBF9F4 100%)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Columna derecha — texto */}
        <div
          className="flex flex-col justify-center px-10 md:px-16 py-20"
          style={{ background: "#FBF9F4" }}
        >
          <p
            className="font-sans uppercase"
            style={{
              fontSize: 10,
              letterSpacing: "0.18em",
              color: "#5C5E57",
              marginBottom: 32,
              opacity: show(2) ? 1 : 0,
              transform: show(2) ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            Derecho Corporativo · PyMEs · Gestión &amp; Tecnología
          </p>

          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "#31332C",
              marginBottom: 20,
              opacity: show(2) ? 1 : 0,
              transform: show(2) ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.9s ease, transform 0.9s ease",
            }}
          >
            Estructura legal que aguanta el crecimiento.
          </h1>

          <p
            className="font-serif italic"
            style={{
              fontSize: "clamp(17px, 2vw, 21px)",
              color: "#5C5E57",
              lineHeight: 1.6,
              marginBottom: 40,
              opacity: show(3) ? 1 : 0,
              transform: show(3) ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            Para emprendedores que no quieren sorpresas desagradables.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              marginBottom: 48,
              opacity: show(3) ? 1 : 0,
              transform: show(3) ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            {[
              "El derecho ordena tu negocio.",
              "La gestión lo hace crecer.",
              "La tecnología lo automatiza.",
            ].map((line) => (
              <div key={line} className="flex items-center gap-3">
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#505E80", flexShrink: 0 }} />
                <span className="font-sans" style={{ fontSize: 14, color: "#5C5E57", letterSpacing: "0.01em" }}>
                  {line}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              opacity: show(4) ? 1 : 0,
              transform: show(4) ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <a
              href="#contacto"
              onClick={handleContactClick}
              className="font-sans inline-block"
              style={{
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                background: "#505E80",
                color: "#F7F7FF",
                padding: "14px 32px",
                textDecoration: "none",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#445273")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#505E80")}
            >
              Consultar ahora →
            </a>
          </div>
        </div>
      </div>

      {/* Tagline inferior */}
      <div
        className="py-12 px-6 text-center"
        style={{
          background: "#F5F4ED",
          borderTop: "1px solid rgba(177,179,169,0.3)",
          opacity: show(4) ? 1 : 0,
          transition: "opacity 1s ease 0.3s",
        }}
      >
        <p className="font-serif italic" style={{ fontSize: "clamp(16px, 2vw, 22px)", color: "#31332C", lineHeight: 1.8 }}>
          El derecho ordena.&nbsp;&nbsp;La gestión organiza.&nbsp;&nbsp;La tecnología potencia.
        </p>
      </div>
    </section>
  );
}
