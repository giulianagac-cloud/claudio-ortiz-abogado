export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#333333]">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-sans text-xs text-[#666666]">
          © 2026 Claudio Ortiz. Todos los derechos reservados.
        </p>
        <p className="font-sans text-xs text-[#555555]">
          Desarrollado por{" "}
          <a
            href="#"
            className="text-[#555555] hover:text-[#999999] transition-colors duration-300"
          >
            Nexora Consulting
          </a>
        </p>
      </div>
    </footer>
  );
}
