"use client";

import { useEffect, useRef } from "react";

export default function Tagline() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ background: "#F5F4ED", padding: "100px 0" }}>
      <div
        ref={sectionRef}
        className="max-w-4xl mx-auto px-6 md:px-10 text-center fade-in"
      >
        <p
          className="font-serif italic"
          style={{
            fontSize: "clamp(22px, 3vw, 38px)",
            color: "#31332C",
            letterSpacing: "-0.01em",
            lineHeight: 1.45,
            fontWeight: 400,
          }}
        >
          "El derecho ordena. La gestión organiza. La tecnología potencia."
        </p>
      </div>
    </section>
  );
}
