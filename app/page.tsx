import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QueEsOrtiz from "@/components/QueEsOrtiz";
import Servicios from "@/components/Servicios";
import SobreMi from "@/components/SobreMi";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QueEsOrtiz />
        <Servicios />
        <SobreMi />
        <Contacto />
        <Footer />
      </main>
    </>
  );
}
