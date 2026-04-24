import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Navbar from "@/components/Navbar";
import { getAllArticulos, getArticuloBySlug } from "@/lib/articulos";

export async function generateStaticParams() {
  const articulos = getAllArticulos();
  return articulos.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = getArticuloBySlug(slug);
  return {
    title: `${meta.title} — Ortiz Alejandre`,
    description: meta.resumen,
  };
}

export default async function ArticuloPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { meta, content } = getArticuloBySlug(slug);

  return (
    <>
      <Navbar />
      <main style={{ background: "#FBF9F4", minHeight: "100vh", paddingTop: 68 }}>

        {/* Imagen portada */}
        <div style={{ position: "relative", width: "100%", aspectRatio: "21/9", background: "#EFEEE6", maxHeight: 480, overflow: "hidden" }}>
          <Image
            src={meta.imagen}
            alt={meta.title}
            fill
            style={{ objectFit: "cover", objectPosition: "center center" }}
            priority
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, transparent 50%, rgba(251,249,244,0.8) 100%)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Cuerpo */}
        <div className="max-w-3xl mx-auto px-6 md:px-10 py-16">

          {/* Volver */}
          <Link
            href="/articulos"
            className="font-sans"
            style={{
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#5C5E57",
              textDecoration: "none",
              display: "inline-block",
              marginBottom: 40,
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#505E80")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#5C5E57")}
          >
            ← Volver a artículos
          </Link>

          {/* Metadata */}
          <div style={{ marginBottom: 12 }}>
            <p
              className="font-sans uppercase"
              style={{ fontSize: 9, letterSpacing: "0.16em", color: "#C9A96E", marginBottom: 16 }}
            >
              {meta.categoria} &nbsp;·&nbsp; {new Date(meta.fecha + "T12:00:00").toLocaleDateString("es-AR", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          {/* Título */}
          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 400,
              color: "#31332C",
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              marginBottom: 48,
            }}
          >
            {meta.title}
          </h1>

          {/* Divider */}
          <div style={{ width: 48, height: 2, background: "#C9A96E", marginBottom: 48 }} />

          {/* Cuerpo MDX */}
          <div className="articulo-body">
            <MDXRemote source={content} />
          </div>

          {/* Volver abajo */}
          <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid rgba(177,179,169,0.3)" }}>
            <Link
              href="/articulos"
              className="font-sans"
              style={{
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#5C5E57",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#505E80")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#5C5E57")}
            >
              ← Volver a artículos
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}
