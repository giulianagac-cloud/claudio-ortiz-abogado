"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "EXPERTISE", href: "servicios" },
  { label: "THE FIRM", href: "the-firm" },
  { label: "CONTACT", href: "contacto" },
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

  const handleContactClick = () => {
    setMenuOpen(false);
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(251,249,244,0.93)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background 0.5s ease, backdrop-filter 0.5s ease",
      }}
    >
      <div
        className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between"
        style={{ height: 68 }}
      >
        {/* Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer bg-transparent border-none p-0"
        >
          <span
            className="font-serif italic"
            style={{ fontSize: 18, color: "#31332C", letterSpacing: "-0.01em" }}
          >
            Ortiz Alejandre
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="font-sans cursor-pointer bg-transparent border-none p-0"
              style={{
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: activeSection === link.href ? "#505E80" : "#5C5E57",
                transition: "color 0.3s ease",
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleContactClick}
            className="hidden md:block font-sans cursor-pointer border-none"
            style={{
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              background: "#505E80",
              color: "#F7F7FF",
              borderRadius: 0,
              padding: "10px 20px",
              transition: "background 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#445273")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#505E80")}
          >
            COORDINAR CONSULTA
          </button>

          <button
            className="md:hidden p-1 bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
              {menuOpen ? (
                <>
                  <line x1="1" y1="1" x2="21" y2="15" stroke="#31332C" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="21" y1="1" x2="1" y2="15" stroke="#31332C" strokeWidth="1.5" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="0" y1="1" x2="22" y2="1" stroke="#31332C" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="0" y1="8" x2="22" y2="8" stroke="#31332C" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="0" y1="15" x2="22" y2="15" stroke="#31332C" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          maxHeight: menuOpen ? 320 : 0,
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
          background: "rgba(251,249,244,0.97)",
          backdropFilter: "blur(12px)",
        }}
      >
        <nav className="flex flex-col px-6 py-8 gap-6">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="font-sans text-left cursor-pointer bg-transparent border-none p-0"
              style={{
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: activeSection === link.href ? "#505E80" : "#5C5E57",
                transition: "color 0.3s ease",
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={handleContactClick}
            className="font-sans cursor-pointer border-none w-fit"
            style={{
              fontSize: 10,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              background: "#505E80",
              color: "#F7F7FF",
              borderRadius: 0,
              padding: "10px 20px",
            }}
          >
            COORDINAR CONSULTA
          </button>
        </nav>
      </div>
    </header>
  );
}
