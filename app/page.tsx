import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NuestraVision from "@/components/NuestraVision";
import Servicios from "@/components/Servicios";
import TheFirm from "@/components/TheFirm";
import Tagline from "@/components/Tagline";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <NuestraVision />
        <Servicios />
        <TheFirm />
        <Tagline />
        <Contacto />
        <Footer />
      </main>
    </>
  );
}
