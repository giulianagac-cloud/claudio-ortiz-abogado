"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SobreMi() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ClipPath reveal foto Claudio (izquierda → derecha)
      gsap.fromTo(
        ".foto-claudio",
        { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        {
          clipPath: "inset(0 0% 0 0%)",
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".foto-claudio",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // ClipPath reveal foto Nexora (derecha → izquierda)
      gsap.fromTo(
        ".foto-nexora",
        { clipPath: "inset(0 0 0 100%)", opacity: 0 },
        {
          clipPath: "inset(0 0% 0 0%)",
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".foto-nexora",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="sobre-nosotros" style={{ background: "#F8F6F1", padding: "96px 0" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Bloque A — Introducción del estudio */}
        <div style={{ maxWidth: "48rem", marginBottom: 80 }}>
          <p
            className="font-sans uppercase"
            style={{ fontSize: 10, letterSpacing: "0.18em", color: "#C9A96E", marginBottom: 16 }}
          >
            Quiénes Somos
          </p>
          <h2
            className="font-serif section-title"
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 300,
              color: "#0F1628",
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              marginBottom: 24,
            }}
          >
            Ortiz Alejandre.
          </h2>
          <p
            className="font-sans"
            style={{ fontSize: 16, color: "#0F1628", lineHeight: 1.85, fontWeight: 300 }}
          >
            Ortiz Alejandre es un espacio especializado en derecho corporativo para PyMEs. Liderado por profesionales con formación en abogacía y administración de empresas, el enfoque de trabajo integra lo legal con la dinámica propia de cada organización. El objetivo no es solo resolver conflictos, sino anticiparlos y ordenar la estructura del negocio para que pueda sostener su crecimiento. Cuando la organización lo requiere, también contamos con especialistas en herramientas de gestión y tecnología, entendiendo que el crecimiento también exige revisar cómo funciona lo que ya está en marcha.
          </p>
          <div style={{ width: 48, height: 2, background: "#C9A96E", marginTop: 32 }} />
        </div>

        {/* Separador A → B */}
        <div style={{ borderTop: "1px solid rgba(177,179,169,0.3)", paddingTop: 80 }}>

          {/* Bloque B — Sobre Claudio */}
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: "64px", alignItems: "center", marginBottom: 80 }}
          >
            {/* Foto */}
            <div>
              <div
                className="foto-claudio"
                style={{ position: "relative", width: "100%", aspectRatio: "3/4", overflow: "hidden", maxWidth: 480 }}
              >
                <Image
                  src="/claudio.jpeg"
                  alt="Claudio Enrique Ortiz"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <p
                  className="font-serif italic"
                  style={{ fontSize: 18, color: "#31332C", marginBottom: 4 }}
                >
                  Claudio Enrique Ortiz
                </p>
                <p
                  className="font-sans"
                  style={{ fontSize: 12, letterSpacing: "0.1em", color: "#5C5E57", textTransform: "uppercase" }}
                >
                  Abogado Corporativo · Pontificia Universidad Católica Argentina
                </p>
              </div>
            </div>

            {/* Texto */}
            <div>
              <div style={{ marginBottom: 40 }}>
                <p
                  className="font-sans uppercase"
                  style={{ fontSize: 10, letterSpacing: "0.18em", color: "#C9A96E", marginBottom: 16 }}
                >
                  Sobre Claudio
                </p>
                <h2
                  className="font-serif section-title"
                  style={{
                    fontSize: "clamp(28px, 3.5vw, 44px)",
                    fontWeight: 300,
                    color: "#0F1628",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.15,
                    marginBottom: 8,
                  }}
                >
                  Derecho corporativo con visión de negocio.
                </h2>
                <div style={{ width: 48, height: 2, background: "#C9A96E", marginTop: 20 }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
                <p
                  className="font-sans"
                  style={{ fontSize: 16, color: "#0F1628", lineHeight: 1.85, fontWeight: 300 }}
                >
                  Claudio es abogado especialista en negociación y resolución de conflictos, con sólidos conocimientos en derecho corporativo y una amplia visión comercial que le permite ir más allá del marco normativo. Su experiencia en negociación y redacción de contratos de abastecimiento en diferentes industrias le da una perspectiva real sobre cómo opera cada negocio.
                </p>
                <p
                  className="font-sans"
                  style={{ fontSize: 16, color: "#0F1628", lineHeight: 1.85, fontWeight: 300 }}
                >
                  Su enfoque está orientado a minimizar riesgos sin perder de vista el objetivo principal: el crecimiento de la empresa. La combinación de formación legal y perfil financiero le permite brindar un asesoramiento integral que genera valor concreto para el negocio — no solo cumplimiento normativo.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
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
                        background: "rgba(28,28,26,0.06)",
                        border: "1px solid rgba(28,28,26,0.18)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      <span style={{ color: "#1C1C1A", fontSize: 10, fontWeight: 700 }}>✓</span>
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

        {/* Separador B → C */}
        <div style={{ borderTop: "1px solid rgba(177,179,169,0.3)", paddingTop: 80 }}>

          {/* Bloque C — Nexora Intelligence */}
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: "64px", alignItems: "center" }}
          >
            {/* Texto (izquierda) */}
            <div>
              <div style={{ marginBottom: 40 }}>
                <p
                  className="font-sans uppercase"
                  style={{ fontSize: 10, letterSpacing: "0.18em", color: "#C9A96E", marginBottom: 16 }}
                >
                  Tecnología &amp; Gestión
                </p>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "clamp(28px, 3.5vw, 44px)",
                    fontWeight: 300,
                    color: "#0F1628",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.15,
                    marginBottom: 8,
                  }}
                >
                  Nexora Intelligence.
                </h3>
                <div style={{ width: 48, height: 2, background: "#C9A96E", marginTop: 20 }} />
              </div>

              <div style={{ marginBottom: 32 }}>
                <p
                  className="font-sans"
                  style={{ fontSize: 16, color: "#0F1628", lineHeight: 1.85, fontWeight: 300 }}
                >
                  Nexora Intelligence es el brazo tecnológico de Ortiz Alejandre. Especializada en automatización, inteligencia artificial y transformación digital para PyMEs, Nexora trabaja junto al equipo legal para ofrecer soluciones integrales que van más allá del asesoramiento jurídico. Porque crecer hoy exige tanto una estructura legal sólida como procesos y herramientas que acompañen ese crecimiento.
                </p>
              </div>

              <div>
                <a
                  href="https://nexoraintelligence.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#C9A96E",
                    textDecoration: "none",
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  nexoraintelligence.co →
                </a>
              </div>
            </div>

            {/* Foto (derecha) */}
            <div>
              <div
                className="foto-nexora"
                style={{ position: "relative", width: "100%", aspectRatio: "3/4", overflow: "hidden", maxWidth: 480 }}
              >
                <Image
                  src="/nexora.png"
                  alt="Nexora Intelligence"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center center" }}
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
