"use client";

import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden"
    >
      {/* Imagen de fondo */}
      {
        <Image
          src="/hotel-city-3.jpg"
          alt="Portada Dique Rio Dulce"
          fill
          priority
          quality={75}
          className="object-cover"
        />
      }
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute h-full w-full object-cover"
      >
        <source src="/termalazo.mp4" type="video/mp4" />
        Tu navegador no soporta el video HTML5.
      </video> */}
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-white via-black/30 to-transparent" />
      {/* Contenido */}
      <div>
        <Fade
          cascade={true}
          damping={0.2}
          direction="down"
          className="text-shadow-dark/50 mx-auto max-w-5xl px-4 text-center text-white text-shadow-md"
        >
          <h1 className="font-hero mb-6 text-5xl font-semibold md:text-8xl">
            Gattella Industria Turística
          </h1>
          <h2 className="font-secondary text-accent mx-auto max-w-3xl text-xl leading-relaxed font-semibold italic md:text-3xl">
            Más que turismo, momentos auténticos e inolvidables
          </h2>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
