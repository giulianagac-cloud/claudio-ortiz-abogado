"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      // Foto: scale + fade
      gsap.fromTo(
        ".hero-photo",
        { scale: 1.08, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.4, ease: "power2.out" }
      );

      // Label
      gsap.fromTo(
        ".hero-label",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.3 }
      );

      // H1
      gsap.fromTo(
        ".hero-title",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power2.out", delay: 0.5 }
      );

      // Subtitle italic
      gsap.fromTo(
        ".hero-subtitle",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.7 }
      );

      // Bullets con stagger
      gsap.fromTo(
        ".hero-bullet",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.1, delay: 0.9 }
      );

      // CTA
      gsap.fromTo(
        ".hero-cta",
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", delay: 1.1 }
      );

      // Parallax scroll en la foto (solo desktop)
      if (!isMobile) {
        gsap.to(".hero-photo", {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{ background: "#FBF9F4", paddingTop: 68, minHeight: "100vh", overflow: "hidden" }}
    >
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
            className="font-sans uppercase hero-copy-limited hero-label"
            style={{
              fontSize: 10,
              letterSpacing: "0.18em",
              color: "#5C5E57",
              marginBottom: 20,
            }}
          >
            Ab. Claudio Ortiz — Nexora Intelligence
          </p>

          <h1
            className="font-serif hero-copy-limited hero-title"
            style={{
              fontSize: "clamp(28px, 7vw, 52px)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "#31332C",
              marginBottom: 20,
              maxWidth: "100%",
              overflowWrap: "break-word",
            }}
          >
            Estudio Ortiz Alejandre
          </h1>

          <p
            className="font-serif italic hero-copy-limited hero-subtitle"
            style={{
              fontSize: "clamp(17px, 2vw, 21px)",
              color: "#5C5E57",
              lineHeight: 1.6,
              marginBottom: 40,
              maxWidth: "100%",
              overflowWrap: "break-word",
            }}
          >
            Derecho corporativo, gestión y tecnología{" "}
            <span className="hero-line-break">
              <br />
            </span>
            al servicio de las empresas argentinas.
          </p>

          <div
            className="hero-copy-limited"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              marginBottom: 48,
            }}
          >
            {[
              "El derecho ordena tu negocio.",
              "La gestión lo hace crecer.",
              "La tecnología lo automatiza.",
            ].map((line) => (
              <div key={line} className="flex items-center gap-3 hero-bullet">
                <div
                  style={{ width: 4, height: 4, borderRadius: "50%", background: "#1C1C1A", flexShrink: 0 }}
                />
                <span
                  className="font-sans"
                  style={{ fontSize: 14, color: "#5C5E57", letterSpacing: "0.01em" }}
                >
                  {line}
                </span>
              </div>
            ))}
          </div>

          <div className="hero-copy-limited hero-cta">
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
