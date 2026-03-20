"use client";

import { useEffect, useRef } from "react";

export default function SobreMi() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, i * 120);
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
    <section id="sobre-mi" className="bg-[#F5F5F5] py-16 md:py-28 lg:py-32">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 lg:gap-24">
          {/* Columna de texto */}
          <div className="md:col-span-3">
            <div className="fade-in mb-12">
              <p className="font-sans text-xs text-[#999999] uppercase tracking-[3px] mb-4">
                TRAYECTORIA
              </p>
              <h2 className="font-serif text-4xl text-[#0A0A0A] font-normal mb-5">
                Sobre mí
              </h2>
              <div className="w-14 h-px bg-[#0A0A0A]" />
            </div>

            <div className="space-y-6">
              <p className="fade-in font-sans text-base font-light text-[#333333] leading-loose">
                Con más de [X] años de experiencia en derecho corporativo, asesoro a
                empresas y PyMEs en la toma de decisiones legales estratégicas.
              </p>
              <p className="fade-in font-sans text-base font-light text-[#333333] leading-loose">
                Mi enfoque combina rigor técnico con una visión práctica del negocio,
                entendiendo que cada solución jurídica debe alinearse con los objetivos
                comerciales del cliente.
              </p>
              <p className="fade-in font-sans text-base font-light text-[#333333] leading-loose">
                He acompañado a empresas en procesos de constitución societaria,
                reestructuración, negociación de acuerdos complejos y protección de
                activos intangibles.
              </p>
            </div>
          </div>

          {/* Columna visual */}
          <div className="md:col-span-2 fade-in">
            <div className="w-full aspect-[3/4] bg-[#E5E5E5] flex items-center justify-center">
              <span className="font-sans text-xs text-[#999999] uppercase tracking-[2px]">
                Foto
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
