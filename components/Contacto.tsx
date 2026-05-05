"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "@formspree/react";
import { Turnstile } from "@marsidev/react-turnstile";

type Fields = { nombre: string; email: string; empresa: string; mensaje: string };
type FieldFlags = Record<keyof Fields, boolean>;

const labelStyle: React.CSSProperties = {
  fontSize: 9,
  letterSpacing: "0.15em",
  color: "#5C5E57",
  display: "block",
  marginBottom: 8,
  textTransform: "uppercase",
  fontFamily: "inherit",
};

function validateNombre(v: string) {
  const t = v.trim();
  if (!t) return "Ingresá tu nombre completo";
  if (!/^[a-záéíóúüñA-ZÁÉÍÓÚÜÑ\s-]+$/.test(t)) return "Solo se permiten letras y espacios";
  if (t.length < 3) return "Ingresá tu nombre completo";
  return "";
}

function validateEmail(v: string) {
  if (!v.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()))
    return "Ingresá un correo electrónico válido";
  return "";
}

function validateEmpresa(v: string) {
  if (v.trim() && v.trim().length < 2)
    return "El nombre de empresa debe tener al menos 2 caracteres";
  return "";
}

function validateMensaje(v: string) {
  if (!v.trim() || v.trim().length < 20)
    return "El mensaje debe tener al menos 20 caracteres";
  return "";
}

const validators = { nombre: validateNombre, email: validateEmail, empresa: validateEmpresa, mensaje: validateMensaje };

function getErrors(values: Fields) {
  return {
    nombre: validateNombre(values.nombre),
    email: validateEmail(values.email),
    empresa: validateEmpresa(values.empresa),
    mensaje: validateMensaje(values.mensaje),
  };
}

function getBorderColor(field: keyof Fields, value: string, evaluated: boolean, isFocused: boolean): string {
  if (isFocused) return "#1C1C1A";
  const hasError = validators[field](value) !== "";
  if (evaluated && hasError) return "#C45C5C";
  if (evaluated && !hasError && value.trim()) return "#6A9E7A";
  return "#B1B3A9";
}

const falseFlags: FieldFlags = { nombre: false, email: false, empresa: false, mensaje: false };

export default function Contacto() {
  const [state, handleFormspreeSubmit] = useForm("xzdogrwo");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [sentName, setSentName] = useState("");
  const [values, setValues] = useState<Fields>({ nombre: "", email: "", empresa: "", mensaje: "" });
  const [touched, setTouched] = useState<FieldFlags>({ ...falseFlags });
  const [focused, setFocused] = useState<FieldFlags>({ ...falseFlags });
  const [shaking, setShaking] = useState<FieldFlags>({ ...falseFlags });
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const errors = getErrors(values);
  const evaluated = {
    nombre: touched.nombre || submitAttempted,
    email: touched.email || submitAttempted,
    empresa: touched.empresa || submitAttempted,
    mensaje: touched.mensaje || submitAttempted,
  };
  const visibleErrors = {
    nombre: evaluated.nombre ? errors.nombre : "",
    email: evaluated.email ? errors.email : "",
    empresa: evaluated.empresa ? errors.empresa : "",
    mensaje: evaluated.mensaje ? errors.mensaje : "",
  };
  const hasVisibleErrors = Object.values(visibleErrors).some(Boolean);

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

  const handleChange = (field: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const val = e.target.value;
    setValues((v) => ({ ...v, [field]: val }));
    if (field === "nombre" && val && !/^[a-záéíóúüñA-ZÁÉÍÓÚÜÑ\s-]*$/.test(val)) {
      setTouched((t) => ({ ...t, nombre: true }));
    }
  };

  const handleFocus = (field: keyof Fields) => () => {
    setFocused((f) => ({ ...f, [field]: true }));
  };

  const handleBlur = (field: keyof Fields) => () => {
    setFocused((f) => ({ ...f, [field]: false }));
    setTouched((t) => ({ ...t, [field]: true }));
  };

  const triggerShake = (fields: (keyof Fields)[]) => {
    const next = { ...falseFlags };
    fields.forEach((f) => { next[f] = true; });
    setShaking(next);
    setTimeout(() => setShaking({ ...falseFlags }), 350);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitAttempted(true);
    setTouched({ nombre: true, email: true, empresa: true, mensaje: true });
    const allErrors = getErrors(values);
    const errorFields = (Object.keys(allErrors) as (keyof Fields)[]).filter((f) => allErrors[f]);
    if (errorFields.length > 0) {
      triggerShake(errorFields);
      return;
    }

    setSentName(values.nombre.trim().split(" ")[0]);
    await handleFormspreeSubmit(e);
  };

  const fieldStyle = (field: keyof Fields): React.CSSProperties => ({
    border: "none",
    borderBottom: `1px solid ${getBorderColor(field, values[field], evaluated[field], focused[field])}`,
    borderRadius: 0,
    padding: "10px 0 14px",
    fontSize: 15,
    color: "#31332C",
    outline: "none",
    width: "100%",
    background: focused[field] ? "rgba(28,28,26,0.03)" : "transparent",
    fontFamily: "inherit",
    transition: "border-color 0.2s ease, background 0.2s ease",
  });

  return (
    <section id="contacto" style={{ background: "#1C1C1A", padding: "96px 0" }}>
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="fade-in" style={{ marginBottom: 64 }}>
          <p className="font-sans uppercase" style={{ fontSize: 10, letterSpacing: "0.18em", color: "#C9A96E", marginBottom: 16 }}>
            Contacto
          </p>
          <h2 className="font-serif section-title" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, color: "#F5F4ED", letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: 12 }}>
            Iniciemos la conversación.
          </h2>
          <p className="font-serif italic" style={{ fontSize: 17, color: "#7A7A72" }}>
            Contanos qué necesitás. La consulta inicial es gratuita.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">

          <div className="md:col-span-3 fade-in">
            <div style={{ background: "#FFFFFF", padding: "48px 40px", borderRadius: 2, boxShadow: "0 8px 48px rgba(0,0,0,0.18)", border: "1px solid rgba(255,255,255,0.06)" }}>

              {state.succeeded ? (
                <p className="font-serif italic" style={{ fontSize: 20, color: "#31332C", textAlign: "center", lineHeight: 1.7 }}>
                  Gracias, {sentName}. Te contactamos en menos de 24 horas.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div>
                    <label htmlFor="nombre" className="font-sans" style={labelStyle}>Nombre completo</label>
                    <input
                      id="nombre" name="nombre" type="text"
                      className={`font-sans${shaking.nombre ? " input-error" : ""}`}
                      style={fieldStyle("nombre")}
                      value={values.nombre}
                      onChange={handleChange("nombre")}
                      onFocus={handleFocus("nombre")}
                      onBlur={handleBlur("nombre")}
                    />
                    {visibleErrors.nombre && (
                      <p key={visibleErrors.nombre} className="font-sans field-error" style={{ fontSize: 11, color: "#C45C5C", marginTop: 4 }}>
                        {visibleErrors.nombre}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="font-sans" style={labelStyle}>Correo electrónico</label>
                    <input
                      id="email" name="email" type="text"
                      className={`font-sans${shaking.email ? " input-error" : ""}`}
                      style={fieldStyle("email")}
                      value={values.email}
                      onChange={handleChange("email")}
                      onFocus={handleFocus("email")}
                      onBlur={handleBlur("email")}
                    />
                    {visibleErrors.email && (
                      <p key={visibleErrors.email} className="font-sans field-error" style={{ fontSize: 11, color: "#C45C5C", marginTop: 4 }}>
                        {visibleErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="empresa" className="font-sans" style={labelStyle}>Empresa (opcional)</label>
                    <input
                      id="empresa" name="empresa" type="text"
                      className={`font-sans${shaking.empresa ? " input-error" : ""}`}
                      style={fieldStyle("empresa")}
                      value={values.empresa}
                      onChange={handleChange("empresa")}
                      onFocus={handleFocus("empresa")}
                      onBlur={handleBlur("empresa")}
                    />
                    {visibleErrors.empresa && (
                      <p key={visibleErrors.empresa} className="font-sans field-error" style={{ fontSize: 11, color: "#C45C5C", marginTop: 4 }}>
                        {visibleErrors.empresa}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="font-sans" style={labelStyle}>Mensaje</label>
                    <textarea
                      id="mensaje" name="mensaje" rows={4}
                      className={`font-sans resize-none${shaking.mensaje ? " input-error" : ""}`}
                      style={fieldStyle("mensaje")}
                      value={values.mensaje}
                      onChange={handleChange("mensaje")}
                      onFocus={handleFocus("mensaje")}
                      onBlur={handleBlur("mensaje")}
                      maxLength={1000}
                    />
                    <p className="font-sans" style={{ fontSize: 11, color: values.mensaje.length >= 1000 ? "#C45C5C" : "#B1B3A9", marginTop: 4, textAlign: "right", transition: "color 0.2s ease" }}>
                      {values.mensaje.length} / 1000
                    </p>
                    {visibleErrors.mensaje && (
                      <p key={visibleErrors.mensaje} className="font-sans field-error" style={{ fontSize: 11, color: "#C45C5C", marginTop: 4 }}>
                        {visibleErrors.mensaje}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <Turnstile
                      siteKey="0x4AAAAAADJt3LL7xHVIY4by"
                      onSuccess={(token) => setTurnstileToken(token)}
                      options={{ theme: "light" }}
                    />

                    <button
                      type="submit"
                      disabled={state.submitting || hasVisibleErrors || !turnstileToken}
                      className="font-sans border-none"
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        background: "#1C1C1A",
                        color: "#F7F7FF",
                        borderRadius: 1,
                        padding: "18px 44px",
                        width: "100%",
                        marginTop: 16,
                        transition: "background 0.3s ease, opacity 0.3s ease",
                        opacity: state.submitting || hasVisibleErrors || !turnstileToken ? 0.5 : 1,
                        cursor: state.submitting || hasVisibleErrors || !turnstileToken ? "not-allowed" : "pointer",
                      }}
                      onMouseEnter={(e) => { if (!state.submitting && !hasVisibleErrors && turnstileToken) e.currentTarget.style.background = "#2C2C2A"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "#1C1C1A"; }}
                    >
                      {state.submitting ? "ENVIANDO..." : "SOLICITAR CONSULTA"}
                    </button>

                    <p className="font-sans" style={{ fontSize: 11, color: "#B1B3A9", letterSpacing: "0.05em", marginTop: 16 }}>
                      · Respondemos en 24 horas
                    </p>

                    {state.errors && (
                      <p className="mt-4 font-sans" style={{ fontSize: 13, color: "#C45C5C" }}>
                        Hubo un error al enviar. Intentá de nuevo o escribinos a{" "}
                        <a href="mailto:consultas@ortizalejandre.com" style={{ color: "#C45C5C", textDecoration: "underline" }}>
                          consultas@ortizalejandre.com
                        </a>
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="md:col-span-2 fade-in flex flex-col justify-center gap-10">
            {[
              { label: "Email", value: "consultas@ortizalejandre.com" },
              { label: "Teléfono", value: "+54 11 5640-0469" },
              { label: "Horario", value: "Lunes a Viernes 10–19hs" },
              { label: "Ubicación", value: "Buenos Aires, Argentina" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="font-sans uppercase mb-2" style={{ fontSize: 9, letterSpacing: "0.15em", color: "#7A7A72" }}>
                  {label}
                </p>
                <p className="font-sans" style={{ fontSize: 15, color: "#F5F4ED", fontWeight: 300 }}>
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
