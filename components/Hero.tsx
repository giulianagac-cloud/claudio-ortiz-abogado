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
    <section id="hero" style={{ background: "#FBF9F4", paddingTop: 68, minHeight: "100vh", overflow: "hidden" }}>
      <div
        className="max-w-7xl mx-auto hero-grid"
        style={{
          display: "grid",
          minHeight: "calc(100vh - 68px)",
        }}
      >
        {/* Columna izquierda — foto */}
        <div
          className="hero-photo"
          style={{
            position: "relative",
            overflow: "hidden",
            minWidth: 0,
            minHeight: "clamp(360px, 55vw, 480px)",
            opacity: show(1) ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        >
          <Image
            src="/equipo.png"
            alt="Equipo de Ortiz Alejandre"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
          />
          <div
            className="hero-photo-gradient"
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Columna derecha — texto */}
        <div
          className="hero-copy flex flex-col justify-center"
          style={{
            background: "#FBF9F4",
            boxSizing: "border-box",
            maxWidth: "100vw",
            minWidth: 0,
            padding: "clamp(48px, 8vw, 80px) clamp(24px, 5vw, 64px) clamp(72px, 8vw, 80px)",
          }}
        >
          <p
            className="font-sans uppercase hero-copy-limited"
            style={{
              fontSize: 10,
              letterSpacing: "0.18em",
              color: "#5C5E57",
              marginBottom: 20,
              opacity: show(2) ? 1 : 0,
              transform: show(2) ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            Ab. Claudio Ortiz Alejandre
          </p>

          <h1
            className="font-serif hero-copy-limited"
            style={{
              fontSize: "clamp(28px, 7vw, 52px)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "#31332C",
              marginBottom: 20,
              maxWidth: "100%",
              overflowWrap: "break-word",
              opacity: show(2) ? 1 : 0,
              transform: show(2) ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.9s ease, transform 0.9s ease",
            }}
          >
            Estudio Ortiz Alejandre
          </h1>

          <p
            className="font-serif italic hero-copy-limited"
            style={{
              fontSize: "clamp(17px, 2vw, 21px)",
              color: "#5C5E57",
              lineHeight: 1.6,
              marginBottom: 40,
              maxWidth: "100%",
              overflowWrap: "break-word",
              opacity: show(3) ? 1 : 0,
              transform: show(3) ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            Derecho corporativo, gestión y tecnología <span className="hero-line-break"><br /></span>al servicio de las empresas argentinas.
          </p>

          <div
            className="hero-copy-limited"
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
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#1C1C1A", flexShrink: 0 }} />
                <span className="font-sans" style={{ fontSize: 14, color: "#5C5E57", letterSpacing: "0.01em" }}>
                  {line}
                </span>
              </div>
            ))}
          </div>

          <div
            className="hero-copy-limited"
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
                background: "#1C1C1A",
                color: "#F7F7FF",
                padding: "14px 32px",
                textDecoration: "none",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#2C2C2A")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#1C1C1A")}
            >
              Consultar ahora →
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
