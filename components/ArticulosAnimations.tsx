"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ArticulosAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".articulo-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".articulo-card",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return null
}
