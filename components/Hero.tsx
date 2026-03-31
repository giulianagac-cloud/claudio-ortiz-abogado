"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 900);
    const t3 = setTimeout(() => setPhase(3), 1500);
    const t4 = setTimeout(() => setPhase(4), 2100);
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#07080F" }}
    >
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlays */}
      <div className="absolute inset-0" style={{ zIndex: 1, background: "linear-gradient(to right, rgba(7,8,15,0.88) 0%, rgba(7,8,15,0.72) 55%, rgba(7,8,15,0.5) 100%)" }} />
      <div className="absolute inset-0" style={{ zIndex: 1, background: "linear-gradient(to bottom, rgba(7,8,15,0.1) 0%, rgba(7,8,15,0.0) 40%, rgba(7,8,15,0.65) 100%)" }} />
      <div className="absolute inset-0" style={{ zIndex: 2, background: "rgba(10,18,50,0.25)", mixBlendMode: "multiply" }} />

      {/* Corner marks */}
      {(["tl","tr","bl","br"] as const).map((pos) => (
        <div
          key={pos}
          className="absolute"
          style={{
            zIndex: 9, width: 20, height: 20,
            top:    pos.startsWith("t") ? 24 : undefined,
            bottom: pos.startsWith("b") ? 24 : undefined,
            left:   pos.endsWith("l")   ? 24 : undefined,
            right:  pos.endsWith("r")   ? 24 : undefined,
            borderTop:    pos.startsWith("t") ? "1px solid rgba(196,185,154,0.35)" : undefined,
            borderBottom: pos.startsWith("b") ? "1px solid rgba(196,185,154,0.35)" : undefined,
            borderLeft:   pos.endsWith("l")   ? "1px solid rgba(196,185,154,0.35)" : undefined,
            borderRight:  pos.endsWith("r")   ? "1px solid rgba(196,185,154,0.35)" : undefined,
            opacity: show(1) ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        />
      ))}

      {/* Contenido */}
      <div className="relative px-10 md:px-16 lg:px-24 max-w-3xl mx-auto text-center" style={{ zIndex: 10 }}>

        {/* Brand: símbolo OA + nombre */}
        <div
          className="flex items-center justify-center gap-3 mb-8"
          style={{
            opacity: show(1) ? 1 : 0,
            transform: show(1) ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <svg viewBox="0 0 44 44" fill="none" width={34} height={34} aria-hidden="true">
            <circle cx="15" cy="22" r="12" stroke="rgba(196,185,154,0.8)" strokeWidth="1.3"
              strokeDasharray="75.4" strokeDashoffset={show(1) ? 0 : 75.4}
              style={{ transition: "stroke-dashoffset 1s 0.1s cubic-bezier(0.4,0,0.2,1)" }}
            />
            <circle cx="29" cy="22" r="12" stroke="rgba(196,185,154,0.8)" strokeWidth="1.3"
              strokeDasharray="75.4" strokeDashoffset={show(1) ? 0 : 75.4}
              style={{ transition: "stroke-dashoffset 1s 0.35s cubic-bezier(0.4,0,0.2,1)" }}
            />
          </svg>
          <div style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(196,185,154,0.5)" }} />
          <span className="font-sans uppercase" style={{ fontSize: 12, color: "rgba(232,224,208,0.65)", letterSpacing: "0.22em" }}>
            Ortiz Alejandre
          </span>
        </div>

        {/* Título */}
        <h1 className="font-serif font-normal leading-none" style={{ margin: 0 }}>
          {[
            { word: "Derecho",      delay: "0s",    size: "clamp(52px, 9vw, 96px)",   spacing: "0.12em" },
            { word: "corporativo",  delay: "0.18s", size: "clamp(48px, 8.5vw, 88px)", spacing: "0.06em" },
          ].map(({ word, delay, size, spacing }) => (
            <span key={word} className="block" style={{
              fontSize: size, letterSpacing: spacing, color: "#E8E0D0", lineHeight: 1.05,
              opacity: show(2) ? 1 : 0,
              transform: show(2) ? "translateY(0)" : "translateY(24px)",
              transition: `opacity 0.9s ${delay} cubic-bezier(0.4,0,0.2,1), transform 0.9s ${delay} cubic-bezier(0.4,0,0.2,1)`,
            }}>
              {word}
            </span>
          ))}
        </h1>

        {/* Línea */}
        <div style={{
          height: 1, width: show(2) ? 160 : 0,
          background: "linear-gradient(to right, transparent, rgba(196,185,154,0.7), transparent)",
          margin: "24px auto",
          transition: "width 1s 0.3s cubic-bezier(0.4,0,0.2,1)",
        }} />

        {/* Tres líneas tagline */}
        <div className="mb-12">
          {[
            { text: "El derecho",    accent: "ordena.",   delay: "0s"   },
            { text: "La gestión",    accent: "organiza.", delay: "0.2s" },
            { text: "La tecnología", accent: "potencia.", delay: "0.4s" },
          ].map(({ text, accent, delay }) => (
            <span key={text} className="block font-serif font-normal" style={{
              fontSize: "clamp(20px, 2.8vw, 30px)",
              color: "rgba(232,224,208,0.88)", lineHeight: 1.45,
              opacity: show(3) ? 1 : 0,
              transform: show(3) ? "translateX(0)" : "translateX(-14px)",
              transition: `opacity 0.7s ${delay} cubic-bezier(0.4,0,0.2,1), transform 0.7s ${delay} cubic-bezier(0.4,0,0.2,1)`,
            }}>
              {text}{" "}
              <span style={{ color: "#9BB5D4" }}>{accent}</span>
            </span>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          opacity: show(4) ? 1 : 0,
          transform: show(4) ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}>
          <CTAButton onClick={handleContactClick} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 flex flex-col items-center gap-2"
        style={{ transform: "translateX(-50%)", zIndex: 10, opacity: show(4) ? 0.45 : 0, transition: "opacity 1s 0.5s ease" }}>
        <span className="font-sans uppercase" style={{ fontSize: 8, letterSpacing: "0.3em", color: "rgba(196,185,154,0.8)" }}>Scroll</span>
        <div style={{ width: 1, height: 32, background: "linear-gradient(to bottom, rgba(196,185,154,0.7), transparent)", animation: "scrollPulse 2s ease-in-out infinite" }} />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50%       { opacity: 1;   transform: scaleY(1.2); }
        }
      `}</style>
    </section>
  );
}

function CTAButton({ onClick }: { onClick: (e: React.MouseEvent) => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#contacto"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="font-sans uppercase inline-block"
      style={{
        fontSize: 10, fontWeight: 500, letterSpacing: "0.28em",
        color: hovered ? "#07080F" : "#E8E0D0",
        border: `1px solid ${hovered ? "rgba(232,224,208,0.8)" : "rgba(232,224,208,0.4)"}`,
        padding: "14px 48px", textDecoration: "none",
        position: "relative", overflow: "hidden",
        transition: "color 0.4s ease, border-color 0.4s ease",
      }}
    >
      <span style={{
        position: "absolute", inset: 0, background: "#E8E0D0",
        transform: hovered ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
      }} />
      <span style={{ position: "relative", zIndex: 1 }}>Consultar ahora</span>
    </a>
  );
}
