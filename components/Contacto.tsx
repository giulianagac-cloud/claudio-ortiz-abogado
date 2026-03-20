"use client";

import { useState, useEffect, useRef } from "react";

type FormState = "idle" | "sending" | "sent" | "error";

export default function Contacto() {
  const [formState, setFormState] = useState<FormState>("idle");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormState("sent");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const inputBase =
    "w-full bg-transparent border-0 border-b border-[#555555] text-white placeholder-[#777777] py-3 text-sm font-light font-sans focus:outline-none focus:border-white transition-colors duration-300";

  const labelBase =
    "font-sans text-xs uppercase tracking-[1px] text-[#999999] block mb-2";

  return (
    <section id="contacto" className="bg-[#0A0A0A] py-16 md:py-28 lg:py-32">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Encabezado */}
        <div className="mb-16 md:mb-20 fade-in">
          <p className="font-sans text-xs text-[#777777] uppercase tracking-[3px] mb-4">
            CONTACTO
          </p>
          <h2 className="font-serif text-4xl text-white font-normal mb-5">
            Hablemos
          </h2>
          <div className="w-14 h-px bg-[#555555]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {/* Info de contacto */}
          <div className="fade-in space-y-10">
            <p className="font-sans text-base font-light text-[#AAAAAA] leading-relaxed max-w-sm">
              ¿Necesita asesoramiento jurídico para su empresa? Complete el formulario
              o contáctenos directamente.
            </p>

            <div className="space-y-8">
              <div>
                <p className="font-sans text-xs uppercase tracking-[2px] text-[#777777] mb-1">
                  EMAIL
                </p>
                <p className="font-sans text-sm font-light text-[#CCCCCC]">
                  info@claudioortiz.com
                </p>
              </div>
              <div>
                <p className="font-sans text-xs uppercase tracking-[2px] text-[#777777] mb-1">
                  TELÉFONO
                </p>
                <p className="font-sans text-sm font-light text-[#CCCCCC]">
                  +54 11 XXXX-XXXX
                </p>
              </div>
              <div>
                <p className="font-sans text-xs uppercase tracking-[2px] text-[#777777] mb-1">
                  UBICACIÓN
                </p>
                <p className="font-sans text-sm font-light text-[#CCCCCC]">
                  Buenos Aires, Argentina
                </p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="fade-in">
            <form
              action="https://formspree.io/f/FORM_ID"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <div>
                <label htmlFor="nombre" className={labelBase}>
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder="Juan García"
                  className={inputBase}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelBase}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="juan@empresa.com"
                  className={inputBase}
                />
              </div>

              <div>
                <label htmlFor="empresa" className={labelBase}>
                  Empresa <span className="normal-case text-[#555555]">(opcional)</span>
                </label>
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  placeholder="Mi Empresa S.A."
                  className={inputBase}
                />
              </div>

              <div>
                <label htmlFor="mensaje" className={labelBase}>
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={4}
                  placeholder="Describa brevemente su consulta..."
                  className={`${inputBase} resize-none`}
                />
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={formState === "sending" || formState === "sent"}
                  className="font-sans text-sm text-white uppercase tracking-[2px] border border-white px-10 py-4 transition-all duration-300 hover:bg-white hover:text-[#0A0A0A] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === "sending" ? "ENVIANDO..." : "ENVIAR MENSAJE"}
                </button>

                {formState === "sent" && (
                  <p className="mt-4 font-sans text-sm font-light text-[#AAAAAA]">
                    Mensaje enviado correctamente. Nos pondremos en contacto a la brevedad.
                  </p>
                )}
                {formState === "error" && (
                  <p className="mt-4 font-sans text-sm font-light text-[#999999]">
                    Hubo un error. Intente nuevamente o escríbanos a{" "}
                    <span className="text-white">info@claudioortiz.com</span>.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
