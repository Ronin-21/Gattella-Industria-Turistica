import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-dark flex w-full flex-col items-center justify-center">
      <div className="container flex h-full flex-col items-center justify-center gap-10 px-6 pt-10 text-base text-white md:flex-row md:items-start md:justify-around md:gap-0 md:px-0 md:text-lg">
        {/* Logo y redes */}
        <div className="flex flex-col items-center justify-center text-center md:items-center md:text-left">
          <Link href={"/"}>
            <Image
              alt="logo"
              src={"/logo-white-2.png"}
              height={50}
              width={150}
            />
          </Link>
          <div className="mt-4 flex items-center justify-center gap-4 text-xl md:text-2xl">
            <Link
              href={"/"}
              className="hover:text-primary transition-colors duration-100"
            >
              <FaFacebookF />
            </Link>
            <Link
              href={"/"}
              className="hover:text-primary transition-colors duration-100"
            >
              <FaInstagram />
            </Link>
            <Link
              href={"/"}
              className="hover:text-primary transition-colors duration-100"
            >
              <FaTiktok />
            </Link>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center justify-center gap-2 text-center md:items-center md:text-left">
          <p className="mb-4 text-lg font-semibold md:text-2xl">Links</p>
          <Link
            href={"/nosotros"}
            className="hover:text-primary transition-colors duration-100"
          >
            Historia
          </Link>
          <Link
            href={"/galeria"}
            className="hover:text-primary transition-colors duration-100"
          >
            Galería
          </Link>
          <Link
            href={"/habitaciones"}
            className="hover:text-primary transition-colors duration-100"
          >
            Habitaciones
          </Link>
        </div>

        {/* Ayuda */}
        <div className="flex flex-col items-center justify-center gap-2 text-center md:items-center md:text-left">
          <p className="mb-4 text-lg font-semibold md:text-2xl">Ayuda</p>
          <Link
            href={"/"}
            className="hover:text-primary transition-colors duration-100"
          >
            Inicio
          </Link>
          <Link
            href={"/contacto"}
            className="hover:text-primary transition-colors duration-100"
          >
            Contacto
          </Link>
          <Link
            href={"/"}
            className="hover:text-primary transition-colors duration-100"
          >
            Política de privacidad
          </Link>
        </div>

        {/* Contactos */}
        <div className="flex flex-col items-center justify-center gap-2 text-center md:items-center md:text-left">
          <p className="mb-4 text-lg font-semibold md:text-2xl">Contáctos</p>
          <p>Av. Manuel Belgrano 245</p>
          <p>Las Termas de Rio Hondo - Sgo. del Estero</p>
          <p>+54 9 3858 42-1018</p>
          <p>reservas@gattellaindustriaturistica.com</p>
        </div>
      </div>

      {/* Derechos y autoría */}
      <div className="border-primary/50 mt-2 border-t-2 px-4 pt-6 pb-8 text-center">
        <p className="text-sm text-white md:text-base">
          © 2025 Hotel City · Todos los derechos reservados · Sitio
          desarrollado por
          <Link
            href={"https://ronin-webdesign.vercel.app/"}
            target="_blank"
            className="text-primary transition-all duration-100 hover:font-semibold"
          >
            {" "}
            Ronin WebDesign{" "}
          </Link>
          · Powered by
          <Link
            href={"https://www.aldereteinformatica.com.ar"}
            target="_blank"
            className="text-primary transition-all duration-100 hover:font-semibold"
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
