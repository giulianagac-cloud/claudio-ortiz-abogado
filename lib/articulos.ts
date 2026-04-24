import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ArticuloMeta {
  title: string;
  slug: string;
  fecha: string;
  categoria: string;
  resumen: string;
  imagen: string;
}

const dir = path.join(process.cwd(), "content/articulos");

export function getAllArticulos(): ArticuloMeta[] {
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), "utf-8");
      return matter(raw).data as ArticuloMeta;
    })
    .sort((a, b) => b.fecha.localeCompare(a.fecha));
}

export function getArticuloBySlug(slug: string): {
  meta: ArticuloMeta;
  content: string;
} {
  const filePath = path.join(dir, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { meta: data as ArticuloMeta, content };
}
