export default function Footer() {
  return (
    <footer className="bg-[#0F1628] border-t border-[#1C2B4A]">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-sans text-sm text-[#667799]">
          © 2026 Claudio Ortiz. Todos los derechos reservados.
        </p>
        <p className="font-sans text-sm text-[#2A3E5E]">
          Desarrollado por{" "}
          <a
            href="#"
            className="text-[#2A3E5E] hover:text-[#8899AA] transition-colors duration-300"
          >
            Nexora Consulting
          </a>
        </p>
      </div>
    </footer>
  );
}
