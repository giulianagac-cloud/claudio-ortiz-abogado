"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "SERVICIOS", href: "servicios" },
  { label: "SOBRE NOSOTROS", href: "sobre-mi" },
  { label: "CONTACTO", href: "contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detecta sección activa
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    links.forEach(({ href }) => {
      const el = document.getElementById(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? "rgba(15,22,40,0.97)" : "rgba(15,22,40,1)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(196,185,154,0.08)" : "1px solid transparent",
        transition: "background 0.5s ease, border-color 0.5s ease, backdrop-filter 0.5s ease, box-shadow 0.5s ease",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between" style={{ height: 64 }}>

        {/* Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 cursor-pointer bg-transparent border-none"
          style={{ opacity: 1, transition: "opacity 0.3s ease" }}
        >
          <svg viewBox="0 0 44 44" fill="none" width={28} height={28}>
            <circle cx="15" cy="22" r="12" stroke="rgba(196,185,154,0.85)" strokeWidth="1.3"/>
            <circle cx="29" cy="22" r="12" stroke="rgba(196,185,154,0.85)" strokeWidth="1.3"/>
          </svg>
          <div className="flex flex-col items-start leading-none gap-0.5">
            <span className="font-serif text-white font-normal tracking-wide" style={{ fontSize: 15, transition: "font-size 0.4s ease" }}>
              Ortiz Alejandre
            </span>
            <span className="font-sans text-[#8899AA] uppercase" style={{ fontSize: 9, letterSpacing: "0.2em" }}>
              Derecho corporativo
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="relative font-sans text-xs uppercase tracking-widest cursor-pointer bg-transparent border-none"
              style={{
                color: activeSection === link.href ? "#E8E0D0" : "#8899AA",
                transition: "color 0.3s ease",
                paddingBottom: 4,
              }}
            >
              {link.label}
              {/* Underline activo */}
              <span style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                height: 1,
                background: "rgba(196,185,154,0.6)",
                transform: activeSection === link.href ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
              }} />
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            {menuOpen ? (
              <>
                <line x1="1" y1="1" x2="21" y2="15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="21" y1="1" x2="1" y2="15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </>
            ) : (
              <>
                <line x1="0" y1="1" x2="22" y2="1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="0" y1="8" x2="22" y2="8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="0" y1="15" x2="22" y2="15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div style={{
        maxHeight: menuOpen ? 300 : 0,
        overflow: "hidden",
        transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
        background: "rgba(15,22,40,0.98)",
        borderTop: menuOpen ? "1px solid rgba(196,185,154,0.08)" : "none",
      }}>
        <nav className="flex flex-col px-6 py-8 gap-6">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="font-sans text-sm uppercase text-left cursor-pointer bg-transparent border-none"
              style={{
                letterSpacing: "0.15em",
                color: activeSection === link.href ? "#E8E0D0" : "#8899AA",
                transition: "color 0.3s ease",
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
