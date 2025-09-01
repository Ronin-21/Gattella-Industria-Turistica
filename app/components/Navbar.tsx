"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaTiktok } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para desplazarse a una sección
  const scrollToSection = (id: string) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false); // Cierra el menú en mobile al hacer clic
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Sub Navbar */}
      <div className="bg-dark text-light w-full">
        {/* Socials */}
        <div className="font-secondary border-accent/50 container mx-auto flex items-center justify-between border-b py-4">
          <div className="flex space-x-4">
            <Link
              href="#"
              className="hover:text-accent transition-colors duration-200"
            >
              <FaFacebookF className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="hover:text-accent transition-colors duration-200"
            >
              <FaInstagram className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="hover:text-accent transition-colors duration-200"
            >
              <FaTiktok className="h-6 w-6" />
            </Link>
          </div>
          <Link
            href="https://wa.me/+543858480489"
            target="_blank"
            className="hover:text-accent flex items-center gap-2 transition-colors duration-200"
          >
            <FaPhoneAlt />
            <p>+54 (3858) 48 0489</p>
          </Link>
        </div>
        {/* Logo */}
        <div className="border-accent/50 container mx-auto flex items-center justify-center border-b py-4">
          <Link href="/" className="relative h-24 w-40 overflow-hidden">
            <Image
              src={"/logo-white-2.png"}
              alt="logo"
              fill
              className="object-contain"
            />
          </Link>
        </div>
      </div>
      {/* Desktop Navigation */}
      <nav className="bg-dark text-light sticky top-0 z-50 w-full">
        <div className="font-secondary container mx-auto hidden items-center justify-around gap-10 py-4 md:flex">
          <button
            onClick={scrollToTop}
            className="hover:text-accent cursor-pointer text-lg transition-colors duration-200"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("galeria")}
            className="hover:text-accent cursor-pointer text-lg transition-colors duration-200"
          >
            Hoteles
          </button>
          <button
            onClick={() => scrollToSection("servicios")}
            className="hover:text-accent cursor-pointer text-lg transition-colors duration-200"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("paquetes")}
            className="hover:text-accent cursor-pointer text-lg transition-colors duration-200"
          >
            Paquetes
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="hover:text-accent cursor-pointer text-lg transition-colors duration-200"
          >
            Contácto
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

{
  /* Mobile Navigation */
}
{
  /* <div className="md:hidden">
  <button
    onClick={() => setIsOpen(!isOpen)}
    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
    className="text-dark/80 hover:text-primary focus:outline-none"
  >
    {isOpen ? <TbX /> : <TbMenuDeep />}
  </button>
</div> */
}
{
  /* Mobile Menu Overlay */
}
/* {isOpen && (
  <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full gap-10 bg-white -z-10 h-dvh md:hidden">
    <button
      onClick={scrollToTop}
      className="text-3xl font-semibold text-dark/80"
    >
      Inicio
    </button>
    <button
      onClick={() => scrollToSection("galeria")}
      className="text-3xl font-semibold text-dark/80"
    >
      Galería
    </button>
    <button
      onClick={() => scrollToSection("servicios")}
      className="text-3xl font-semibold text-dark/80"
    >
      Servicios
    </button>
    <button
      onClick={() => scrollToSection("paquetes")}
      className="text-3xl font-semibold text-dark/80"
    >
      Paquetes
    </button>
  </div>
)} */
