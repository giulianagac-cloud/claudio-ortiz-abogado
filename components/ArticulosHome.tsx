import Image from "next/image";
import Link from "next/link";
import { getAllArticulos } from "@/lib/articulos";
import ArticulosAnimations from "./ArticulosAnimations";

export default function ArticulosHome() {
  const articulos = getAllArticulos().slice(0, 3);

  return (
    <section id="articulos" style={{ background: "#FBF9F4", padding: "96px 0" }}>
      <ArticulosAnimations />
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between"
          style={{ gap: 24, marginBottom: 48 }}
        >
          <div style={{ maxWidth: 620 }}>
            <p
              className="font-sans uppercase"
              style={{ fontSize: 10, letterSpacing: "0.18em", color: "#C9A96E", marginBottom: 16 }}
            >
              Artículos
            </p>
            <h2
              className="font-serif section-title"
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 300,
                color: "#31332C",
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
                marginBottom: 16,
              }}
            >
              Ideas para ordenar y hacer crecer tu empresa.
            </h2>
            <p
              className="font-sans"
              style={{ fontSize: 15, color: "#5C5E57", lineHeight: 1.8, fontWeight: 300 }}
            >
              Perspectivas prácticas sobre estructura legal, socios, contratos y tecnología aplicada a PyMEs.
            </p>
          </div>

          <Link
            href="/articulos"
            className="font-sans articulo-section-link"
            style={{
              alignSelf: "flex-start",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#505E80",
              textDecoration: "none",
              borderBottom: "1px solid rgba(80,94,128,0.35)",
              paddingBottom: 6,
              transition: "color 0.2s ease, border-color 0.2s ease",
              whiteSpace: "nowrap",
            }}
          >
            Ver todos
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 24 }}>
          {articulos.map((art) => (
            <Link
              key={art.slug}
              href={`/articulos/${art.slug}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              <article
                className="articulo-card"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(177,179,169,0.3)",
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "#EFEEE6" }}>
                  <Image
                    src={art.imagen}
                    alt={art.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div style={{ padding: "26px 24px 30px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                  <p
                    className="font-sans uppercase"
                    style={{ fontSize: 9, letterSpacing: "0.16em", color: "#C9A96E" }}
                  >
                    {art.categoria}
                  </p>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: 20,
                      fontWeight: 400,
                      color: "#31332C",
                      lineHeight: 1.3,
                    }}
                  >
                    {art.title}
                  </h3>
                  <p
                    className="font-sans"
                    style={{ fontSize: 13, color: "#5C5E57", lineHeight: 1.75, fontWeight: 300, flex: 1 }}
                  >
                    {art.resumen}
                  </p>
                  <span
                    className="font-sans"
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      color: "#505E80",
                      textTransform: "uppercase",
                      marginTop: 8,
                    }}
                  >
                    Leer artículo →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
