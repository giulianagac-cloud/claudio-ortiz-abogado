import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import SobreMi from "@/components/SobreMi";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Servicios />
      <SobreMi />
      <Contacto />
      <Footer />
    </>
  );
}
