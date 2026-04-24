import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { getAllArticulos } from "@/lib/articulos";

export const metadata: Metadata = {
  title: "Artículos — Ortiz Alejandre",
  description:
    "Perspectivas sobre derecho corporativo, gestión y tecnología para PyMEs argentinas.",
};

export default function ArticulosPage() {
  const articulos = getAllArticulos();

  return (
    <>
      <Navbar />
      <main style={{ background: "#FBF9F4", minHeight: "100vh", paddingTop: 68 }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">

          {/* Header */}
          <div style={{ marginBottom: 64 }}>
            <p
              className="font-sans uppercase"
              style={{ fontSize: 10, letterSpacing: "0.18em", color: "#5C5E57", marginBottom: 16 }}
            >
              Publicaciones
            </p>
            <h1
              className="font-serif"
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 300,
                color: "#31332C",
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
              }}
            >
              Artículos
            </h1>
          </div>

          {/* Grid */}
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
                  {/* Imagen */}
                  <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "#EFEEE6" }}>
                    <Image
                      src={art.imagen}
                      alt={art.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  {/* Contenido */}
                  <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                    <p
                      className="font-sans uppercase"
                      style={{ fontSize: 9, letterSpacing: "0.16em", color: "#C9A96E" }}
                    >
                      {art.categoria}
                    </p>
                    <h2
                      className="font-serif"
                      style={{
                        fontSize: 20,
                        fontWeight: 400,
                        color: "#31332C",
                        lineHeight: 1.3,
                        letterSpacing: "-0.015em",
                      }}
                    >
                      {art.title}
                    </h2>
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
      </main>
    </>
  );
}
