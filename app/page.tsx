import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tagline from "@/components/Tagline";
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
        <Tagline />
        <Servicios />
        <SobreMi />
        <Contacto />
        <Footer />
      </main>
    </>
  );
}
