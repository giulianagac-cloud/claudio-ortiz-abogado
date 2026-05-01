"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
    const rafFn = (time: number) => lenis.raf(time * 1000)
    lenis.on("scroll", ScrollTrigger.update)
    gsap.ticker.add(rafFn)
    gsap.ticker.lagSmoothing(0)

    // Global: animación de títulos de sección con skewY reveal
    const ctx = gsap.context(() => {
      document.querySelectorAll(".section-title").forEach((title) => {
        gsap.fromTo(
          title,
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
    })

    return () => {
      lenis.destroy()
      gsap.ticker.remove(rafFn)
      ctx.revert()
    }
  }, [])

  return <>{children}</>
}
