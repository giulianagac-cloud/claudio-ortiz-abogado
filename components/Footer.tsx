"use client";

export default function Footer() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#07080F] border-t border-[#1C2B4A]">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20">

        {/* Top: brand + nav + contacto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg viewBox="0 0 44 44" fill="none" width={28} height={28}>
                <circle cx="15" cy="22" r="12" stroke="rgba(196,185,154,0.75)" strokeWidth="1.3"/>
                <circle cx="29" cy="22" r="12" stroke="rgba(196,185,154,0.75)" strokeWidth="1.3"/>
              </svg>
              <div className="flex flex-col items-start leading-none gap-0.5">
                <span className="font-serif text-white font-normal" style={{ fontSize: 15 }}>
                  Ortiz Alejandre
                </span>
                <span className="font-sans text-[#667799] uppercase" style={{ fontSize: 9, letterSpacing: "0.2em" }}>
                  Derecho corporativo
                </span>
              </div>
            </div>
            <p className="font-sans text-sm font-light text-[#4A5568] leading-relaxed max-w-xs">
              Soluciones jurídicas estratégicas para empresas y PyMEs en Argentina.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <p className="font-sans text-xs uppercase tracking-[2px] text-[#C9A96E] mb-6">
              Secciones
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Servicios", href: "servicios" },
                { label: "Sobre nosotros", href: "sobre-mi" },
                { label: "Contacto", href: "contacto" },
              ].map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleScroll(href)}
                  className="font-sans text-sm font-light text-[#667799] hover:text-[#E8E0D0] transition-colors duration-300 text-left cursor-pointer bg-transparent border-none w-fit"
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <p className="font-sans text-xs uppercase tracking-[2px] text-[#C9A96E] mb-6">
              Contacto
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:consultas@ortizalejandre.com"
                className="font-sans text-sm font-light text-[#667799] hover:text-[#E8E0D0] transition-colors duration-300"
              >
                consultas@ortizalejandre.com
              </a>
              <a
                href="tel:+541156400469"
                className="font-sans text-sm font-light text-[#667799] hover:text-[#E8E0D0] transition-colors duration-300"
              >
                +54 11 5640-0469
              </a>
              <span className="font-sans text-sm font-light text-[#667799]">
                Buenos Aires, Argentina
              </span>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="h-px bg-[#1C2B4A] mb-8" />

        {/* Bottom: copyright + legal + crédito */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="font-sans text-xs text-[#2A3E5E]">
              © 2026 Ortiz Alejandre. Todos los derechos reservados.
            </p>
            <p className="font-sans text-xs text-[#2A3E5E]">
              Los datos personales recopilados son tratados conforme a la Ley 25.326 de Protección de Datos Personales.
            </p>
          </div>
          <p className="font-sans text-xs text-[#2A3E5E]">
            Diseño y desarrollo por{" "}
            <span className="text-[#3A4E6E] hover:text-[#8899AA] transition-colors duration-300 cursor-default">
              Nexora Consulting
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
}
