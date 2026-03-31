"use client";

export default function HeroBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#07080F" />
          <stop offset="60%" stopColor="#0A1020" />
          <stop offset="100%" stopColor="#0F1628" />
        </linearGradient>
        <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(196,185,154,0)" />
          <stop offset="50%" stopColor="rgba(196,185,154,0.35)" />
          <stop offset="100%" stopColor="rgba(196,185,154,0)" />
        </linearGradient>
        <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(155,181,212,0)" />
          <stop offset="50%" stopColor="rgba(155,181,212,0.25)" />
          <stop offset="100%" stopColor="rgba(155,181,212,0)" />
        </linearGradient>
      </defs>

      {/* Fondo */}
      <rect width="1200" height="800" fill="url(#bgGrad)" />

      <style>{`
        @keyframes floatA {
          0%, 100% { transform: translate(0px, 0px); opacity: 0.5; }
          33%       { transform: translate(8px, -12px); opacity: 0.8; }
          66%       { transform: translate(-6px, 6px); opacity: 0.4; }
        }
        @keyframes floatB {
          0%, 100% { transform: translate(0px, 0px); opacity: 0.4; }
          50%       { transform: translate(-10px, 8px); opacity: 0.7; }
        }
        @keyframes floatC {
          0%, 100% { transform: translate(0px, 0px); opacity: 0.3; }
          40%       { transform: translate(6px, -8px); opacity: 0.6; }
          80%       { transform: translate(-4px, 10px); opacity: 0.3; }
        }
        @keyframes pulseRing {
          0%, 100% { r: 6; opacity: 0.8; }
          50%       { r: 9; opacity: 0.4; }
        }
        @keyframes lineShimmer {
          0%, 100% { opacity: 0.3; }
          50%       { opacity: 0.7; }
        }
        @keyframes driftSlow {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-20px); }
        }
        .fa { animation: floatA 7s ease-in-out infinite; }
        .fb { animation: floatB 9s ease-in-out infinite; }
        .fc { animation: floatC 11s ease-in-out infinite; }
        .fa2 { animation: floatA 8s ease-in-out infinite reverse; }
        .fb2 { animation: floatB 6s ease-in-out infinite 1s; }
        .fc2 { animation: floatC 10s ease-in-out infinite 2s; }
        .pr { animation: pulseRing 4s ease-in-out infinite; }
        .pr2 { animation: pulseRing 5s ease-in-out infinite 0.8s; }
        .pr3 { animation: pulseRing 3.5s ease-in-out infinite 1.6s; }
        .ls { animation: lineShimmer 4s ease-in-out infinite; }
        .ls2 { animation: lineShimmer 5s ease-in-out infinite 1s; }
        .ls3 { animation: lineShimmer 6s ease-in-out infinite 2s; }
        .ds { animation: driftSlow 12s ease-in-out infinite; }
      `}</style>

      {/* Líneas de conexión */}
      <g className="ls">
        <line x1="160" y1="180" x2="420" y2="320" stroke="url(#lineGrad1)" strokeWidth="1.2" />
        <line x1="420" y1="320" x2="720" y2="220" stroke="url(#lineGrad1)" strokeWidth="1.2" />
        <line x1="720" y1="220" x2="980" y2="380" stroke="url(#lineGrad2)" strokeWidth="1" />
      </g>
      <g className="ls2">
        <line x1="280" y1="520" x2="580" y2="440" stroke="url(#lineGrad2)" strokeWidth="1" />
        <line x1="580" y1="440" x2="860" y2="560" stroke="url(#lineGrad1)" strokeWidth="1" />
        <line x1="860" y1="560" x2="1080" y2="460" stroke="url(#lineGrad2)" strokeWidth="0.8" />
      </g>
      <g className="ls3">
        <line x1="100" y1="380" x2="320" y2="480" stroke="url(#lineGrad1)" strokeWidth="0.8" />
        <line x1="320" y1="480" x2="580" y2="440" stroke="url(#lineGrad2)" strokeWidth="0.8" />
        <line x1="720" y1="220" x2="580" y2="440" stroke="url(#lineGrad1)" strokeWidth="0.8" />
        <line x1="420" y1="320" x2="280" y2="520" stroke="url(#lineGrad2)" strokeWidth="0.8" />
      </g>

      {/* Nodos / partículas */}
      <g className="fa">
        <circle cx="160" cy="180" r="6" fill="none" stroke="rgba(196,185,154,0.6)" strokeWidth="1.2" className="pr" />
        <circle cx="160" cy="180" r="2.5" fill="rgba(196,185,154,0.8)" />
      </g>
      <g className="fb">
        <circle cx="420" cy="320" r="6" fill="none" stroke="rgba(196,185,154,0.5)" strokeWidth="1" className="pr2" />
        <circle cx="420" cy="320" r="2.5" fill="rgba(196,185,154,0.7)" />
      </g>
      <g className="fc">
        <circle cx="720" cy="220" r="6" fill="none" stroke="rgba(155,181,212,0.55)" strokeWidth="1" className="pr3" />
        <circle cx="720" cy="220" r="2.5" fill="rgba(155,181,212,0.8)" />
      </g>
      <g className="fa2">
        <circle cx="980" cy="380" r="5" fill="none" stroke="rgba(155,181,212,0.45)" strokeWidth="1" className="pr" />
        <circle cx="980" cy="380" r="2" fill="rgba(155,181,212,0.7)" />
      </g>
      <g className="fb2">
        <circle cx="280" cy="520" r="5" fill="none" stroke="rgba(196,185,154,0.4)" strokeWidth="1" className="pr2" />
        <circle cx="280" cy="520" r="2" fill="rgba(196,185,154,0.65)" />
      </g>
      <g className="fc2">
        <circle cx="580" cy="440" r="7" fill="none" stroke="rgba(155,181,212,0.5)" strokeWidth="1.2" className="pr3" />
        <circle cx="580" cy="440" r="3" fill="rgba(155,181,212,0.75)" />
      </g>
      <g className="fa">
        <circle cx="860" cy="560" r="5" fill="none" stroke="rgba(196,185,154,0.4)" strokeWidth="1" className="pr" />
        <circle cx="860" cy="560" r="2" fill="rgba(196,185,154,0.6)" />
      </g>
      <g className="fb2">
        <circle cx="1080" cy="460" r="4" fill="none" stroke="rgba(155,181,212,0.35)" strokeWidth="0.8" className="pr2" />
        <circle cx="1080" cy="460" r="1.8" fill="rgba(155,181,212,0.55)" />
      </g>
      <g className="fc">
        <circle cx="100" cy="380" r="4" fill="none" stroke="rgba(196,185,154,0.3)" strokeWidth="0.8" className="pr3" />
        <circle cx="100" cy="380" r="1.8" fill="rgba(196,185,154,0.5)" />
      </g>
      <g className="fa2">
        <circle cx="320" cy="480" r="4" fill="none" stroke="rgba(155,181,212,0.35)" strokeWidth="0.8" className="pr" />
        <circle cx="320" cy="480" r="1.8" fill="rgba(155,181,212,0.5)" />
      </g>

      {/* Elementos flotantes decorativos */}
      <g className="ds" style={{ transformOrigin: "1100px 150px" }}>
        <circle cx="1100" cy="150" r="80" fill="none" stroke="rgba(196,185,154,0.04)" strokeWidth="1" />
        <circle cx="1100" cy="150" r="50" fill="none" stroke="rgba(196,185,154,0.06)" strokeWidth="1" />
      </g>
      <g className="ds" style={{ transformOrigin: "80px 650px", animationDelay: "4s" }}>
        <circle cx="80" cy="650" r="60" fill="none" stroke="rgba(155,181,212,0.05)" strokeWidth="1" />
        <circle cx="80" cy="650" r="35" fill="none" stroke="rgba(155,181,212,0.07)" strokeWidth="1" />
      </g>

      {/* Overlay gradiente izquierdo (donde irá el texto) */}
      <defs>
        <linearGradient id="textOverlay" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(7,8,15,0.75)" />
          <stop offset="60%" stopColor="rgba(7,8,15,0.3)" />
          <stop offset="100%" stopColor="rgba(7,8,15,0)" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#textOverlay)" />
    </svg>
  );
}
