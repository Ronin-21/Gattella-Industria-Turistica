import Image from "next/image";

const WelcomeSection = () => {
  return (
    <section className="relative container mx-auto my-20 min-h-[700px]">
      {/* contenido */}
      <div className="bg-dark text-light shadow-dark/50 flex min-h-[400px] w-full flex-col items-center gap-6 p-8 text-center leading-relaxed tracking-wide shadow-lg md:absolute md:top-0 md:right-0 md:w-[750px] lg:p-16 2xl:w-[900px]">
        <h3 className="font-title text-accent text-4xl leading-relaxed tracking-wide">
          Quienes Somos?
        </h3>
        <p className="max-w-xl 2xl:max-w-2xl">
          En Gattella Industria Turística nos dedicamos a la gestión de hoteles
          en Termas de Río Hondo, con la misión de crear experiencias auténticas
          que trascienden la estadía.
        </p>
        <p className="max-w-xl 2xl:max-w-2xl">
          Buscamos posicionar a la ciudad como un destino de referencia en
          bienestar, recreación y hospitalidad, combinando tradición,
          gastronomía de calidad y un servicio cercano.
        </p>
        <p className="max-w-xl 2xl:max-w-2xl">
          Porque para nosotros, es más que turismo, son momentos auténticos.
        </p>
      </div>
      {/* imagen */}
      <div className="shadow-dark/50 left-0 shadow-lg md:absolute md:bottom-0">
        <Image
          src="/img-1.webp"
          alt="Welcome"
          width={700}
          height={600}
          className="h-[500px] w-full object-cover md:w-[600px] 2xl:h-[600px] 2xl:w-[700px]"
        />
      </div>
    </section>
  );
};

export default WelcomeSection;
