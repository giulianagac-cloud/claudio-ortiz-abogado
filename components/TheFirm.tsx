"use client";

import { useEffect, useRef } from "react";

export default function TheFirm() {
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
    <section id="the-firm" style={{ background: "#FBF9F4", padding: "128px 0" }}>
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">

          {/* Left: imagen B&N */}
          <div className="fade-in">
            <div
              style={{
                width: "100%",
                aspectRatio: "4/3",
                background: "#D8D7CF",
                overflow: "hidden",
              }}
            >
              <img
                src="/hero-bg.jpg"
                alt="Oficina Ortiz Alejandre"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                  display: "block",
                }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>

          {/* Right: texto */}
          <div className="fade-in">
            <p
              className="font-sans uppercase mb-6"
              style={{ fontSize: 10, letterSpacing: "0.18em", color: "#5C5E57" }}
            >
              THE FIRM
            </p>
            <h2
              className="font-serif mb-8"
              style={{
                fontSize: "clamp(26px, 3vw, 42px)",
                color: "#31332C",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                fontWeight: 400,
              }}
            >
              La excelencia es una elección estructural.
            </h2>
            <p
              className="font-sans mb-10"
              style={{
                fontSize: "clamp(14px, 1.1vw, 16px)",
                color: "#5C5E57",
                lineHeight: 1.9,
                fontWeight: 300,
              }}
            >
              Cada documento, cada consulta y cada estrategia es tratada con el rigor de un registro histórico. En Ortiz Alejandre, el compromiso es con la integridad del legado de su negocio.
            </p>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-sans uppercase"
              style={{
                fontSize: 10,
                letterSpacing: "0.14em",
                color: "#505E80",
                textDecoration: "underline",
                textUnderlineOffset: "5px",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#445273")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#505E80")}
            >
              DESCUBRA NUESTRO MÉTODO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
