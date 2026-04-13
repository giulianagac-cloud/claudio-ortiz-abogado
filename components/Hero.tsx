"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 200);
    const t2 = setTimeout(() => setPhase(2), 700);
    const t3 = setTimeout(() => setPhase(3), 1300);
    const t4 = setTimeout(() => setPhase(4), 1800);
    return () => { [t1, t2, t3, t4].forEach(clearTimeout); };
  }, []);

  const show = (p: number) => phase >= p;

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center"
      style={{ background: "#FBF9F4", paddingTop: 68 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full py-24 md:py-36">

        {/* Title + Tagline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-end mb-14">

          {/* Left: Big title (2/3) */}
          <div className="md:col-span-2">
            <p
              className="font-sans uppercase mb-8"
              style={{
                fontSize: 10,
                letterSpacing: "0.18em",
                color: "#5C5E57",
                opacity: show(1) ? 1 : 0,
                transform: show(1) ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
              }}
            >
              Derecho Corporativo · Buenos Aires
            </p>

            <h1 style={{ margin: 0, lineHeight: 0.92 }}>
              <span
                className="block font-serif font-normal"
                style={{
                  fontSize: "clamp(52px, 8vw, 104px)",
                  color: "#31332C",
                  letterSpacing: "-0.02em",
                  opacity: show(2) ? 1 : 0,
                  transform: show(2) ? "translateY(0)" : "translateY(28px)",
                  transition: "opacity 0.9s ease, transform 0.9s ease",
                }}
              >
                Ortiz Alejandre
              </span>
              <span
                className="block font-serif italic"
                style={{
                  fontSize: "clamp(46px, 7vw, 92px)",
                  color: "#505E80",
                  letterSpacing: "-0.02em",
                  opacity: show(2) ? 1 : 0,
                  transform: show(2) ? "translateY(0)" : "translateY(28px)",
                  transition: "opacity 0.9s 0.15s ease, transform 0.9s 0.15s ease",
                }}
              >
                Derecho Corporativo.
              </span>
            </h1>
          </div>

          {/* Right: Tagline (1/3) */}
          <div className="md:col-span-1 md:pb-3">
            <p
              className="font-serif italic"
              style={{
                fontSize: "clamp(14px, 1.15vw, 17px)",
                color: "#5C5E57",
                lineHeight: 1.75,
                letterSpacing: "0.01em",
                opacity: show(3) ? 1 : 0,
                transform: show(3) ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
              }}
            >
              Soluciones legales de alta precisión para el ecosistema empresarial de las PyMEs.
            </p>
          </div>
        </div>

        {/* CTA + Signature Divider */}
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
            className="font-sans inline-block mb-10"
            style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#505E80",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#445273")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#505E80")}
          >
            COORDINAR CONSULTA →
          </a>

          {/* Signature Divider */}
          <div style={{ width: 120, height: 1, background: "#505E80" }} />
        </div>
      </div>
    </section>
  );
}
