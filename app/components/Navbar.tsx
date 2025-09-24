"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { TbMenuDeep, TbX } from "react-icons/tb";

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
        <div>
          <div className="border-accent/30 font-secondary container mx-auto flex items-center justify-between border-b px-5 py-4 md:px-0">
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61580480652128"
                target="_blank"
                className="hover:text-accent transition-colors duration-200"
              >
                <FaFacebookF className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.instagram.com/gattella_industria_turistica/"
                target="_blank"
                className="hover:text-accent transition-colors duration-200"
              >
                <FaInstagram className="h-6 w-6" />
              </Link>
            </div>
            <Link
              href="https://wa.me/+543858538691"
              target="_blank"
              className="hover:text-accent hidden items-center gap-2 transition-colors duration-200 md:flex"
            >
              <FaPhoneAlt />
              <p>+54 9 3858 53-8691</p>
            </Link>
            {/* Mobile Navigation */}

            <div className="z-20 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                className="text-white focus:outline-none"
              >
                {isOpen ? (
                  <TbX size={40} className="text-dark" />
                ) : (
                  <TbMenuDeep size={30} />
                )}
              </button>
            </div>

            {/* Mobile Menu Overlay */}

            {isOpen && (
              <div className="absolute top-0 left-0 z-10 flex h-dvh w-full flex-col items-center justify-center gap-10 bg-white md:hidden">
                <button
                  onClick={scrollToTop}
                  className="text-dark/80 text-3xl font-semibold"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection("hoteles")}
                  className="text-dark/80 text-3xl font-semibold"
                >
                  Hoteles
                </button>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-dark/80 text-3xl font-semibold"
                >
                  Servicios
                </button>
                <button
                  onClick={() => scrollToSection("paquetes")}
                  className="text-dark/80 text-3xl font-semibold"
                >
                  Travel Sale
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-dark/80 text-3xl font-semibold"
                >
                  Contacto
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Logo */}
        <div>
          <div className="border-accent/30 container mx-auto flex items-center justify-center border-b py-4">
            <Link href="/" className="relative h-24 w-40 overflow-hidden">
              <Image
                src={"/logo-color-2.png"}
                alt="logo"
                fill
                className="object-contain"
              />
            </Link>
          </div>
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
            onClick={() => scrollToSection("hoteles")}
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
            Travel Sale
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
