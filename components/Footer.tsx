"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#FBF9F4",
        borderTop: "1px solid rgba(177,179,169,0.3)",
        padding: "44px 0",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          {/* Left: Brand */}
          <span
            className="font-serif italic"
            style={{ fontSize: 16, color: "#31332C", letterSpacing: "-0.01em" }}
          >
            Ortiz Alejandre
          </span>

          {/* Center: Legal */}
          <nav className="flex flex-wrap items-center gap-5">
            {["PRIVACY POLICY", "TERMS OF SERVICE", "DISCLAIMER"].map((item) => (
              <span
                key={item}
                className="font-sans"
                style={{
                  fontSize: 8,
                  letterSpacing: "0.14em",
                  color: "#5C5E57",
                  textTransform: "uppercase",
                  cursor: "default",
                }}
              >
                {item}
              </span>
            ))}
          </nav>

          {/* Right: Copyright */}
          <p
            className="font-sans"
            style={{
              fontSize: 8,
              letterSpacing: "0.1em",
              color: "#5C5E57",
              textTransform: "uppercase",
            }}
          >
            © 2026 ORTIZ ALEJANDRE. DESARROLLADO POR NEXORA CONSULTING.
          </p>
        </div>
      </div>
    </footer>
  );
}
