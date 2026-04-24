import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tagline from "@/components/Tagline";
import Servicios from "@/components/Servicios";
import SobreMi from "@/components/SobreMi";
import ArticulosHome from "@/components/ArticulosHome";
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
        <ArticulosHome />
        <Contacto />
        <Footer />
      </main>
    </>
  );
}
