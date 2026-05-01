[ANIMACIONES.md](https://github.com/user-attachments/files/27280827/ANIMACIONES.md)
# Animaciones GSAP + Lenis — Brief para Claude Code

## Objetivo
Integrar animaciones scroll-driven inspiradas en el sitio Kimi/Lex Capital al proyecto Next.js existente de Ortiz Alejandre, sin romper la estructura actual ni el SSR de Next.js.

## Dependencias a instalar

```bash
npm install gsap lenis
```

> No instalar `@studio-freight/lenis` — usar el paquete oficial `lenis` directamente.

## Archivo de inicialización

Crear `/lib/animations.ts` con la lógica de GSAP + Lenis para importar desde los componentes cliente.

## Regla importante — Next.js App Router

Todos los componentes que usen GSAP o Lenis **deben tener `"use client"` al inicio**. GSAP no funciona en Server Components.

---

## Animación 1 — Smooth scroll (Lenis)

Inicializar Lenis una sola vez en un componente wrapper cliente. La forma correcta en Next.js App Router es crear un componente `SmoothScroll.tsx` y agregarlo en el `layout.tsx`.

```tsx
// components/SmoothScroll.tsx
"use client"
import { useEffect } from "react"
import Lenis from "lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
    lenis.on("scroll", ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)
    return () => {
      lenis.destroy()
    }
  }, [])
  return <>{children}</>
}
```

Agregar en `layout.tsx`:
```tsx
import SmoothScroll from "@/components/SmoothScroll"
// dentro del <body>:
<SmoothScroll>{children}</SmoothScroll>
```

---

## Animación 2 — Hero: entrada con stagger

En `Hero.tsx`, agregar refs a los elementos de texto y la foto, y animarlos al montar el componente.

**Elementos a animar:**
- `.hero-photo` — imagen izquierda: `scale: 1.08 → 1`, `opacity: 0 → 1`, duración 1.4s
- `.hero-label` — label uppercase: `y: 20 → 0`, `opacity: 0 → 1`, delay 0.3s
- `.hero-title` — h1 "Estudio Ortiz Alejandre": `y: 60 → 0`, `opacity: 0 → 1`, delay 0.5s
- `.hero-subtitle` — bajada italic: `y: 30 → 0`, `opacity: 0 → 1`, delay 0.7s
- `.hero-bullets` — los tres bullets: `y: 20 → 0`, `opacity: 0 → 1`, stagger 0.1s, delay 0.9s
- `.hero-cta` — botón CTA: `y: 15 → 0`, `opacity: 0 → 1`, delay 1.1s

Agregar parallax scroll en la foto:
```tsx
gsap.to(".hero-photo", {
  yPercent: -12,
  ease: "none",
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
})
```

**Importante:** remover los `opacity: 0` y `transform: translateY` actuales del inline style — GSAP los maneja.

---

## Animación 3 — Servicios: reveal por fila al hacer scroll

En `Servicios.tsx`, animar cada card de especialidad con un reveal al entrar al viewport.

```tsx
// Animar cada card de servicio
document.querySelectorAll(".servicio-card").forEach((card, i) => {
  gsap.fromTo(card,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      delay: (i % 3) * 0.1, // stagger por columna
    }
  )
})
```

Agregar `className="servicio-card"` a cada div de especialidad en `Servicios.tsx`.

---

## Animación 4 — Sobre Nosotros: clipPath reveal en imágenes

En `SobreNosotros.tsx`, animar las fotos de Claudio y Nexora con un clipPath reveal al hacer scroll, inspirado en el efecto de Kimi.

**Foto de Claudio (columna izquierda):**
```tsx
gsap.fromTo(".foto-claudio",
  { clipPath: "inset(0 100% 0 0)", opacity: 0 },
  {
    clipPath: "inset(0 0% 0 0%)",
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".foto-claudio",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  }
)
```

**Foto de Nexora (columna derecha, efecto invertido):**
```tsx
gsap.fromTo(".foto-nexora",
  { clipPath: "inset(0 0 0 100%)", opacity: 0 },
  {
    clipPath: "inset(0 0% 0 0%)",
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".foto-nexora",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  }
)
```

Agregar `className="foto-claudio"` al wrapper de la imagen de Claudio y `className="foto-nexora"` al de Nexora.

---

## Animación 5 — Títulos de sección: skewY reveal

Para los `h2` de cada sección (Servicios, Sobre Nosotros, Artículos, Contacto), animar con un leve skew al entrar al viewport.

```tsx
document.querySelectorAll(".section-title").forEach((title) => {
  gsap.fromTo(title,
    { y: 50, opacity: 0, skewY: 2 },
    {
      y: 0,
      opacity: 1,
      skewY: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: title,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  )
})
```

Agregar `className="section-title"` a cada `h2` de sección.

---

## Animación 6 — Cards de artículos: stagger reveal

En la sección de artículos del home y en `/articulos/page.tsx`:

```tsx
gsap.fromTo(".articulo-card",
  { y: 50, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: "power2.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: "#articulos",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  }
)
```

Las cards ya tienen `className="articulo-card"` en el código actual.

---

## Animación 7 — Navbar: cambio de color al scroll (ya existe, mejorar)

La navbar actual cambia fondo con CSS transition. Mejorar con GSAP para que el logo también cambie de color sutilmente al hacer scroll sobre secciones oscuras (contacto, footer).

```tsx
ScrollTrigger.create({
  trigger: "#contacto",
  start: "top 68px",
  end: "bottom 68px",
  onEnter: () => gsap.to(".navbar-logo", { color: "#F5F4ED", duration: 0.3 }),
  onLeave: () => gsap.to(".navbar-logo", { color: "#31332C", duration: 0.3 }),
  onEnterBack: () => gsap.to(".navbar-logo", { color: "#F5F4ED", duration: 0.3 }),
  onLeaveBack: () => gsap.to(".navbar-logo", { color: "#31332C", duration: 0.3 }),
})
```

Agregar `className="navbar-logo"` al span del logo en `Navbar.tsx`.

---

## Reemplazar `.fade-in` actual

El proyecto usa actualmente `.fade-in` con IntersectionObserver en `globals.css`. Una vez implementado GSAP, **remover** la clase `.fade-in` y su lógica de CSS/JS de `globals.css` para evitar conflictos. GSAP reemplaza completamente esa funcionalidad con más control.

---

## Consideraciones de performance

- Usar `gsap.context()` dentro de `useEffect` y limpiar con `ctx.revert()` en el return para evitar memory leaks.
- En mobile (`window.innerWidth < 768`), reducir la intensidad de las animaciones o desactivar el parallax para preservar performance.
- El `scrub: true` en el parallax del hero puede ser costoso — usar `scrub: 0.5` para suavizar sin ser pesado.
