[PROYECTO.md](https://github.com/user-attachments/files/27280810/PROYECTO.md)
# Ortiz Alejandre — Contexto del Proyecto

## Stack técnico
- **Framework:** Next.js (App Router) + React + TypeScript
- **Estilos:** Tailwind CSS
- **Fuentes:** Newsreader (serif), Public Sans (sans-serif)
- **Artículos:** next-mdx-remote + gray-matter
- **Deploy:** Vercel — repo `giulianagac-cloud/claudio-ortiz-abogado`
- **URL producción:** https://claudio-ortiz-abogado.vercel.app

## Estructura de archivos relevante

```
/app
  layout.tsx          ← fuentes, metadata global
  page.tsx            ← página principal (todos los componentes)
  globals.css         ← estilos globales, .fade-in, .articulo-card, .articulo-body
  /articulos
    page.tsx          ← listado de artículos
    /[slug]
      page.tsx        ← página individual con MDXRemote

/components
  Navbar.tsx          ← navbar fija, blur on scroll, mobile menu
  Hero.tsx
  TaglineSection.tsx
  Servicios.tsx
  SobreNosotros.tsx
  Articulos.tsx       ← sección home (3 cards)
  Contacto.tsx        ← formulario con validaciones
  Footer.tsx

/content/articulos/
  tu-empresa-tiene-contrato-no-estructura.mdx
  socios-sin-pacto.mdx
  digitalizar-no-es-escanear.mdx

/lib
  articulos.ts        ← helper server-side para leer frontmatter y contenido

/public
  equipo.png          ← foto hero (foto de Claudio en escritorio)
  claudio.jpeg        ← foto de Claudio (sección Sobre Nosotros)
  oficina.png         ← foto oficina (actualmente NO usada, disponible)
  nexora.png          ← logo/imagen Nexora Intelligence
  /articulos/
    contrato.png
    socios.png
    tecnologia.png
```

## Paleta de colores

| Token | Valor | Uso |
|---|---|---|
| Fondo principal | `#FBF9F4` | Hero, Artículos |
| Fondo alterno | `#F5F4ED` | Tagline, Servicios |
| Fondo sobre nosotros | `#F8F6F1` | Sección Sobre Nosotros |
| Fondo contacto | `#1C1C1A` | Sección Contacto (oscuro) |
| Fondo footer | `#151513` | Footer (más oscuro) |
| Texto principal | `#31332C` | Headings, body |
| Texto oscuro | `#0F1628` | Texto en sección Sobre Nosotros |
| Texto secundario | `#5C5E57` | Párrafos, labels |
| Texto muted oscuro | `#7A7A72` | Labels en sección oscura |
| Acento champagne | `#C9A96E` | Labels uppercase, líneas decorativas, links |
| Negro cálido | `#1C1C1A` | Botones CTA, bullets |
| Beige claro | `#F5F4ED` | Textos sobre fondo oscuro |

## Tipografía
- **Serif (Newsreader):** `font-serif` — títulos h1/h2/h3, citas, italic decorativo
- **Sans (Public Sans):** `font-sans` — body text, labels, botones, navegación
- Pesos usados: `font-weight: 300` (body), `400` (headings serif), `500` (labels bold)

## Secciones de la página (en orden)

1. **#hero** — Grid dos columnas: foto izquierda (`/equipo.png`) + copy derecha. Título: "Estudio Ortiz Alejandre", label: "Ab. Claudio Ortiz — Nexora Intelligence", bajada italic, bullets, CTA "Consultar ahora →"
2. **Tagline** — Fondo `#F5F4ED`, cita serif italic centrada: *"El derecho ordena. La gestión organiza. La tecnología potencia."*
3. **#servicios** — Grid 3x2 (6 cards) con numeración 01–06: Derecho Societario, Contratos Comerciales, Acuerdos de Accionistas, Marcas y Patentes, Gestión y Procesos, Tecnología IT
4. **#sobre-nosotros** — Tres bloques: intro del estudio → bloque Claudio (foto + bio) → bloque Nexora (texto + foto `/nexora.png`)
5. **#articulos** — 3 cards con imagen 16:9, categoría, título, resumen, link "Leer artículo →"
6. **#contacto** — Fondo oscuro `#1C1C1A`. Formulario blanco (5 campos) + datos de contacto derecha
7. **Footer** — Fondo `#151513`. 4 columnas: Navegación, Legal (Ley 25.326), Contacto, Branding

## Navbar
- Fixed, altura 68px, fondo transparente → blur on scroll
- Links: EXPERTISE · SOBRE NOSOTROS · ARTÍCULOS · CONTACTO
- Logo: *Ortiz Alejandre* en serif italic 28px
- Mobile: hamburger + drawer animado

## Formulario de contacto
- Campos: Nombre completo, Correo electrónico, Empresa (opcional), Mensaje
- Validación client-side: onChange + onBlur + onSubmit
- Shake animation (`@keyframes shake`) en submit con errores
- Borde rojo `#C45C5C` en campos con error
- Verde `#6A9E7A` en campos válidos
- Contador de caracteres en Mensaje (0/1000)
- Action: `https://formspree.io/f/FORM_ID` ← **pendiente reemplazar con ID real**
- Botón: `width: 100%`, fondo `#1C1C1A`, padding `18px`

## Artículos MDX — Frontmatter

```yaml
---
title: "Título del artículo"
slug: "slug-del-articulo"
fecha: "2026-04-24"
categoria: "Derecho Corporativo"
resumen: "Resumen breve de 1-2 líneas."
imagen: "/articulos/nombre.png"
---
```

## Pendientes del proyecto
- [ ] Reemplazar `FORM_ID` en Contacto con ID real de Formspree (se resuelve con el cliente)
- [ ] Integrar Cloudflare Turnstile anti-spam (requiere Site Key del cliente)
- [ ] Dominio personalizado: `ortizalejandre.com` (se compra con el cliente)
- [ ] Favicon personalizado con el logo OA
