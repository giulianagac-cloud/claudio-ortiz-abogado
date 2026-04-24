"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const scrollLinks = [
  { label: "EXPERTISE", href: "servicios" },
  { label: "SOBRE NOSOTROS", href: "sobre-nosotros" },
];

const contactLink = { label: "CONTACTO", href: "contacto" };

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    [...scrollLinks, contactLink].forEach(({ href }) => {
      const el = document.getElementById(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  const handleScrollLink = (id: string) => {
    setMenuOpen(false);
    if (pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isArticulosActive = pathname.startsWith("/articulos");

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
          onClick={() => {
            if (pathname !== "/") {
              window.location.href = "/";
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="cursor-pointer bg-transparent border-none p-0"
        >
          <span
            className="font-serif italic"
            style={{ fontSize: 22, color: "#31332C", letterSpacing: "-0.01em" }}
          >
            Ortiz Alejandre
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {scrollLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleScrollLink(link.href)}
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
          <Link
            href="/articulos"
            className="font-sans"
            style={{
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: isArticulosActive ? "#505E80" : "#5C5E57",
              transition: "color 0.3s ease",
            }}
          >
            ARTÍCULOS
          </Link>
          <button
            onClick={() => handleScrollLink(contactLink.href)}
            className="font-sans cursor-pointer bg-transparent border-none p-0"
            style={{
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: activeSection === contactLink.href ? "#505E80" : "#5C5E57",
              transition: "color 0.3s ease",
            }}
          >
            {contactLink.label}
          </button>
        </nav>

        {/* Mobile toggle */}
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
          {scrollLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleScrollLink(link.href)}
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
          <Link
            href="/articulos"
            onClick={() => setMenuOpen(false)}
            className="font-sans"
            style={{
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: isArticulosActive ? "#505E80" : "#5C5E57",
              transition: "color 0.3s ease",
            }}
          >
            ARTÍCULOS
          </Link>
          <button
            onClick={() => handleScrollLink(contactLink.href)}
            className="font-sans text-left cursor-pointer bg-transparent border-none p-0"
            style={{
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: activeSection === contactLink.href ? "#505E80" : "#5C5E57",
              transition: "color 0.3s ease",
            }}
          >
            {contactLink.label}
          </button>
        </nav>
      </div>
    </header>
  );
}
