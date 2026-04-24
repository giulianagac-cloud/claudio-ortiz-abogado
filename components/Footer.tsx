"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#FBF9F4",
        borderTop: "1px solid rgba(177,179,169,0.3)",
        padding: "64px 0 40px",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Grid 4 columnas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8" style={{ marginBottom: 48 }}>

          {/* Col 1: Navegación */}
          <div>
            <p
              className="font-sans uppercase"
              style={{ fontSize: 9, letterSpacing: "0.18em", color: "#B1B3A9", marginBottom: 20 }}
            >
              Navegación
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Expertise", href: "servicios" },
                { label: "Sobre Claudio", href: "sobre-mi" },
                { label: "Contacto", href: "contacto" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => document.getElementById(link.href)?.scrollIntoView({ behavior: "smooth" })}
                  className="font-sans text-left bg-transparent border-none cursor-pointer p-0"
                  style={{ fontSize: 13, color: "#5C5E57", transition: "color 0.2s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#31332C")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#5C5E57")}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Col 2: Legal */}
          <div>
            <p
              className="font-sans uppercase"
              style={{ fontSize: 9, letterSpacing: "0.18em", color: "#B1B3A9", marginBottom: 20 }}
            >
              Legal
            </p>
            <nav className="flex flex-col gap-3">
              {["Privacy Policy", "Terms of Service", "Ley 25.326"].map((item) => (
                <span
                  key={item}
                  className="font-sans"
                  style={{ fontSize: 13, color: "#5C5E57", cursor: "default" }}
                >
                  {item}
                </span>
              ))}
            </nav>
          </div>

          {/* Col 3: Contacto */}
          <div>
            <p
              className="font-sans uppercase"
              style={{ fontSize: 9, letterSpacing: "0.18em", color: "#B1B3A9", marginBottom: 20 }}
            >
              Contacto
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:consultas@ortizalejandre.com"
                className="font-sans"
                style={{ fontSize: 13, color: "#5C5E57", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#31332C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#5C5E57")}
              >
                consultas@ortizalejandre.com
              </a>
              <a
                href="tel:+541156400469"
                className="font-sans"
                style={{ fontSize: 13, color: "#5C5E57", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#31332C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#5C5E57")}
              >
                +54 11 5640-0469
              </a>
            </div>
          </div>

          {/* Col 4: Marca */}
          <div className="flex flex-col justify-between">
            <div>
              <span
                className="font-serif italic block"
                style={{ fontSize: 18, color: "#31332C", letterSpacing: "-0.01em", marginBottom: 8 }}
              >
                Ortiz Alejandre
              </span>
              <p
                className="font-sans"
                style={{ fontSize: 12, color: "#B1B3A9" }}
              >
                © 2026
              </p>
            </div>
          </div>

        </div>

        {/* Divider + créditos */}
        <div
          style={{
            borderTop: "1px solid rgba(177,179,169,0.3)",
            paddingTop: 24,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <p
            className="font-sans"
            style={{ fontSize: 10, letterSpacing: "0.1em", color: "#B1B3A9", textTransform: "uppercase" }}
          >
            © 2026 Ortiz Alejandre. Todos los derechos reservados.
          </p>
          <a
            href="https://nexoraintelligence.co"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans"
            style={{
              fontSize: 10,
              letterSpacing: "0.1em",
              color: "#B1B3A9",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#505E80")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#B1B3A9")}
          >
            Desarrollado por Nexora →
          </a>
        </div>

      </div>
    </footer>
  );
}
