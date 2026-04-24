"use client";

import { useState, useEffect, useRef } from "react";

type FormState = "idle" | "sending" | "sent" | "error";

const inputStyle: React.CSSProperties = {
  border: "none",
  borderBottom: "1px solid #B1B3A9",
  borderRadius: 0,
  padding: "10px 0",
  fontSize: 15,
  color: "#31332C",
  outline: "none",
  width: "100%",
  background: "transparent",
  fontFamily: "inherit",
  transition: "border-color 0.3s ease",
};

const labelStyle: React.CSSProperties = {
  fontSize: 9,
  letterSpacing: "0.15em",
  color: "#5C5E57",
  display: "block",
  marginBottom: 8,
  textTransform: "uppercase",
  fontFamily: "inherit",
};

export default function Contacto() {
  const [formState, setFormState] = useState<FormState>("idle");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
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

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderBottomColor = "#505E80";
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderBottomColor = "#B1B3A9";
  };

  return (
    <section id="contacto" style={{ background: "#EFEEE6", padding: "96px 0" }}>
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header con contexto */}
        <div className="fade-in" style={{ marginBottom: 64 }}>
          <p
            className="font-sans uppercase"
            style={{ fontSize: 10, letterSpacing: "0.18em", color: "#5C5E57", marginBottom: 16 }}
          >
            Contacto
          </p>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400,
              color: "#31332C",
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              marginBottom: 12,
            }}
          >
            Iniciemos la conversación.
          </h2>
          <p
            className="font-serif italic"
            style={{ fontSize: 17, color: "#5C5E57" }}
          >
            Cuéntanos qué necesitas. La consulta inicial es gratuita.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">

          {/* Formulario (3/5) */}
          <div className="md:col-span-3 fade-in">
            <div style={{ background: "#FFFFFF", padding: "48px 40px" }}>
              <form
                action="https://formspree.io/f/FORM_ID"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-10"
              >
                <div>
                  <label htmlFor="nombre" className="font-sans" style={labelStyle}>Nombre completo</label>
                  <input
                    id="nombre" name="nombre" type="text" required
                    className="font-sans" style={inputStyle}
                    onFocus={handleFocus} onBlur={handleBlur}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="font-sans" style={labelStyle}>Correo electrónico</label>
                  <input
                    id="email" name="email" type="email" required
                    className="font-sans" style={inputStyle}
                    onFocus={handleFocus} onBlur={handleBlur}
                  />
                </div>

                <div>
                  <label htmlFor="empresa" className="font-sans" style={labelStyle}>Empresa (opcional)</label>
                  <input
                    id="empresa" name="empresa" type="text"
                    className="font-sans" style={inputStyle}
                    onFocus={handleFocus} onBlur={handleBlur}
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="font-sans" style={labelStyle}>Mensaje</label>
                  <textarea
                    id="mensaje" name="mensaje" required rows={4}
                    className="font-sans resize-none" style={inputStyle}
                    onFocus={handleFocus} onBlur={handleBlur}
                  />
                </div>

                <div className="text-center pt-2">
                  <button
                    type="submit"
                    disabled={formState === "sending" || formState === "sent"}
                    className="font-sans border-none"
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      background: "#505E80",
                      color: "#F7F7FF",
                      borderRadius: 0,
                      padding: "14px 44px",
                      transition: "background 0.3s ease",
                      opacity: formState === "sending" || formState === "sent" ? 0.6 : 1,
                      cursor: formState === "sending" || formState === "sent" ? "not-allowed" : "pointer",
                    }}
                    onMouseEnter={(e) => { if (formState === "idle") e.currentTarget.style.background = "#445273"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "#505E80"; }}
                  >
                    {formState === "sending" ? "ENVIANDO..." : "SOLICITAR CONSULTA"}
                  </button>

                  <p className="mt-3 font-sans" style={{ fontSize: 11, color: "#B1B3A9", letterSpacing: "0.05em" }}>
                    Respondemos en 24 horas
                  </p>

                  {formState === "sent" && (
                    <p className="mt-4 font-sans text-sm" style={{ color: "#505E80" }}>
                      Mensaje enviado. Nos pondremos en contacto a la brevedad.
                    </p>
                  )}
                  {formState === "error" && (
                    <p className="mt-4 font-sans text-sm" style={{ color: "#5C5E57" }}>
                      Hubo un error. Escribinos a consultas@ortizalejandre.com
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Datos de contacto (2/5) */}
          <div className="md:col-span-2 fade-in flex flex-col justify-center gap-10">
            {[
              { label: "Email", value: "consultas@ortizalejandre.com" },
              { label: "Teléfono", value: "+54 11 5640-0469" },
              { label: "Horario", value: "Lunes a Viernes 10–19hs" },
              { label: "Ubicación", value: "Buenos Aires, Argentina" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p
                  className="font-sans uppercase mb-2"
                  style={{ fontSize: 9, letterSpacing: "0.15em", color: "#5C5E57" }}
                >
                  {label}
                </p>
                <p
                  className="font-sans"
                  style={{ fontSize: 15, color: "#31332C", fontWeight: 300 }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
