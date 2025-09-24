"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  // Función para desplazarse a una sección
  const scrollToSection = (id: string) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="bg-dark flex w-full flex-col items-center justify-center">
      <div className="container flex h-full flex-col items-center justify-center gap-10 px-6 pt-10 text-base text-white md:flex-row md:items-start md:justify-around md:gap-0 md:px-0 md:text-lg">
        {/* Logo y redes */}
        <div className="flex flex-col items-center justify-center text-center md:items-center md:text-left">
          <Link href={"/"}>
            <Image
              alt="logo"
              src={"/logo-white-2.webp"}
              height={50}
              width={150}
            />
          </Link>
          <div className="mt-4 flex items-center justify-center gap-4 text-xl md:text-2xl">
            <Link
              href={"/"}
              className="hover:text-accent transition-colors duration-100"
            >
              <FaFacebookF />
            </Link>
            <Link
              href={"/"}
              className="hover:text-accent transition-colors duration-100"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center justify-center gap-2 text-center md:items-center md:text-left">
          <p className="mb-4 text-lg font-semibold md:text-2xl">Links</p>

          <button
            onClick={() => scrollToSection("hoteles")}
            className="hover:text-accent cursor-pointer transition-colors duration-200"
          >
            Hoteles
          </button>
          <button
            onClick={() => scrollToSection("servicios")}
            className="hover:text-accent cursor-pointer transition-colors duration-200"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("paquetes")}
            className="hover:text-accent cursor-pointer transition-colors duration-200"
          >
            Paquetes
          </button>
        </div>

        {/* Ayuda */}
        <div className="flex flex-col items-center justify-center gap-2 text-center md:items-center md:text-left">
          <p className="mb-4 text-lg font-semibold md:text-2xl">Ayuda</p>
          <button
            onClick={scrollToTop}
            className="hover:text-accent cursor-pointer transition-colors duration-200"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="hover:text-accent cursor-pointer transition-colors duration-200"
          >
            Contácto
          </button>
          <Link
            href={"/"}
            className="hover:text-accent transition-colors duration-100"
          >
            Política de privacidad
          </Link>
        </div>

        {/* Contactos */}
        <div className="flex flex-col items-center justify-center gap-2 text-center md:items-center md:text-left">
          <p className="mb-4 text-lg font-semibold md:text-2xl">Contáctos</p>
          <p>Las Termas de Rio Hondo - Sgo. del Estero</p>
          <p>Argentina</p>
          <p>+54 9 3858 53-8691</p>
          <Link href={"mailto:reservas@gattellaindustriaturistica.com"}>
            reservas@gattellaindustriaturistica.com
          </Link>
        </div>
      </div>

      {/* Derechos y autoría */}
      <div className="border-accent/30 mt-8 border-t-2 px-4 pt-6 pb-8 text-center">
        <p className="text-sm text-white md:text-base">
          © 2025 Gattella Industria Turística · Todos los derechos reservados ·
          Sitio desarrollado por
          <Link
            href={"https://ronin-webdesign.vercel.app/"}
            target="_blank"
            className="text-accent transition-all duration-100 hover:font-semibold"
          >
            {" "}
            Ronin WebDesign{" "}
          </Link>
          · Powered by
          <Link
            href={"https://www.aldereteinformatica.com.ar"}
            target="_blank"
            className="text-accent transition-all duration-100 hover:font-semibold"
          >
            {" "}
            Alderete Informática
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
